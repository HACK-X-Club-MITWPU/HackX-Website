import Footer from "../../components/Footer/Footer";
import React from 'react';
import {useRef, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import bg from "../../assets/img/logo_BG.png"
import { Container, Typography } from "@mui/material";

function Ourteam(){
    const ref = useRef();
    const routePath = useLocation();

    // useEffect(() => {
    //     if (routePath.pathname === "/team") {
    //         ref.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [routePath]);

    return (
      <div ref={ref} sx={{overflowX:"hidden"}}>
      <img src={bg} style={{objectFit:"fill",height:"25rem",width:"100%"}}/>
      <Container sx={{backgroundColor:"#121212"}} maxWidth="false">
        <Typography align="center" sx={{fontSize:"4rem",overflow:"hidden",fontFamily:"'BankGothic Lt BT', sans-serif;",padding:"2rem"}}>MEET THE TEAM!</Typography>
      </Container>
      <Footer/>
    </div>);

}

export default Ourteam;