import React from "react";
import Question from "./Question";
import { data } from "../data";

const Questions = () => {
  return (
    <section className="info">
      {data.map((d) => {
        return <Question info={d} />;
      })}
    </section>
  );
};

export default Questions;
