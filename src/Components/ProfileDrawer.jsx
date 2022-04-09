import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import { useAuth } from "../context/AuthContext";

const tradePages = [
  { page: "Home", link: "home" },
  {
    page: "Deposit",
    link: "deposit",
  },
  {
    page: "Withdraw",
    link: "withdraw",
  },
  {
    page: "Investments",
    link: "investments",
  },
  {
    page: "Investments History",
    link: "investments-history",
  },
  {
    page: "Reinvest",
    link: "reinvest",
  },
  {
    page: "Trade Center",
    link: "trade-center",
  },
  {
    page: "Trade History",
    link: "trade-history",
  },
];
const accountPages = [
  {
    page: "Account",
    link: "account",
  },
];

const drawerWidth = 240;

function ProfileDrawer(props) {
  const { currentUser } = useAuth();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const hideIn = ["/", "/signin", "/about", "/signup"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {tradePages.map(({ page, link }, index) => (
          <ListItem button key={page} component={NavLink} to={link}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {accountPages.map(({ page, link }, index) => (
          <ListItem button key={page} component={NavLink} to={link}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {hideIn.includes(location.pathname) ? null : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="page" element={<About />} />
            </Routes>
          </Box>
        </Box>
      )}
    </>
  );
}

ProfileDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ProfileDrawer;
