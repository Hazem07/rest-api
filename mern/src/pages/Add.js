import { Button, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addContact, editContact, getContact } from "../JS/actions/contact";

const AddContact = () => {
  const [contact, setContact] = useState({});
  const [edit, setedit] = useState(false);

  const editContactState = useSelector(
    (state) => state.contactReducers.contact
  );

  const dispatch = useDispatch();

  const params = useParams();
  const history = useHistory();
  /////////////////////////////
  useEffect(() => {
    if (params.id) {
      dispatch(getContact(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    if (params.id) {
      setedit(true);
    } else {
      setedit(false);
    }
    edit
      ? setContact(editContactState)
      : setContact({ name: "", favoriteFoods: "", age: "" });
  }, [edit, editContactState, params.id]);
  ///////////////////////////////////////
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  /////////////////////////////////////////////////
  const handleContact = () => {
    if (contact.favoriteFoods && contact.name) {
      if (edit) {
        dispatch(editContact(params.id, contact, history));
      } else {
        dispatch(addContact(contact, history));
      }
    } else {
      alert(" favoriteFoods and required");
    }
  };

  return (
    <form>
      <h2>{edit ? "EDIT The Contact" : "Add a new Contact"}</h2>
      <TextField
        id="outlined-number"
        label="name"
        type="text"
        name="name"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        value={contact.name}
      />
      <TextField
        id="outlined-number"
        label="favoriteFoods"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="favoriteFoods"
        onChange={handleChange}
        value={contact.favoriteFoods}
      />{" "}
      <TextField
        id="outlined-number"
        label="age"
        type="number"
        name="age"
        InputLabelProps={{
          shrink: true,
        }}
        value={contact.age}
        onChange={handleChange}
      />{" "}
      <Button onClick={handleContact}>{edit ? "EDIT" : "SAVE"}</Button>
    </form>
  );
};

export default AddContact;
