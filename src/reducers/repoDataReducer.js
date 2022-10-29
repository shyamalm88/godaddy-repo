import {
  LOAD_REPO_DATA_INITIATED,
  LOAD_REPO_DATA_SUCCESS,
  LOAD_REPO_DATA_ERROR,
} from "../types/types";

const initialState = {
  loading: false,
  repoData: [],
  error: "",
};

const repoDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_REPO_DATA_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_REPO_DATA_SUCCESS:
      return {
        loading: false,
        repoData: payload,
        error: "",
      };

    case LOAD_REPO_DATA_ERROR:
      return {
        loading: false,
        repoData: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default repoDataReducer;
