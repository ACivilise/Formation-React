import React from "react";
import { MyProps } from "./types";

const ComponentWithProps = (props: MyProps) => {
  return <h1>{props.text}</h1>;
};

// you can only have one default export
export default ComponentWithProps;
