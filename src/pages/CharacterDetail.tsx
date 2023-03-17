/**

React component that displays detailed information about a character.
Retrieves data for the specified character ID using the fetchCharacterById function from ../services/api.
Renders a loader while waiting for the data to be fetched.
If the ID is not provided, redirects to the home page using the Navigate component from react-router-dom.
@returns React component
*/
import React, { useState, useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import Loader from "../components/Loader";
import GoBack from "../components/GoBack";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../services/api"; // assuming the Character type is defined in a types.ts file

function CharacterDetail() {
// character is a state variable that stores the data for the specified character
const [character, setCharacter] = useState<Character | null>(null);
// id is the character ID specified in the URL
const { id } = useParams<{ id: string }>();
// prevPage is the location from which the user navigated to this page
const location = useLocation();

  // Use an effect to fetch the character data when the component mounts or the ID changes
useEffect(() => {
// fetchCharacter is an async function that retrieves the character data for the specified ID using fetchCharacterById
const fetchCharacter = async () => {
try {
const data = await fetchCharacterById(parseInt(id ?? ''));
setCharacter(data);
} catch (error) {
console.error(error);
}
};
    if (id) {
      fetchCharacter();
    }
  }, [id]);

  const prevPage = location.state?.from ?? "/";
// If the ID is not provided, redirect to the home page
if (!id) {
return <Navigate to="/" />;
}

// If the character data has been fetched, render the character card along with a "go back" button
// Otherwise, render the loader
return (
<div className="container">
{character ? (
<>
<GoBack to={prevPage} />
<CharacterCard character={character} />
</>
) : (
<Loader />
)}
</div>
);
}

export default CharacterDetail;