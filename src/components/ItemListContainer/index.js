import React from "react";
import "./style.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="recuadroPantallaPrincipal">
      <p className="mensajePantallaPrincipal">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
