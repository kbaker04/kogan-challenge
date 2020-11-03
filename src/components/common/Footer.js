import React from "react";

const Footer = () => {
  const footerStyles = {
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  };

  return (
    <div>
      <footer style={footerStyles}>
        <p>Kogan Coding Challenge - Created by Kenneth Baker 3/11/20</p>
      </footer>
    </div>
  );
};

export default Footer;
