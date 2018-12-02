import * as actions from "./actions";
import axios from "axios";

export const loadProjects = (currentOrg) => (dispatch) => {
    dispatch(actions.startLoadProjects());
    const apiUrl = "https://api.github.com/orgs/" + currentOrg + "/repos";
    axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .then((projects) => {
            dispatch(actions.finsishLoadProjects(projects));
        })
        .catch(() => {
            dispatch(actions.failLoadProjects());
        });
};

export const setCurrentOrg = (org) => (dispatch) => {
    dispatch(actions.setCurrentOrg(org));
    dispatch(loadProjects(org));
};

export const loadContributors = (project) => (dispatch, getState) => {
    dispatch(actions.startLoadContributors());
    const {currentOrg} = getState();
    const apiUrl = "https://api.github.com/repos/" + currentOrg + "/" + project + "/contributors";
    axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .then((contributors) => {
            dispatch(actions.finsishLoadContributors(contributors));
        })
        .catch(() => {
            dispatch(actions.failLoadContributors());
        });
};

export const setCurrentProject = (project) => (dispatch) => {
    dispatch(actions.setCurrentProject(project));
    dispatch(loadContributors(project));
};
