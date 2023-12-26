import React from "react";
import { Box, CardMedia, Typography, CardContent, Card } from "@mui/material";
import mypic from "../../assets/img/mypic.svg";

import "./AboutMe.css";
const AboutMe = () => {
  return (
    <Box className="aboutme">
      {/* <Box className="whyUsText">
        <Typography variant="boldFourtyEight">
          See Why To Choose Us !
        </Typography>
      </Box> */}
      <Box className="imageAndText">
        <Box className="my-pic">
          <CardMedia
            className="img"
            image={mypic}
            title="green iguana"
            component="img"
          />
        </Box>
        <Box className="right-aboutme">
          <Box className="theText">
            <Card
              className="cards"
              sx={{
                background: "linear-gradient(-90deg, #4B0082 0%, #8A2BE2 70%)", // Replace with your color values
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  margin: "auto 20px",
                }}
              >
                <CardContent>
                  <Typography component="div" variant="h3" className="myStory">
                    My Story
                  </Typography>
                </CardContent>
              </Box>
              <Box
                sx={{
                  margin: "auto 20px",
                  padding: "5px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    margin: "auto",
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  image={mypic}
                  alt="Profile"
                />
              </Box>
            </Card>
          </Box>
          <Box className="aboutmyself"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
