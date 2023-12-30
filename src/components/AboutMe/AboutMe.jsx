import React from "react";
import {
  Box,
  CardMedia,
  Typography,
  CardContent,
  Card,
  Divider,
  Grid,
} from "@mui/material";
import mypic from "../../assets/img/mypic.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import "./AboutMe.css";
import TextAndIcon from "../../Reuseble/TextAndIcon/TextAndIcon";
const AboutMe = () => {
  return (
    <Box className="aboutme" id="about">
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
          <Box className="aboutmyself">
            <Typography variant="h4" gutterBottom>
              <b>a little bit about Vijay</b>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ textAlign: "justify", marginBottom: "1em" }}
              gutterBottom
            >
              In the coding <b>realm</b>, I'm <b>passionate</b> about{" "}
              <b>perfection</b>. As a <b>detail-oriented</b> Software Developer,
              I merge creativity with exactness, ensuring every pixel aligns
              seamlessly.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ textAlign: "justify", marginBottom: "1em" }}
              gutterBottom
            >
              My <b>vision</b> extends beyond code, aiming for <b>growth</b>. I
              bring a commitment to elevate projects, creating <b>seamless</b>{" "}
              digital experiences that connect with users and drive{" "}
              <b>success</b>.
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ textAlign: "justify", marginBottom: "1.5em" }}
            >
              Beyond <b>coding</b>, I explore diverse hobbies such as reading
              tech blogs, experimenting with <b>design trends</b>, and{" "}
              <b>traveling</b> to discover new <b>technology—fueling</b>{" "}
              creativity and enhancing my skills. I adapt quickly to emerging
              trends and technologies, ensuring a well-rounded and dynamic
              approach to my interests.
            </Typography>

            <Divider light />

            {/* <Box className="custom-box" mt={3}>
              <span className="icon">
                <AccountCircleOutlinedIcon />
              </span>
              <span className="name">Name</span>
            </Box> */}

            <Grid
              mt={3}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <TextAndIcon
                  iconName={AccountCircleOutlinedIcon}
                  displayName="NAME"
                />
                <Typography
                  ml={2}
                  variant="overline"
                  display="block"
                  gutterBottom
                >
                  VIJAY KUMAR
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextAndIcon
                  iconName={FmdGoodOutlinedIcon}
                  displayName="LOCATION"
                />
                <Typography
                  ml={2}
                  variant="overline"
                  display="block"
                  gutterBottom
                >
                  RANCHI, JHARKHAND(INDIA)
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextAndIcon
                  iconName={ForwardToInboxOutlinedIcon}
                  displayName="EMAIL"
                />
                <Typography
                  ml={2}
                  variant="overline"
                  display="block"
                  gutterBottom
                  style={{ textTransform: "lowercase" }}
                >
                  vjy4748@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextAndIcon
                  iconName={CardTravelIcon}
                  displayName="EMPLOYMENT"
                />
                <Typography
                  ml={2}
                  variant="overline"
                  display="block"
                  gutterBottom
                >
                  AVAILABLE
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
