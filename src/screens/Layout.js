import React from "react";
import ItemListContainer from "../components/ItemListContainer/itemListContainer";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <ItemListContainer greeting="Bienvenidos a la Tienda !!!" />
    </>
  );
};

export default Layout;
