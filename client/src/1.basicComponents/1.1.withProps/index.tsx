import React, { useEffect, useRef } from 'react';
import { MyProps } from './types';

const WithProps = (props: MyProps) => {
  const myRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current;
    }
  }, [myRef.current]);

  return (
    <div>
      <h1 ref={myRef}>WithProps</h1>
      <h2>{props.text}</h2>
    </div>
  );
};

// you can only have one default export
export default WithProps;
