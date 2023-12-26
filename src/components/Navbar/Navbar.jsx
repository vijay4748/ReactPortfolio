import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./navbar.css"; // Import the CSS file
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const drawerWidth = 240;
const navItems = ["Home", "About", "Skills", "Projects", "Contact", "Say Hi"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = (item) => {
    console.log(`Clicked on ${item}`);
    setMobileOpen(false);
    scroll.scrollTo(`#${item.toLowerCase()}`, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {navItems.map((item) => (
          <ScrollLink
            key={item}
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <ListItem
              key={item}
              disablePadding
              onClick={() => handleMobileNavClick(item)}
              sx={{ width: "100%" }}
            >
              <ListItemText primary={item} />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="app-bar">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "cursive",
                color: "#fff",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Tech Vijay
              </ScrollLink>
            </Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button
                className={`${location.pathname === "/" ? "active" : ""}`}
                color="inherit"
                sx={{ borderRadius: 0 }}
              >
                {navItems[0]}
              </Button>
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" sx={{ borderRadius: 0 }}>
                {navItems[1]}
              </Button>
            </ScrollLink>
            <ScrollLink
              to="skill"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <Button color="inherit" sx={{ borderRadius: 0 }}>
                {navItems[2]}
              </Button>
            </ScrollLink>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <Button color="inherit" sx={{ borderRadius: 0 }}>
                {navItems[3]}
              </Button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button color="inherit" sx={{ borderRadius: 0 }}>
                {navItems[4]}
              </Button>
            </ScrollLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              style={{ backgroundColor: "#5b21b6" }}
              variant="contained"
              href="#contained-buttons"
              className="custom-button"
            >
              {navItems[5]}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
    </Box>
  );
};

export default Navbar;
