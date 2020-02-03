import React from "react";
import { Route } from "react-router-dom";

import { ComponentStrings } from "../../Constants";
import Routes from "../../Routes";

import { Main, Footer } from "../Layout";
import { Heading } from "./index";
import { NavContainer } from "../Nav";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";

export const App = () => {
  const { text, subheading } = ComponentStrings.App.Heading;
  return (
    <div className="App l-BackgroundArea">
      <Heading text={text} subheading={subheading} />
      <NavContainer />
      <Main>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.PROJECTS} component={Projects} />
      </Main>
      <Footer />
    </div>
  );
};
