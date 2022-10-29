import API from "../api";
import {
  LOAD_DETAILS_DATA_INITIATED,
  LOAD_DETAILS_DATA_SUCCESS,
  LOAD_DETAILS_DATA_ERROR,
} from "../types/types";

export const fetchDetailsData = (payload) => {
  return function (dispatch, getState) {
    repoListLoadAction();
    API.get(`repos/${payload.domain}/${payload.url}`)
      .then((res) => {
        dispatch(repoDetailsSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(repoDetailsErrorAction(err));
      });
  };
};

export const repoListLoadAction = () => {
  return {
    type: LOAD_DETAILS_DATA_INITIATED,
  };
};

export const repoDetailsSuccessAction = (payload) => {
  return {
    type: LOAD_DETAILS_DATA_SUCCESS,
    payload: payload,
  };
};

export const repoDetailsErrorAction = (payload) => {
  return {
    type: LOAD_DETAILS_DATA_ERROR,
    payload: payload,
  };
};
