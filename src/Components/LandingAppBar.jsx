import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const LandingAppBar = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6} md={3} component={NavLink} to="/">
                <img src={Logo} className="appbar-logo" />
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <IconButton size="large" onClick={toggleMenu}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                md={9}
                display={{ xs: "none", md: "flex" }}
                justifyContent="flex-end"
              >
                {pages.map(({ page, link }) => (
                  <Button
                    component={NavLink}
                    to={link}
                    key={page}
                    color="secondary"
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {menuOpen ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          justifyContent="center"
          alignItems="center"
        >
          {pages.map(({ page, link }) => (
            <Button
              color="secondary"
              to={link}
              component={NavLink}
              key={page}
              sx={{ width: "100%" }}
              onClick={toggleMenu}
            >
              {page}
            </Button>
          ))}
        </Box>
      ) : null}
    </>
  );
};

export default LandingAppBar;
