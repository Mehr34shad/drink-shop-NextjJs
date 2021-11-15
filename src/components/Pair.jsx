import React, { useContext } from "react";
import Link from 'next/link'
import contexts from "../context/contexts.js";


const Pair = () => {
  const context = useContext(contexts);
  const { allbeer, beerpizza, beersteak } = context;
  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link"
            href="/"
            aria-current="page"
            onClick={beerpizza}
          >
            Drinks paired with pizza
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/" onClick={beersteak}>
            Drinks paired with steak
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/" onClick={allbeer}>
            All drinks
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pair;
