import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header/Header";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import ItemPage from "../Pages/ItemPage";
import Item from"../components/Item/Item"
/* import {BrowserRouter as  Router}from "react-router-dom";
 */

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.getItems = this.getItems.bind(this);
    }
    componentDidMount() {
        this.getItems();
    }

    async getItems() {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/item`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-origin": "http://127.0.0.1:8000/api/item/",
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const items = await res.json();
            console.log("me", items);
            
            this.setState({ items: items });
        } catch (err) {
            console.log(err);
            throw new Error("fetchig items  failed");
        }
    }

    render() {
        console.log("here app", this.items);
        return (
            <div className="container">
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/Product"
                            render={(props)=><ItemPage  items={this.state.items}
                            getItems={this.getItems } { ...props}  />}
                        />
                    </Switch>
                </Router>

                <div className="body"></div>
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
