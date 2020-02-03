import React from "react";

export const ContentArea: React.FC = ({ children }) => (
  <div className="l-ContentArea">{children}</div>
);

export const BackgroundArea: React.FC = ({ children }) => (
  <div className="l-BackgroundArea">{children}</div>
);

export const Footer: React.FC = ({ children }) => (
  <footer className="l-Footer">
    <p className="l-Footer-info">
      &copy; {new Date().getFullYear()},{" "}
      <a href="http://www.github.com/shullmb">Michael Shull</a>
    </p>
  </footer>
);

export const Main: React.FC = ({ children }) => (
  <main className="l-ContentArea l-Main">{children}</main>
);
