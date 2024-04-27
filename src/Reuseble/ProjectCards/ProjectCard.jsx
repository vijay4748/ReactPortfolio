import React from "react";
import "./ProjectCard.css";
import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
const ProjectCard = ({
  projectName,
  projectDescription,
  projectSkills,
  githubLink,
  liveDemoLink,
  imageUrl,
}) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
      <Box className="ProjectCard" data-aos="zoom-in">
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
                // onClick={handleOpen}
              >
                Live Demo
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
