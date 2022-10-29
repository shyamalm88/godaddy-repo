import API from "../api";

import {
  LOAD_REPO_DATA_INITIATED,
  LOAD_REPO_DATA_SUCCESS,
  LOAD_REPO_DATA_ERROR,
} from "../types/types";

export const fetchRepoData = () => {
  return function (dispatch, getState) {
    repoListLoadAction();
    API.get("orgs/godaddy/repos")
      .then((res) => {
        dispatch(repoListSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(repoListErrorAction(err));
      });
  };
};

export const repoListLoadAction = () => {
  return {
    type: LOAD_REPO_DATA_INITIATED,
  };
};

export const repoListSuccessAction = (payload) => {
  return {
    type: LOAD_REPO_DATA_SUCCESS,
    payload: payload,
  };
};

export const repoListErrorAction = (payload) => {
  return {
    type: LOAD_REPO_DATA_ERROR,
    payload: payload,
  };
};
