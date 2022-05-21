import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import dayjs from "dayjs"


export default function MediaCard(item) {
    const user = item.users

    //nama email alamat tanggal lahir image nomor telpon 
  

  return (
    <Card sx={{ width: 285, maxHeight: 537, m: 2, position: "relative" }}>
      <CardMedia
        component="img"
        height="190"
        image={user.picture.medium}
        layout="fill"
        alt="green iguana"
      />
      <CardContent sx={{ p: 1, borderTop: `3px solid ${grey[400]}` }}>
        <Typography
          fontFamily="Helvetica Neue"
          gutterBottom
          variant="h5"
          component="div"
        >
         {user.name.title} {user.name.first} {user.name.last}
        </Typography>
        <Typography
          fontFamily="Helvetica Neue"
          variant="body2"
          color="text.secondary"
        >
        Email : {user.email}
        </Typography>
        <Typography
          fontFamily="Helvetica Neue"
          variant="body2"
          color="text.secondary"
          sx={{ mb: 0 }}
        >
          Date of birth : {dayjs(user.dob.date).format('DD-MM-YYYY')}
        </Typography>
        <Typography
          fontFamily="Helvetica Neue"
          variant="body2"
          color="text.secondary"
        >
        phone : {user.phone}
        </Typography>
        <Typography
          fontFamily="Helvetica Neue"
          variant="body2"
          color="text.secondary"
        >
        Adress : {user.location.street.name} {user.location.street.number},,{user.location.city},,{user.location.country},{user.location.postcode}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", ml: 3, mr: 3 }}
      >
        {/* <Button size="small" onClick={handleOpen}>
          Update
        </Button>
        <Button size="small" onClick={handleOpenModal2}>
          Delete
        </Button> */}
      </CardActions>
    </Card>
  );
}
