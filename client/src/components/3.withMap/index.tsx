import WithCondition from "components/2.withCondition";

const WithMap = () => {
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
    {
      text: "quatrième titre",
      isTitle: true,
    },
    {
      text: "etc",
      isTitle: false,
    },
  ];
  return (
    <div>
      {texts.map(({ text, isTitle }, index) => (
        <WithCondition key={index} text={text} isTitle={isTitle} />
      ))}
    </div>
  );
};

export default WithMap;
