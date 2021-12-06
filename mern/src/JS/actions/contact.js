import axios from "axios";
import {
  GET_ALL_CONTACT,
  GET_CONTACT,
  GET_FAIL,
  GET_LOAD,
} from "../constants/contact";
export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: GET_LOAD });
  try {
    let result = await axios.get("/x/y");
    dispatch({ type: GET_ALL_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
//////////////////////////////////////////////////////////////
export const addContact = (contact, history) => async (dispatch) => {
  try {
    await axios.post("/x/P", contact);
    history.push("/contacts");
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
//////////////////////////////////////////////////////
export const getContact = (id) => async (dispatch) => {
  dispatch({ type: GET_LOAD });
  try {
    let result = await axios.get(`/x/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
/////////////////////////////////////////////////////
export const editContact = (id, contact, history) => async (dispatch) => {
  try {
    await axios.put(`/x/v/${id}`, contact);
    dispatch(getAllContacts());
    history.push("/contacts");
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
/////////////////////////////////////////////////////
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/x/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
