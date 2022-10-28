import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './EventCardLeft.css'

export default function EventCardLeft(props){
    return(
        <div className="event-card-left">
            <div className="left-card-left-side">
                <img src={props.img} alt="" />
                <h1>{props.date}</h1>
            </div>
            <div className="card-line">
            </div>
            <div className="left-card-right-side">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <KeyboardArrowDownIcon htmlColor="yellow" fontSize="large" className={props.className} sx={{marginLeft: `5vw`}} 
                
                onClick={()=>{
                    window.scrollBy({left:0,top:window.innerHeight,behavior: 'smooth'});
                }}
                ></KeyboardArrowDownIcon>
            </div>
        </div>
    )
}