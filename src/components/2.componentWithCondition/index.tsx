import React from "react";
import { MyProps } from "./types";

const ComponentWithCondition = ({ title, big }: MyProps) => {
  return big ? <h1>{title}</h1> : <h3>{title}</h3>;
};

export default ComponentWithCondition;
