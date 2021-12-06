import { GET_ALL_CONTACT, GET_FAIL, GET_LOAD } from "../constants/contact";

const initialState = {
  contacts: [],
  is_Load: false,
  is_Fail: false,
};
const contactReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOAD:
      return { ...state, is_Load: true };
    case GET_ALL_CONTACT:
      return {
        ...state,
        contacts: payload.people,
        is_Load: false,
        is_Fail: false,
      };
    case GET_FAIL:
      return { ...state, is_Fail: true, is_Load: false };
    default:
      return state;
  }
  // return state;
};
export default contactReducers;
