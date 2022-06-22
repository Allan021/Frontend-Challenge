import React from "react";
import { Link } from "react-router-dom";

export const FicohsaLogo = () => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "inherit",
        width: "120px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100px",
          objectFit: "cover",
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ficohsa_logo.png/640px-Ficohsa_logo.png"
        alt="logo ficohsa"
      />
    </Link>
  );
};
