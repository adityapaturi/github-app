import actionTypes from "./action-types";
import constants from "../constants";

const initialState = {
    status: constants.LOAD_PROJECTS_UNSET,
    currentOrg: null,
    projects: [],
    currentProject: null,
    contributorsStatus: constants.LOAD_CONTRIBUTORS_UNSET,
    contributors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_ORG:
            return {...state, currentOrg: action.payload};
        case actionTypes.LOAD_PROJECTS_STARTED:
            return {...state, currentProject: null, status: constants.LOAD_PROJECTS_STARTED, projects: []};

        case actionTypes.LOAD_PROJECTS_SUCCESS:
        {
            const sortedProjects = action.payload.sort((a, b) => b.stargazers_count - a.stargazers_count);
            return {...state, status: constants.LOAD_PROJECTS_SUCCESS, projects: sortedProjects};
        }

        case actionTypes.LOAD_PROJECTS_FAILED:
            return {...state, status: constants.LOAD_PROJECTS_FAILED};

        case actionTypes.SET_CURRENT_PROJECT:
        {
            const currentProject = state.projects.find(project => project.name === action.payload);
            return {...state, currentProject};
        }

        case actionTypes.LOAD_CONTRIBUTORS_STARTED:
            return {...state, contributorsStatus: constants.LOAD_CONTRIBUTORS_STARTED};

        case actionTypes.LOAD_CONTRIBUTORS_SUCCESS:
            return {...state, contributorsStatus: constants.LOAD_CONTRIBUTORS_SUCCESS, contributors: action.payload};

        case actionTypes.LOAD_CONTRIBUTORS_FAILED:
            return {...state, contributorsStatus: constants.LOAD_CONTRIBUTORS_FAILED};
        default:
            break;
    }

    return state;
};
