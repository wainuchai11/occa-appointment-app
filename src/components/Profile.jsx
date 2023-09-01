import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Avatar,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const ProfileContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  width: "100%",
  backgroundColor: "#f2f2f2", // Add background color
  padding: "20px 0",
});

const ProfileAvatar = styled(Avatar)({
  width: "120px",
  height: "120px",
  marginBottom: "10px",
});

const ProfileInfo = styled(Paper)({
  padding: "20px",
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "#ffffff", // Change background color
});

const SocialMediaIcons = styled(Grid)({
  marginTop: "15px",
});

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <ProfileContainer>
      {user && (
        <ProfileInfo elevation={3}>
          <ProfileAvatar src={user.photoURL} />
          <Typography variant="h4">{user.displayName}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.email}
          </Typography>
          <SocialMediaIcons container spacing={1} justifyContent="center">
            <Grid item>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Grid>
          </SocialMediaIcons>
          {/* Add more user data fields as needed */}
        </ProfileInfo>
      )}
    </ProfileContainer>
  );
};

export default Profile;
