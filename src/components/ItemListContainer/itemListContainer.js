import React, { useState, useEffect } from "react";
import "./style.css";
import CardComponents from "../cardComponents/cardComponents";

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => {
        return <CardComponents data={user}/>;
      })}
    </div>
  );
};

export default ItemListContainer;
