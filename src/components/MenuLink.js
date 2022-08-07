import React from "react";
import { Link } from "react-router-dom";
const MenuLink = () => {
  return (
    <div className="justify-center py-6 flex gap-4">
      <Link to="breackfast">Breakfast</Link>
      <Link to="lunch">Lunch</Link>
      <Link to="dinner">Dinner</Link>
    </div>
  );
};

export default MenuLink;
