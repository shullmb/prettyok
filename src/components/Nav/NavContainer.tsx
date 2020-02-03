import React from "react";
import { NavLink } from "react-router-dom";

import Routes from "../../Routes";

import { ContentArea } from "../Layout";

export const NavContainer: React.FC = () => {
  return (
    <ContentArea>
      <NavLink className="Nav-link" to={Routes.HOME}>
        /
      </NavLink>
      &nbsp;
      <NavLink
        className="Nav-link"
        activeClassName={"is-active"}
        to={Routes.PROJECTS}
      >
        /projects
      </NavLink>
    </ContentArea>
  );
};
