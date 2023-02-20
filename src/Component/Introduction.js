import React from "react";
import { useState } from "react";

function Introduction(props) {
  const [name, setName] = useState("Manoj");

  const handleChangeName = () => {
    console.log("handleChangeName called");
    setName("Prabhas");
  };

  console.log("props of Introduction", props, name);
  return (
    <div>
      <h1>Introduction</h1>
      <h2>Name : {name}</h2>
      <h2>
        {props.ageProp} {props.nameProp}
      </h2>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default Introduction;
