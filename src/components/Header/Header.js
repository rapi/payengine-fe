import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { PropTypes } from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/localStorage";
import { Tab, Tabs } from "@mui/material";

const Header = ({ firstName, lastName, status }) => {
  const navigate = useNavigate();
  const logout = useCallback(() => {
    setToken("");
    navigate("/login");
  });
  const OnBoardingTabs = (
    <Tabs value={1} aria-label="basic tabs example">
      <Tab label="Pay" />
      <Tab label="Transaction List" />
    </Tabs>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {firstName} {lastName}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={logout}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {status !== "active" && OnBoardingTabs}
    </Box>
  );
};
Header.propTypes = {
  status: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export { Header };
