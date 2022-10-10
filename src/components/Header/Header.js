import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { PropTypes } from "prop-types";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setToken } from "../../utils/localStorage";
import { Tab, Tabs } from "@mui/material";

const Header = ({ firstName, lastName, status }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useCallback(() => {
    setToken("");
    navigate("/login");
  });
  const TransactionTabs = (
    <Tabs value={location.pathname} aria-label="basic tabs example">
      <Tab
        label="Pay"
        value="/dashboard"
        onClick={() => navigate("/dashboard")}
      />
      <Tab
        label="Transaction List"
        value="/dashboard/transaction-list"
        onClick={() => navigate("/dashboard/transaction-list")}
      />
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
      {status === "active" && TransactionTabs}
    </Box>
  );
};
Header.propTypes = {
  status: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export { Header };
