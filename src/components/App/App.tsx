import React from "react";
import { NavLink, Route } from "react-router-dom";

import { ComponentStrings } from "../../Constants";
import Routes from "../../Routes";

import { ContentArea } from "../Layout";
import { Heading } from "./index";
import { NavContainer } from "../Nav";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";

export const App = () => {
  const { text, subheading } = ComponentStrings.App.Heading;
  return (
    <>
      <Heading text={text} subheading={subheading} />
      <NavContainer />
      <ContentArea>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.PROJECTS} component={Projects} />
      </ContentArea>
    </>
  );
};
