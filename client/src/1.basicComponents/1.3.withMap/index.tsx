import React from 'react';
import WithCondition from '1.basicComponents/1.2.withCondition';

const WithMap = () => {
  const texts = [
    {
      text: 'premier titre',
      isTitle: false,
    },
    {
      text: 'deuxième titre',
      isTitle: false,
    },
    {
      text: 'troisième titre',
      isTitle: true,
    },
    {
      text: 'quatrième titre',
      isTitle: true,
    },
    {
      text: 'etc',
      isTitle: false,
    },
  ];
  return (
    <div>
      <h1>WithMap</h1>
      {texts.map(({ text, isTitle }, index) => (
        <WithCondition key={index} text={text} isTitle={isTitle} />
      ))}
    </div>
  );
};

export default WithMap;
