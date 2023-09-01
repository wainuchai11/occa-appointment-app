import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { signIn } from "../../store/userSlice";
import app from "./firebaseConfig";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL, uid } = result.user;

      const user = {
        displayName,
        email,
        photoURL,
        uid,
      };

      dispatch(signIn(user));
    } catch (error) {
      console.error("Error during Google Sign In:", error);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      onClick={handleSignIn}
    >
      Sign In with Google
    </Button>
  );
};

export default GoogleAuth;
