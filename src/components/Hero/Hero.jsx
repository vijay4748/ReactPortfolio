import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { LinkedIn, Twitter } from "@mui/icons-material";
import "./Hero.css";
const Hero = () => {
  return (
    <Box className="Hero" id="home">
      <Box className="left-hero">
        <Box className="wrap-box">
          <Box className="hero-text">
            <Typography color="white" variant="h3">
              <span style={{ color: "white" }}>I'm </span>
              <span style={{ color: "orange" }}>VIJAY</span>
            </Typography>
            <Typography color="white" variant="h5" gutterBottom>
              Software Developer
            </Typography>
            <Typography color="white" variant="subtitle1">
              Creating clean, engaging web experiences with efficiency and
              precision. Let's create something exceptional together.
            </Typography>
          </Box>
          <Box className="hero-icons">
            {" "}
            <Link
              sx={{ color: "white", marginRight: "0.5rem" }}
              href="https://twitter.com/home"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              sx={{ color: "white", marginRight: "0.5rem" }}
              href="https://www.linkedin.com/in/vijaydev101/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              sx={{ color: "white", marginRight: "0.5rem" }}
              href="https://github.com/vijay4748"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
          </Box>
          <Box className="hero-mail">
            <Link
              color="inherit"
              href="/"
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <span>
                <ForwardToInboxIcon />
              </span>
              <span>vjy4748@gmail.com</span>
            </Link>
          </Box>

          <Button
            sx={{
              marginTop: "1rem",
              color: "white",
              backgroundColor: "#2e1065",
            }}
            href="https://drive.google.com/file/d/1-F14peMKx4pkSZ1TalpOU2nFm0eQZ30u/view?usp=drivesdk"
            variant="contained"
            endIcon={<DownloadIcon />}
            target="_blank" // Add this line to open the link in a new tab
          >
            Resume
          </Button>
        </Box>
      </Box>
      <Box className="right-hero">
        {/* <Box
          sx={{
            width: { xs: "60%", md: "350px" },
            height: { xs: "40vh", md: "350px" },
            margin: { xs: "2rem auto", md: "8rem 6rem" },
          }}
          className="hero_img"
        ></Box> */}
        <Box className="hero_img"></Box>
      </Box>
    </Box>
  );
};

export default Hero;
