import React, {Component} from "react";
import Header from "./header";
import Content from "./content";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import "./app.css";

class App extends Component {
    render() {
        return <BrowserRouter>
            <div className="app">
                <Header/>
                <Route strict path="/:org" component={Content} />
                <Route path="/" exact render={() => <Redirect to="/facebook" />} />
            </div>
        </BrowserRouter>;
    }
}

export default App;
