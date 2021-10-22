import React from "react";
import { Link } from "react-router-dom";
import Home from './../../../Pruebas/impormedica/src/components/Home';

const NavBar = () => {
  return <div>
    <Link to={`/`}>Home</Link>
  </div>;
};
export default NavBar;
