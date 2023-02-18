import React, {useState, useEffect} from "react";
import "./style.css";
import CardComponents from "../cardComponents/cardComponents";

const ItemListContainer = ({ greeting }) => {
const [users, setUsers] = useState([])

useEffect(() =>{
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  .then(response => response.json())
  .then(json => setUsers(json));
}, []);


  return (   
    <div className="cards-List  recuadroPantallaPrincipal">
    {users.map((users => {
      return <CardComponents data={users}/>;
    }))};
     </div>
  );
};

export default ItemListContainer;
