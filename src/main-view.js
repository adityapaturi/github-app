import React, {Component} from "react";
import PropTypes from "prop-types";
import constants from "./constants";
import CountWidget from "./count-widget";
import Contributor from "./contributor";
import loaderImage from "./images/loader.svg";
import errorImage from "./images/error.svg";
import * as actionCreators from "./data/action-creators";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "./main-view.css";

class MainView extends Component {
    componentDidMount() {
        if (this.props.match.params.project && this.props.currentOrg) {
            this.props.setCurrentProject(`${this.props.match.params.project}`);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.project !== prevProps.match.params.project && this.props.currentOrg) {
            this.props.setCurrentProject(`${this.props.match.params.project}`);
        }
    }

    renderContributors() {
        let contributors = null;
        switch (this.props.contributorsStatus) {
            case constants.LOAD_CONTRIBUTORS_STARTED:
                contributors = <img className="collabStatusIcon" src={loaderImage} alt="loading"/>;
                break;
            case constants.LOAD_CONTRIBUTORS_SUCCESS:
                contributors = <ul className="collabCards">
                    {this.props.contributors.map((contributor, index) => <li key={contributor.id}><Contributor rank={index} collabData={contributor}/></li>)}
                </ul>;
                break;
            case constants.LOAD_CONTRIBUTORS_FAILED:
            case constants.LOAD_CONTRIBUTORS_UNSET:
                contributors = <img className="collabStatusIcon" src={errorImage} alt="failed"/>;
                break;
            default:
                break;
        }
        return contributors;
    }

    render() {
        const {projectData} = this.props;
        return projectData ? <div className="mainView">
            <div className="mainProjectTitle">{projectData.name}</div>
            <div className="projectDescr">{projectData.description}</div>
            <div className="countWidgets">
                <CountWidget param={"Fork"} count={projectData.forks}/>
                <CountWidget param={"Stars"} count={projectData.stargazers_count}/>
                {projectData.open_issues > 0 && <CountWidget param={"Issues"} count={projectData.open_issues}/>}
                {projectData.license && projectData.license.spdx_id && <CountWidget param={"License"} count={projectData.license.spdx_id}/>}
            </div>
            <div className="collabContainer">
                <div className="collabTitle">Contributors</div>
                <div className="collaborators">
                    {this.renderContributors()}
                </div>
            </div>
        </div> : null;
    }
}

MainView.propTypes = {
    projectData: PropTypes.object,
    contributors: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        currentOrg: state.currentOrg,
        projectData: state.currentProject,
        contributorsStatus: state.contributorsStatus,
        contributors: state.contributors
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCurrentProject: actionCreators.setCurrentProject
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
