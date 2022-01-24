import React, { useEffect, useState } from "react";

const ComponentWithUseEffect = () => {
  const tilte = "titre";

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    // Si counter est pair, on change de couleur
    if (counter % 2 === 0) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
    }
  }, [counter]);

  return (
    <div style={{ width: "100%", backgroundColor: color }}>
      <h1>{color}</h1>
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

export default ComponentWithUseEffect;
