/**
A React component that displays the website footer
@param {Object} props - Component props
@param {string} props.author - The name of the author
@param {string} props.website - The website url of the author
@returns {JSX.Element} - A React component that displays the website footer with author and website information
*/
import React from "react";
interface FooterProps {
  author: string;
  website: string;
}


const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
    >
      {`© ${new Date().getFullYear()}, 💻 with ❤ by `}
      <a
        className="FooterLink"
        href={"https://super-daifuku-fdceba.netlify.app"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Yehor Boichenko
      </a>
      .
    </footer>
  );
};

export default Footer;
