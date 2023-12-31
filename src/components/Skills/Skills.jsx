import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import mskillsypic from "../../assets/img/skills.png";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import javascript from "../../assets/img/javascript.svg";
import react from "../../assets/img/react.svg";
import redux from "../../assets/img/redux-blue.svg";
import saga from "../../assets/img/saga.svg";
import jest from "../../assets/img/jest-js-icon.svg";
import Mui from "../../assets/img/Mui.svg";
import sass from "../../assets/img/sass.svg";
import Bootstrap from "../../assets/img/Bootstrap.svg";
import git from "../../assets/img/git.svg";
import github from "../../assets/img/github.svg";
import webpack from "../../assets/img/webpack.svg";
import vite from "../../assets/img/vite.svg";
import ts from "../../assets/img/ts.svg";
import figma from "../../assets/img/figma.svg";

import "./Skills.css";
import SkillCard from "../../Reuseble/SkillCard/SkillCard";
const Skills = () => {
  return (
    <Box className="skillBackground" id="skill">
      <Box className="skills">
        <Box className="skillSection">
          <Card
            className="skillCards"
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
                  className="skillMyStory"
                >
                  My Skills
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
                image={mskillsypic}
                alt="Profile"
              />
            </Box>
          </Card>
        </Box>
        <Box className="LanguageAndTools">
          <Box className="language-card">
            <span className="name-language">LANGUAGE</span>
          </Box>
          <Box className="skill-logo" mt={3}>
            <SkillCard logoSrc={html} altText="HTML" skillName="Html" />
            <SkillCard logoSrc={css} altText="css" skillName="CSS" />
            <SkillCard
              logoSrc={javascript}
              altText="javascript"
              skillName="JavaScript"
            />
            <SkillCard logoSrc={react} altText="react" skillName="React" />
            <SkillCard logoSrc={redux} altText="redux" skillName="Redux" />
            <SkillCard logoSrc={saga} altText="saga" skillName="Saga" />
            <SkillCard logoSrc={ts} altText="ts" skillName="TypeScript" />
            <SkillCard logoSrc={jest} altText="jest" skillName="Jest" />
            <SkillCard logoSrc={Mui} altText="Mui" skillName="MUI" />
            <SkillCard logoSrc={sass} altText="sass" skillName="Sass" />
            <SkillCard
              logoSrc={Bootstrap}
              altText="Bootstrap"
              skillName="Bootstrap"
            />
            <SkillCard logoSrc={figma} altText="figma" skillName="Figma" />
          </Box>
          <Box className="language-card">
            <span className="name-language">TOOLS</span>
          </Box>
          <Box className="skill-logo" mt={3}>
            <SkillCard logoSrc={git} altText="git" skillName="Git" />
            <SkillCard logoSrc={github} altText="github" skillName="GitHub" />
            <SkillCard
              logoSrc={webpack}
              altText="webpack"
              skillName="Webpack"
            />
            <SkillCard logoSrc={vite} altText="vite" skillName="Vite" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
