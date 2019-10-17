import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header/Header";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import ItemPage from "../Pages/ItemPage";
import Login from "../components/Login/Login";
import Item from "../components/Item/Item";
import Register from "../components/Register/Register";
/* import {BrowserRouter as  Router}from "react-router-dom";
 */

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoggedIn: false,
            user: {}
        };
        this.getItems = this.getItems.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }
    componentDidMount() {
        this.getItems();
        this.registerUser();
        //------------------------------some code i dont know anything about
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
        //---------------- end of ununderstandable code----------
    }

    async getItems() {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/item`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-origin":
                        "http://127.0.0.1:8000/api/item/",
                    Accept: "application/json",
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

    // login function
    loginUser(email, password) {
        $("#login-form button")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios
            .post("http://localhost:8000/api/user/login/", formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert("Login Successful!");

                    let userData = {
                        name: json.data.data.name,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                } else alert("Login Failed!");

                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            })
            .catch(error => {
                alert(`An Error Occured! ${error}`);
                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            });
    }

    // ------------end of login function-----------

    //----------register user function

 async   registerUser(name, email, password) {
    
        var formData = new FormData();
        formData.append("password", password);
        formData.append("email", email);
        formData.append("name", name);
        console.log("register", formData);

      const response = await   fetch('http://localhost:8000/api/user/register', {
            method: 'post',
            body: formData,
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        })
        const json = await response.json();
        
        if (json.success) {
            alert(`Registration Successful!`);

            let userData = {
                name: json.data.name,
                id: json.data.id,
                email: json.data.email,
                auth_token: json.data.auth_token,
                timestamp: new Date().toString()
            };
            let appState = {
                isLoggedIn: true,
                user: userData
            };
            // save app state with user date in local storage
            localStorage["appState"] = JSON.stringify(appState);
            this.setState({
                isLoggedIn: appState.isLoggedIn,
                user: appState.user
            });
        } else {
            alert(`Registration Failed!`);
        }
    }

    //------------end of register user function

    //----log out function-----

    logoutUser() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
    }

    //----------end of logout function--------

    render() {
        console.log("here app", this.items);
        return (
            <div className="container">
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/Product"
                            render={props => (
                                <ItemPage
                                    items={this.state.items}
                                    getItems={this.getItems}
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            path="/Login"
                            render={props => (
                                <Login {...props} loginUser={this.loginUser} />
                            )}
                        />
                        <Route
                            path="/Register"
                            render={props => (
                                <Register
                                    {...props}
                                    registerUser={this.registerUser}
                                />
                            )}
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
