import React from "react";
import "./Project.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import mypic from "../../assets/img/mypic.svg";
import ProjectCard from "../../Reuseble/ProjectCards/ProjectCard";
import project1 from "../../assets/img/projects.jpg";
import clock from "../../assets/img/clock.png";
import covid19 from "../../assets/img/covid19.png";
import dashboard from "../../assets/img/dashboard.png";
import guessgame from "../../assets/img/guessgame.png";
import food from "../../assets/img/food.png";
import oldportfolio from "../../assets/img/oldportfolio.png";

const Projects = () => {
  return (
    <Box className="Projects" id="projects">
      <Box className="project-section">
        <Card
          className="project-Cards"
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
              <Typography
                component="div"
                variant="h3"
                className="project-skillMyStory"
              >
                Projects
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
              image={project1}
              alt="Profile"
            />
          </Box>
        </Card>
      </Box>
      <Box className="project-cards">
        <ProjectCard
          projectName="Digital Clock"
          projectDescription="
          Crafted a stylish digital clock with HTML, CSS, and JavaScript for precise real-time display. The design is modern, providing an attractive and functional timekeeping experience on the web."
          projectSkills={["Html", "JavaScript", "CSS"]}
          githubLink="https://github.com/vijay4748/TechVijay-Projects/tree/main/Digital%20Clock"
          liveDemoLink="https://vijay4748.github.io/vjyweb/Digital%20Clock/DigitalClock.html"
          imageUrl={clock}
        />
        <ProjectCard
          projectName="Covid19 Tracker"
          projectDescription="A COVID-19 tracker, using HTML, CSS, and JavaScript, provides users with real-time pandemic statistics for informed decision-making."
          projectSkills={["Html", "JavaScript", "CSS"]}
          githubLink="https://github.com/vijay4748/vjyweb/tree/main/COVID_19%20Tracker"
          liveDemoLink="https://vijay4748.github.io/vjyweb/COVID_19%20Tracker/index.html"
          imageUrl={covid19}
        />
        <ProjectCard
          projectName="DashBoard"
          projectDescription="
          Built a sleek dashboard with React, SCSS, and Material-UI, seamlessly combining functionality and aesthetics for an optimal user experience"
          projectSkills={["React", "JavaScript", "CSS", "Html"]}
          githubLink="https://github.com/your-username/project-repo"
          liveDemoLink="https://your-live-demo-link.com"
          imageUrl={dashboard}
        />
        <ProjectCard
          projectName="Guess Game"
          projectDescription="Developed a Guess the Number game with HTML, CSS, and JS. Offers an interactive experience with dynamic elements."
          projectSkills={["Html", "JavaScript", "CSS"]}
          githubLink="https://github.com/vijay4748/TechVijay-Projects/tree/main/Guess%20Number"
          liveDemoLink="https://vijay4748.github.io/vjyweb/Guess%20Number/index.html"
          imageUrl={guessgame}
        />
        <ProjectCard
          projectName="Food App"
          projectDescription="
          Developed a delightful food app with React, Redux, Saga, SCSS, and Material-UI, ensuring a seamless, stylish, and state-managed user interface."
          projectSkills={[
            "React",
            "Redux",
            "Saga",
            "JavaScript",
            "CSS",
            "Html",
          ]}
          githubLink="https://github.com/your-username/project-repo"
          liveDemoLink="https://your-live-demo-link.com"
          imageUrl={food}
        />
        <ProjectCard
          projectName="Old Portfolio"
          projectDescription="
          Crafted a classic portfolio with HTML, CSS, and JavaScript, enhanced by the Bootstrap framework for a polished and responsive design."
          projectSkills={["Html", "JavaScript", "CSS", "Bootstrap"]}
          githubLink="https://github.com/vijay4748/vjyweb"
          liveDemoLink="https://vijay4748.github.io/vjyweb/"
          imageUrl={oldportfolio}
        />
      </Box>
    </Box>
  );
};

export default Projects;
