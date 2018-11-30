import actionTypes from "./action-types";
import constants from "../constants";

const initialState = {
    status: constants.LOAD_PROJECTS_UNSET,
    projects: []
};

export default function repoReducer(state = initialState, action) {
    if (action.type === actionTypes.LOAD_PROJECTS_STARTED) {
        return {status: constants.LOAD_PROJECTS_STARTED, PROJECTS: []};
    } else if (action.type === actionTypes.LOAD_PROJECTS_SUCCESS) {
        return {status: constants.LOAD_PROJECTS_SUCCESS, PROJECTS: action.payload};
    } else if (action.type === actionTypes.LOAD_PROJECTS_FAILED) {
        return {status: constants.LOAD_PROJECTS_FAILED, PROJECTS: []};
    }

    return state;
}
