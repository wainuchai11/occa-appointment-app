import React from "react";
import GoogleAuth from "../auth/GoogleAuth";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux"; // <-- import useDispatch
import { signIn } from "../../store/userSlice";

const ContainerStyled = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const CardStyled = styled(Card)({
  minWidth: 275,
  textAlign: "center",
});

const LoginPage = ({ setUser }) => {
  const dispatch = useDispatch(); // <-- initialize useDispatch

  const handleSignIn = (userData) => {
    // Handle sign-in logic, e.g., Firebase authentication
    // ...

    // Update the Redux store with the user data
    dispatch(signIn(userData));
  };
  return (
    <ContainerStyled>
      <CardStyled>
        <CardContent>
          <Typography variant="h5" component="h2">
            Please Sign In
          </Typography>
          <Typography color="textSecondary">
            To continue, sign in with your Google account.
          </Typography>
        </CardContent>
        <CardActions>
          <GoogleAuth handleSignIn={handleSignIn} />{" "}
          {/* <-- Pass handleSignIn as a prop */}
        </CardActions>
      </CardStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
