import React, { useState } from "react";
import ComponentWithCondition from "components/2.componentWithCondition";

const ComponentWithState = () => {
  const [isTitle, setIsTitle] = useState(false);
  return (
    <div>
      <button onClick={() => setIsTitle((prev) => !prev)}>
        modifier la taille du titre
      </button>
      <ComponentWithCondition text="ComponentWithState" isTitle={isTitle} />
    </div>
  );
};

export default ComponentWithState;
