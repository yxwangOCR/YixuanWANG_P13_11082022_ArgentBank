import React from "react";
import { logIn } from "../../app/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "../../app/axios";
import { selectAccessToken } from "../../app/authSlice";

const USER_URL = '/user/profile'
function Profile() {
  //const firstName = useSelector((state) => state.auth.firstName);
  //const lastName = useSelector((state) => state.auth.lastName)
  //const dispatch = useDispatch();
  //dispatch(logIn())

  const accessToken = useSelector(selectAccessToken)

  const onUpdate = async () => {
    try {
      const response = await axios.put(
          USER_URL,
          {
            "firstName": "Test firstName ",
            "lastName": "test lastName"
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );

    } catch (error) {
    }


  }


  return <div>
    <div>Welcome Back {/*firstName*/} {/*lastName*/}</div>

    <button onClick={onUpdate}>
      Update profile
    </button>

  </div>;
}

//Consider adding an error boundary to your tree to customize error handling behavior.
export default Profile;
