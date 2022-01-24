import React, { useCallback, useState } from "react";

const ComponentWithUseCallBack = () => {
  const tilte = "titre";
  const [color, setColor] = useState("#000");

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: color }}>
      <h1>{color}</h1>
      <div style={{ width: "50%" }}>
        <button onClick={() => changeColor()}>
          {`changer la couleur ${color}`}
        </button>
      </div>
      <div style={{ width: "50%" }}>
        <h1>{tilte}</h1>
      </div>
    </div>
  );
};

export default ComponentWithUseCallBack;
