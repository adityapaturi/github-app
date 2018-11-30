import React, {Component} from "react";
import "./side-bar.css";

class SideBar extends Component {
    render() {
        return <div className="sidebar">
            <div className="sidebarTitle">Projects</div>
            <ul className="projects">
                {this.props.projects.map((project)=> {
                    return <li key={project.name}>{project.name}</li>;
                })}
            </ul>
        </div>;
    }
}

export default SideBar;
