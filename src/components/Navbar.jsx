// Navbar.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";
import { signOut } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleDrawer }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
      dispatch(signOut());
      navigate("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={6}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My App</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="subtitle1">
              Welcome, {user ? user.displayName : "Guest"}
            </Typography>
            {user && (
              <Avatar src={user.photoURL} style={{ marginLeft: "10px" }} />
            )}
            {user && (
              <Button
                color="inherit"
                onClick={handleSignOut}
                style={{ marginLeft: "10px" }}
              >
                Sign Out
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
