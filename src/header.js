import React, {Component} from "react";
import logo from "./images/logo.svg";
import "./header.css";

class Header extends Component {
    render() {
        return <div className="header">
            <img src={logo} alt="logo" width={32} height={32}/>
        </div>;
    }
}

export default Header;
