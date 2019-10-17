// @flow
import * as React from "react";
/* import { Link } from "react-router-dom"; */
/* import ReactDOM from 'react-dom'; */
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
/* import { NamespacesConsumer } from "react-i18next"; */

// css
 import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2
        };
    }

    render() {
        return (
           

<nav className="amado-nav">
                <ul>
                    <li className="active"><Link to="index.html">Home</Link></li>
                    <li><Link to="shop.html">Shop</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="cart.">Cart</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
