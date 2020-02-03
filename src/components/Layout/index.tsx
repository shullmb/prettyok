import React from "react";

export const ContentArea: React.FC = ({ children }) => (
  <section className="l-ContentArea">{children}</section>
);

export const BackgroundArea: React.FC = ({ children }) => (
  <section className="l-BackgroundArea">{children}</section>
);
