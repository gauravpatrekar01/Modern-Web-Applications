/*
import { useState, useMemo } from "react";


const App = () => {
  const [init, updateCount] = useState(0);
  const [arr, updateArray] = useState(["Shree"]);

  const heavyOP = useMemo(() => largeCal(init), [init]);

  const incre = () => {
    updateCount(init + 1);
  };

  const arrIncre = () => {
    updateArray([...arr, "Shree"]);
  };

  return (
    <>
      <p>heavyOP == {heavyOP}</p>

      <h1>App UseDemo</h1>

      <h2>Count: {init}</h2>

      <button onClick={incre}>Increment</button>

      <h2>Array Operations</h2>

      {arr.map((ele, index) => {
        return <p key={index}>Shree == {ele}</p>;
      })}

      <button onClick={arrIncre}>Add Array</button>
    </>
  );
};

const largeCal = (num) => {
  let result = 0;

  for (let i = 0; i < 1000000; i++) {
    result += num;
  }

  return result;
};

export default App;
*/

import { useState, useCallback } from "react";
import ButtonComponent from "/components/ButtonComponent";

const App = () => {
  const [data, updateData] = useState("");

  const dataIncre = useCallback(() => {
    alert("Data Incremented");
    updateData(data + " Gaurav");
  }, [data]);

  return (
    <>
      <h1>useCallback Example</h1>

      <h2>Data: {data}</h2>

      <ButtonComponent onClick={dataIncre}>
        Increment Data
      </ButtonComponent>
    </>
  );
};

export default App;