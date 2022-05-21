import { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const Header = () => {
   

  return (
    <Box
      sx={{
        position: "relative",
        height: "174px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.4)",
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.4) 100%
          )`,
        },
      }}
    >
      <Image
        src="/__images/img1.png"
        layout="fill"
        objectFit="cover"
        alt="backdrop"
      />
    </Box>
  );
};

export default Header;
