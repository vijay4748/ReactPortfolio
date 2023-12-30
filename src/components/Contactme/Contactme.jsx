import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { LinkedIn, Twitter } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import "./Contactme.css";
const Contactme = () => {
  return (
    <Box className="contactus-section" id="contact">
      <Box className="contact-section">
        <Typography
          className="getintouch"
          sx={{ color: "#5b21b6", fontWeight: "bold" }}
          variant="h3"
          gutterBottom
        >
          Get in touch
        </Typography>
        <Typography
          sx={{ textAlign: "initial", color: "#222327" }}
          variant="subtitle1"
          className="desc"
        >
          Creating clean, engaging web experiences with efficiency and
          precision. Let's create something exceptional together.
        </Typography>
        <Box className="social-icons">
          <Link
            href="https://twitter.com/home"
            target="_blank"
            sx={{ pl: 1, pr: 1 }}
          >
            <Twitter style={{ color: "#222327" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vijaydev101/"
            target="_blank"
            sx={{ pl: 1, pr: 1 }}
          >
            <LinkedIn style={{ color: "#222327" }} />
          </Link>
          <Link
            href="https://github.com/vijay4748"
            target="_blank"
            sx={{ pl: 1, pr: 1 }}
          >
            <GitHubIcon style={{ color: "#222327" }} />
          </Link>
        </Box>
        <Box className="mail-data">
          <Link
            color="inherit"
            href="mailto:vjy4748@gmail.com"
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
            target="_blank" // Add this line to open the link in a new tab
          >
            <span style={{ marginRight: "8px" }}>
              <ForwardToInboxIcon style={{ color: "#222327" }} />
            </span>
            <span style={{ color: "#222327" }}>vjy4748@gmail.com</span>
          </Link>
        </Box>
        <Box className="button-container">
          <Button
            sx={{
              marginTop: "20px",
              backgroundColor: "#2e1065",
              fontSize: "1rem",
              padding: "5px 5px",
              width: "120px", // Adjust the width as needed
            }}
            variant="contained"
          >
            Say Hi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactme;
