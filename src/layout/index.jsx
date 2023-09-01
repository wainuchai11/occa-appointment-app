import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import Appointments from "../components/Appointments";
import Profile from "../components/Profile";
import History from "../components/History";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("appointments");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigateTo = (route) => {
    setActiveMenu(route); // setting the active menu
    toggleDrawer();
  };

  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <List style={{ width: 250 }}>
          <ListItem button onClick={() => navigateTo("appointments")}>
            Appointments
          </ListItem>
          <ListItem button onClick={() => navigateTo("profile")}>
            Profile
          </ListItem>
          <ListItem button onClick={() => navigateTo("history")}>
            History
          </ListItem>
        </List>
      </Drawer>

      <div style={{ padding: "2rem" }}>
        {activeMenu === "appointments" && <Appointments />}
        {activeMenu === "profile" && <Profile />}
        {activeMenu === "history" && <History />}
      </div>
    </div>
  );
};

export default Layout;
