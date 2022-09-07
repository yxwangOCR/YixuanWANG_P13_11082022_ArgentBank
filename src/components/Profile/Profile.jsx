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
  //dispatch(logIn());

  const accessToken = useSelector(selectToken);

  const getProfile = async ()  => {
    const response = await axios.get(
        PROFILE_URL,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
    );

    const data = response?.data?.body;

    dispatch(
        updateProfile({
          ...data
        })
    )
  }

  useEffect(() => {
    getProfile()
  }, [])



  const [edit, setEdit] = useState(false);
  const editMode = () => setEdit(!edit);

  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setUpdate({
      firstName: e.target.value,
      lastName: e.target.value,
    });
  };

  // Post: get user profile by token when login

  const useProfile = (token) => {
    useEffect(() => {
      const postRequest = async (e) => {
        try {
          const response = await axios.post(PROFILE_URL, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

        } catch (error) {
          console.log("Post error");
        }
      };
    }, [token]);
  };

  // Put:
  const onUpdate = async () => {
    const userInput = {
      firstName: update.firstName,
      lastName: update.lastName,
    };

    try {
      const response = await axios.put(
          PROFILE_URL,
          update,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );

      const data = response?.data?.body;

      dispatch(
          updateProfile({
            ...data
          })
      );


    } catch (error) {
      console.log("onUpdate Error");
    }
    console.log("update profile");
  };


  console.log(edit)
  return (
      <div className="profile-container">
        <div className="sayHi">
          Welcome Back User : {firstName} {lastName}
        </div>


        {edit ? (
            <div className="edit-name-input">
              <TextInput
                  inputProps={{ type: "text", placeholder: "Firstname" }}
                  onChange={handleUpdateProfile}
                  id="firstName"
              />
              <TextInput
                  inputProps={{ type: "text", placeholder: "Lastname" }}
                  onChange={handleUpdateProfile}
                  id="lastName"
              />
              <Button onClick={editMode}>Cancel</Button>
              <Button onClick={onUpdate}>Update profile</Button>
            </div>
        ) : <Button onClick={editMode}>Edit</Button>
        }

      </div>
  );
}

export default Profile;
