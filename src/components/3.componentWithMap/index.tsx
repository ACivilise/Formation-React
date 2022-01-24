import React from "react";
import ComponentWithCondition from "components/2.componentWithCondition";

const ComponentWithMap = () => {
  const texts = [
    {
      text: "premier titre",
      isTitle: false,
    },
    {
      text: "deuxième titre",
      isTitle: false,
    },
    {
      text: "troisième titre",
      isTitle: true,
    },
  ];
  return (
    <div>
      {texts.map(({ text, isTitle }) => (
        <ComponentWithCondition text={text} isTitle={isTitle} />
      ))}
    </div>
  );
};

export default ComponentWithMap;
