import React from "react";
import "./ProjectCard.css";
import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({
  projectName,
  projectDescription,
  projectSkills,
  githubLink,
  liveDemoLink,
  imageUrl,
}) => {
  return (
    <Box className="ProjectCard">
      <Box className="project-card">
        <img className="project-img" src={imageUrl} alt={projectName} />
        <Typography
          sx={{ color: "#2e1065", fontWeight: "bold" }}
          mt={2}
          variant="h5"
          gutterBottom
        >
          {projectName}
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            height: "120px", // Set a fixed height for the entire card
            overflow: "hidden",
          }}
          variant="subtitle1"
          gutterBottom
        >
          {projectDescription}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
          variant="subtitle2"
          component="div"
        >
          {projectSkills.map((skill, index) => (
            <span key={index} className="code-skill">
              {skill}
            </span>
          ))}
        </Typography>
        <Box mt={3}>
          <Box className="card-button">
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              style={{ color: "#5b21b6", borderColor: "#5b21b6" }}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
            <Button
              variant="contained"
              startIcon={<LaunchIcon />}
              style={{ backgroundColor: "#5b21b6", color: "white" }}
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
