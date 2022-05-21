import { useDispatch, useSelector } from "react-redux";
import styles from "../commons/styles/Home.module.css";
import Button from "@mui/material/Button";
import Layout from "../commons/component/layout";
import { useEffect, useState } from "react";
import Header from "../commons/component/header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MediaCard from "../commons/component/card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getAllUsersAction } from "../redux/actions/users";

export default function Home() {
  const dispatch = useDispatch()
  const [gender,setGender]= useState("")
  const [page,setPage]= useState("")
  const users = useSelector((state)=>state.getAllProfile.allProfile)
  console.log("users",gender);

  useEffect(() => {
    dispatch(getAllUsersAction(gender,page));
  }, [gender,page])
  
  const handleChangeGender =(e)=>{
    console.log(e.target.value);
    setGender(e.target.value)
  }
  const handlePage = (e)=>{
    setPage(e.target.textContent)
    
  }

  return (
    <>
      <Layout title="home" />
      <Box sx={{ backgroundColor: "#bdbdbd", pb: 8, height: "1350px" }}>
        <Header />
        <Container sx={{mt:8,display:"flex",justifyContent:"center"}}>
        <select
                className={styles.selected}
                onChange={(e)=>handleChangeGender(e)} value={gender}
              >
              <option value={""} className="dropdown-item">
                gender
              </option>
                <option value={"male"} className="dropdown-item">
                  Male
                </option>
                <option value={"female"} className="dropdown-item">
                  Female
                </option>
              </select>
        </Container>
        {users.length > 0 ? (
          <Grid container spacing={1} sx={{ mt: 3, ml: 3 }}>
            {Array.isArray(users) &&
              users.length > 0 &&
              users.map((item, idx) => (
                <Grid key={idx} item>
                  <MediaCard users={item} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={1}
            sx={{
              mt: 3,
              ml: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Product Not Found</Typography>
          </Grid>
        )}
        <Container sx={{display:"flex",justifyContent:"center"}}>
          <Stack spacing={3}>
            <Pagination onChange={(e)=>{handlePage(e)}} count={3}  color="primary" size="large" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
