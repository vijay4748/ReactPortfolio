import React from "react";
import "./TextAndIcon.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/material";
const TextAndIcon = ({ iconName, displayName }) => {
  // You can use the dynamic icon name passed as a prop
  const IconComponent = iconName || AccountCircleOutlinedIcon;

  return (
    <Box className="custom-box">
      <span className="icon">
        <IconComponent />
      </span>
      <span className="name">{displayName}</span>
    </Box>
  );
};

export default TextAndIcon;
