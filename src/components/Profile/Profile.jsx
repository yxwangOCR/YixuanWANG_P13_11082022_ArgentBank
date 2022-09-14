import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../app/axios";
import {
  selectToken,
  selectFirstName,
  selectLastName,
  updateProfile,
} from "../../app/authSlice";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import "./Profile.css";

const PROFILE_URL = "/user/profile";

function Profile() {
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const [edit, setEdit] = useState(false);
  const editModeOff = () => setEdit(!edit);

  // GET :
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response?.data?.body;
      console.log(data);
      console.log(response);

      dispatch(
        updateProfile({
          ...data,
        })
      );
    };
    getProfile();
    // eslint-disable-next-line
  }, []);
  // React Hook useEffect has a missing dependency: 'getProfile'. Either include it or remove the dependency array
  //https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook

  //PUT :
  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
  });
  const onUpdate = async () => {
    const userInput = {
      firstName: update.firstName,
      lastName: update.lastName,
    };
    console.log(userInput);
    try {
      const response = await axios.put(PROFILE_URL, update, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response?.data?.body;
      console.log(data);

      dispatch(
        updateProfile({
          ...data,
        })
      );
      editModeOff();
    } catch (error) {
      console.log("===Update profile Error===");
    }
    console.log("===Update profile Success===");
  };

  const handleUpdateTextInput = (e) => {
    e.preventDefault();
    const Input = e.target.id;
    setUpdate({
      ...update,
      [Input]: e.target.value,
    });
  };

  return (
    <div className="profile-container">
      <div className="sayHi">
        Welcome {firstName} {lastName}
      </div>

      {edit ? (
        <div className="edit-name">
          <div className="edit-name-input">
            <TextInput
              inputProps={{
                type: "text",
                placeholder: "Firstname",
                id: "firstName",
                autoComplete: "off",
              }}
              onChange={handleUpdateTextInput}
            />
            <TextInput
              inputProps={{
                type: "text",
                placeholder: "Lastname",
                id: "lastName",
                autoComplete: "off",
              }}
              onChange={handleUpdateTextInput}
            />
          </div>
          <div className="edit-name-button">
            <Button onClick={editModeOff}>Cancel</Button>
            <Button onClick={onUpdate}>Update profile</Button>
          </div>
        </div>
      ) : (
        <Button onClick={editModeOff}>Edit</Button>
      )}
    </div>
  );
}

export default Profile;
