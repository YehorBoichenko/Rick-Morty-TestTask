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
