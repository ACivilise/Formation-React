import React, { useMemo, useState } from "react";

const ComponentWithUseMemo = () => {
  const tilte = "titre";

  const [counter, setCounter] = useState(0);

  const color = useMemo(() => {
    if (counter % 2 === 0) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomColor}`;
    }
  }, [counter]);

  return (
    <div style={{ width: "100%", backgroundColor: color }}>
      <div>
        <h1>{color}</h1>
        <h2>{counter}</h2>
      </div>
      <div style={{ width: "50%" }}>
        <button onClick={() => setCounter((prev) => prev++)}>
          {`changer la couleur ${color}`}
        </button>
      </div>
      <div style={{ width: "50%" }}>
        <h1>{tilte}</h1>
      </div>
    </div>
  );
};

export default ComponentWithUseMemo;
