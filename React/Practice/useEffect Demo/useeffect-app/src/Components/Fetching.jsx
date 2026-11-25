import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, []);
  return (
    <div>
      Data Fetching
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fetching;
