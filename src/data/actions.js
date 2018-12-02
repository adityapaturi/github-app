import actionTypes from "./action-types";

export const setCurrentOrg = (org) => {
    return {
        type: actionTypes.SET_CURRENT_ORG,
        payload: org
    };
};

export const startLoadProjects = () => {
    return {
        type: actionTypes.LOAD_PROJECTS_STARTED
    };
};

export const finsishLoadProjects = (projects) => {
    return {
        type: actionTypes.LOAD_PROJECTS_SUCCESS,
        payload: projects
    };
};

export const failLoadProjects = () => {
    return {
        type: actionTypes.LOAD_PROJECTS_FAILED
    };
};

export const setCurrentProject = (project) => {
    return {
        type: actionTypes.SET_CURRENT_PROJECT,
        payload: project
    };
};

export const startLoadContributors = () => {
    return {
        type: actionTypes.LOAD_CONTRIBUTORS_STARTED
    };
};

export const finsishLoadContributors = (projects) => {
    return {
        type: actionTypes.LOAD_CONTRIBUTORS_SUCCESS,
        payload: projects
    };
};

export const failLoadContributors = () => {
    return {
        type: actionTypes.LOAD_CONTRIBUTORS_FAILED
    };
};
