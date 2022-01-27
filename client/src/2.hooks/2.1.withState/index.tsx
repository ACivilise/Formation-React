import { useState } from 'react';
import WithCondition from '1.basicComponents/1.2.withCondition';

const WithState = () => {
  const [isTitle, setIsTitle] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1> Composant avec un hook d'état (useState)</h1>
      <button onClick={() => setIsTitle((prev) => !prev)}>modifier la taille du titre</button>
      <WithCondition text="WithState" isTitle={isTitle} />
    </div>
  );
};

export default WithState;
