import { useState } from "react";

const App = () => {
  const [initstate, updatestate] = useState("1");
  const [no, updateNo] = useState("");

  const add = () => {
    updatestate(initstate + "," + no);
  };

  const pop = () => {
    const arr = initstate.split(",");
    arr.pop();
    updatestate(arr.join(","));
  };

  return (
    <>
      <p>Designed by Gaurav</p>

      <input
        type="number"
        placeholder="Enter a number"
        value={no}
        onChange={(e) => updateNo(e.target.value)}
      />

      <button style={{ margin: 10 }} onClick={add}>
        push
      </button>

      <button style={{ margin: 10 }} onClick={pop}>
        pop
      </button>

      <br />
      <br />

      {initstate.split(",").map((ele, index) => (
        <p key={index}>Gaurav == {ele}</p>
      ))}
    </>
  );
};

export default App;