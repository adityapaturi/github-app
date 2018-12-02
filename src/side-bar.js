import React, {Component} from "react";
import PropTypes from "prop-types";
import constants from "./constants";
import loaderImage from "./images/loader.svg";
import errorImage from "./images/error.svg";
import {NavLink} from "react-router-dom";
import "./side-bar.css";

class SideBar extends Component {
    renderProjects() {
        let projects = null;
        switch (this.props.status) {
            case constants.LOAD_PROJECTS_STARTED:
                projects = <img className="sidebarIcon" src={loaderImage} alt="loading"/>;
                break;
            case constants.LOAD_PROJECTS_SUCCESS:
                projects = <ul className="projects">
                    {this.props.projects.map((project)=> {
                        return <li key={project.name}>
                            <NavLink className="projectLink" activeClassName="activeProject" to={`${this.props.match.url}/${project.name}`}>{project.name}</NavLink>
                        </li>;
                    })}
                </ul>;
                break;
            case constants.LOAD_PROJECTS_FAILED:
                projects = <img className="sidebarIcon" src={errorImage} alt="failed"/>;
                break;
            case constants.LOAD_PROJECTS_UNSET:
                projects = <div>
                    Please provide an org name in the url
                </div>;
                break;
            default:
                break;
        }
        return projects;
    }

    render() {
        return <div className="sidebar">
            <div className="sidebarTitle">Projects</div>
            <div className="sidebarContent">
                {this.renderProjects()}
            </div>
        </div>;
    }
}

SideBar.propTypes = {
    status: PropTypes.string,
    projects: PropTypes.array,
    match: PropTypes.object
};

export default SideBar;
