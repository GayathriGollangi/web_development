import React from "react";
import styles from "./Person.module.css";

const Person = ({ name, age }) => {
  console.log(name, age);
  return (
    <div>
      <h1 className={styles.heading}>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};

export default Person;
