import React from "react";
import Grid from "@mui/material/Grid";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DownloadIcon from "@mui/icons-material/Download";
import "./Home.css";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { LinkedIn, Twitter } from "@mui/icons-material";

const Home = () => {
  return (
    <Box id="home">
      <Grid
        className="home"
        container
        spacing={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid className="left-side" item xs={12} md={6} sm={6}>
          <Box
            className="boxs"
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "initial" },
              marginTop: { xs: "5rem", md: "15rem" },
              marginLeft: { xs: "1rem", md: "6rem" },
            }}
          >
            <Typography color="white" variant="h2" className="introText">
              <span style={{ color: "white" }}>I'm </span>
              <span style={{ color: "orange" }}>VIJAY</span>
            </Typography>
            <Typography
              // sx={{ width: "100%", display: "block" }}
              color="white"
              variant="h4"
              className="degination"
              gutterBottom
            >
              Software Developer
            </Typography>
            <Typography
              sx={{ textAlign: "justify" }}
              color="white"
              variant="subtitle1"
              className="desc"
            >
              Creating clean, engaging web experiences with efficiency and
              precision. Let's create something exceptional together.
            </Typography>
            <Box>
              {" "}
              <Link
                href="https://twitter.com/home"
                target="_blank"
                sx={{ pl: 1, pr: 1 }}
              >
                <Twitter style={{ color: "white", marginTop: "20px" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vijaydev101/"
                target="_blank"
                sx={{ pl: 1, pr: 1 }}
              >
                <LinkedIn style={{ color: "white", marginTop: "20px" }} />
              </Link>
              <Link
                href="https://github.com/vijay4748"
                target="_blank"
                sx={{ pl: 1, pr: 1 }}
              >
                <GitHubIcon style={{ color: "white", marginTop: "20px" }} />
              </Link>
            </Box>
            <Box className="mail-data-home" pt={1}>
              <Link
                color="inherit"
                href="/"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ marginRight: "8px" }}>
                  <ForwardToInboxIcon />
                </span>
                <span style={{ color: "white" }}>vjy4748@gmail.com</span>
              </Link>
            </Box>

            <Button
              href="https://drive.google.com/file/d/1-F14peMKx4pkSZ1TalpOU2nFm0eQZ30u/view?usp=drivesdk"
              variant="contained"
              endIcon={<DownloadIcon />}
              style={{
                color: "white",
                backgroundColor: "#2e1065",
                marginTop: "20px",
              }}
              target="_blank" // Add this line to open the link in a new tab
            >
              Resume
            </Button>
          </Box>
        </Grid>
        <Grid className="right-side" item xs={12} md={6} sm={6}>
          <Box
            sx={{
              width: { xs: "80%", md: "350px" },
              height: "350px",
              margin: { xs: "2rem auto", md: "15rem 5rem" },
            }}
            className="home_img"
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
