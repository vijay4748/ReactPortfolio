import React from "react";
import "./SectionCard.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import mypic from "../../";

const SectionCard = () => {
  return (
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
  );
};

export default SectionCard;
