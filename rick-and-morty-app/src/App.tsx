import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterListPage from "./pages/CharacterListPage";
import CharacterDetail from "./pages/CharacterDetail";
import "./styles/main.scss";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CharacterListPage />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
