import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../JS/actions/contact";
import CircularProgress from "@mui/material/CircularProgress";
import Contactcard from "../component/Contactcard";
// import { Box } from "@mui/material/Box";
import Box from "@mui/material/Box";
const Contacts = () => {
  const contacts = useSelector((state) => state.contactReducers.contacts);
  const is_Load = useSelector((state) => state.contactReducers.is_Load);
  const is_Fail = useSelector((state) => state.contactReducers.is_Fail);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello");
  }, []);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    //     <div>
    //       {is_Load ? (
    //         <Box sx={{ display: "flex" }}>{<CircularProgress />}
    //       ) : is_Fail ? (
    //         <h4>Can not get the data</h4>
    //       ) : !contacts.length ? (
    //         <h4>There is no contact to show</h4>
    //       ) : (
    //         <div className="contactList">
    //           {contacts.map((el) => (
    //             <Contactcard contact={el} key={el._id} />
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   );
    //   // };
    // };
    <div>
      {is_Load ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : is_Fail ? (
        <h4>Can not get the data</h4>
      ) : !contacts.length ? (
        <h4>There is no contact to show</h4>
      ) : (
        <div className="contactList">
          {contacts.map((el) => (
            <Contactcard contact={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Contacts;
