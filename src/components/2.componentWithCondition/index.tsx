import React from "react";
import { MyProps } from "./types";

const ComponentWithCondition = ({ text, isTitle }: MyProps) => {
  return isTitle ? <h1>{text}</h1> : <p>{text}</p>;
};

export default ComponentWithCondition;
