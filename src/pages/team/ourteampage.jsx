import Footer from "../../Components/Footer/Footer";
import React from 'react';
import {useRef, useEffect} from 'react';
import { useLocation } from "react-router-dom";

function Ourteam(){
    const ref = useRef();
    const routePath = useLocation();

    useEffect(() => {
        if (routePath.pathname === "/team") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath]);

    return (
      <div ref={ref}>
      {/* <TeamData/> */}
      <Footer/>
    </div>);

}

export default Ourteam;