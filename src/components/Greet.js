import React from "react";

const Greet = (props) => {
  //destructuring of props by parameters({name,heroName})
  const { name, heroName } = props; //destructuring of props in function body
  return (
    <h1>
      {" "}
      {name} a.k.a {heroName}
    </h1>
  );
};

export default Greet;
