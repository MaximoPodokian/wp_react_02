import React, {useState, useEffect} from "react";
import "./style.css";
import CardComponents from "../cardComponents/cardComponents";

const ItemListContainer = ({ greeting }) => {
const [users, setUsers] = useState([])

useEffect(() =>{
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(json => setUsers(json));
}, []);


  return (
    <div className="cards-List  recuadroPantallaPrincipal">
     <p className="mensajePantallaPrincipal"> Bienvenido a la Tienda !!!</p> 
    {users.map((users) => {
      return <CardComponents data={users}/>;
     }) };
     </div>
  );
};

export default ItemListContainer;
