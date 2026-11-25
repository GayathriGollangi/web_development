import React from "react";
import Person from "./Person";

const List = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map((ele) => {
        return <Person key={ele.id} name={ele.name} age={ele.age} />;
      })}
    </div>
  );
};

export default List;
