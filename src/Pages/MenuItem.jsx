import React from "react";
import Banner from "../components/Banner";
import MenuLink from "../components/MenuLink";
import { Outlet } from "react-router-dom";

const MenuItem = () => {
  return (
    <div>
      <Banner />
      <MenuLink />
      <Outlet />
    </div>
  );
};

export default MenuItem;
