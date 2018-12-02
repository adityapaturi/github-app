import React, {Component} from "react";
import PropTypes from "prop-types";
import SideBar from "./side-bar";
import MainView from "./main-view";
import {connect} from "react-redux";
import * as ActionCreators from "./data/action-creators";
import {bindActionCreators} from "redux";
import {Route, Redirect} from "react-router-dom";
import "./content.css";

class Content extends Component {
    componentDidMount() {
        if (this.props.match.params.org) {
            this.props.setCurrentOrg(this.props.match.params.org);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.org !== prevProps.match.params.org) {
            this.props.setCurrentOrg(this.props.match.params.org);
        }
    }

    render() {
        const {status, projects, match, currentOrg} = this.props;
        return <div className="content">
            <SideBar status={status} projects={projects} match={match}></SideBar>
            <Route path={`${match.url}/:project`} render={props => {
                return currentOrg ? <MainView {...props}/> : <Redirect to={`/${match.params.org}`}/>;
            }}/>
            <Route exact path={match.url} render={() => <div className="message">Please select a project from side bar</div>} />
        </div>;
    }
}

Content.propTypes = {
    status: PropTypes.string,
    projects: PropTypes.array,
    match: PropTypes.object
};

const mapStateToProps = (state) => {
    const {status, projects, currentOrg, currentProject} = state;
    return {status, projects, currentOrg, currentProject};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCurrentOrg: ActionCreators.setCurrentOrg
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
