import { Box, Container, Typography } from "@mui/material";
import React from "react";

const WorkProgessPage = () => {
  return (
    <Container className="workInProgressRoot">
      <Box>
        <Typography variant="h4" gutterBottom>
          Work in Progress
        </Typography>
        <img
          className="workInProgressImage"
          src="https://placekitten.com/400/400" // Replace with your actual progress image URL
          alt="Work in Progress"
        />
      </Box>
    </Container>
  );
};

export default WorkProgessPage;
