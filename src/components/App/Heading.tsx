import React from "react";
import { ContentArea } from "../Layout";

interface AppHeadingProps {
  text: string;
  subheading: string;
}

export const Heading: React.FC<AppHeadingProps> = ({ text, subheading }) => {
  const subSpans = subheading.split(/\s+/).map(word => <span>{word}</span>);
  return (
    <ContentArea>
      <h1 className="App-heading">{text}</h1>
      <h2 className="App-subheading">{subSpans}</h2>
    </ContentArea>
  );
};
