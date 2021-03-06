import React, { Fragment, useContext } from 'react';

import { Dropdown, Badge, Button } from 'react-bootstrap';
import Link from 'next/link'
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import contexts from '../context/contexts';
import Sort from './Sort';
import Pair from './Pair';

const Header = () => {
  const context = useContext(contexts);
  return (
    <Fragment>
      <nav
        style={{ height: 80 }}
        className="navbar navbar-expand-lg navbar-dark bg-dark text-warning"
      >
        <div className="container">
          <Link className="navbar-brand text-warning" href="/">
            drink-shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
          
            <Pair />

            <Dropdown alignRight>
              <Dropdown.Toggle variant="warning">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{context.cards.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: '370' }}>
                {context.cards.length === 0 ? (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                ) : (
                  <Link href="/Cart">
                    <Button
                      style={{ width: '85%', margin: '0px 10px' }}
                      variant="dark"
                    >
                      Go to cart
                    </Button>
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown alignRight className="ms-2">
              <Dropdown.Toggle variant="warning">
                <FaStar color="white" fontSize="25px" />
                <Badge>{context.favorite.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {context.favorite.length === 0 ? (
                  <span style={{ padding: 10 }}>Favorite is Empty!</span>
                ) : (
                  <Link href="/Favorite">
                    <Button
                      style={{ width: '85%', margin: '0px 10px' }}
                      variant="dark"
                    >
                      Go to favorite
                    </Button>
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
       
        </div>
      </nav>
    <Sort />
   
    </Fragment>
  );
};

export default Header;
