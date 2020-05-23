import React from "react";

function NameList() {
  //   const names = ["Muni", "Ash", "Moni"];     //1st method
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
  // }
  const persons = [
    {
      id: 1,
      name: "Muni",
      age: 21,
      skill: "Reactjs",
    },
    {
      id: 2,
      name: "Moni",
      age: 21,
      skill: "pharmacy",
    },
    {
      id: 3,
      name: "Ash",
      age: 21,
      skill: "Python",
    },
  ];

  const personList = persons.map((person) => (
    <h2 key={person.name}>
      Iam {person.name},Iam {person.age} old and I know {person.skill}{" "}
    </h2> /*solves unique key problem*/
  ));

  return <div>{personList}</div>;
}
export default NameList;
