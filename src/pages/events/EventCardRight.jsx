import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './EventCardRight.css' 

export default function EventCardRight(props){
    return(
        <div className="event-card-right">
            <div className="right-card-left-side">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <KeyboardArrowDownIcon htmlColor="yellow" fontSize="large" className={props.className} sx={{marginLeft: `5vw`}} 
            onClick={()=>{
                window.scrollBy({left:0,top:window.innerHeight,behavior: 'smooth'});
            }}
            ></KeyboardArrowDownIcon>
            </div>
            <div className="card-line-right">
            </div>
            <div className="right-card-right-side">
            <img src={props.img} alt="" />
            <h1>{props.date}</h1>
            </div>
        </div>
    )
}