import {
  LOAD_DETAILS_DATA_INITIATED,
  LOAD_DETAILS_DATA_SUCCESS,
  LOAD_DETAILS_DATA_ERROR,
} from "../types/types";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const detailsDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DETAILS_DATA_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_DETAILS_DATA_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case LOAD_DETAILS_DATA_ERROR:
      return {
        loading: false,
        data: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default detailsDataReducer;
