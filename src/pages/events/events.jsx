import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EventCardLeft from "./EventCardLeft";
import EventCardRight from "./EventCardRight";
import bg from "../../assets/img/red-lines-bg.png"
import eventimage1 from "../../assets/img/event-image1.png"
import eventimage2 from "../../assets/img/event-image2.png"
import logo from "../../assets/img/logo.png"
import './events.css'
import Navbar from "../../Components/Navbar/Navbar"



export default function EventsApp(){
    const title = "Event Info"
    const date= "1 Jan 2021"
    const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return(
        <div className="main-container">
            <Navbar/>
            <div className="header-bg">
                <img src={bg} className="bg"/>
                <img src={logo} className="logo"/>
            </div>
           <div className="t1">
           <p className="Text1">Something's coming</p>
            <p className="Text1">..Stay tuned</p>
           </div>
            <KeyboardArrowDownIcon htmlColor="yellow" fontSize="large" className="Arrowicon" sx={{marginLeft: `50vw`}} ></KeyboardArrowDownIcon>
            <h1 className="Text2">Past Events</h1>
            <div className="left-card1">
            <EventCardLeft 
            img={eventimage1}
            title={title}
            date={date}
            content={content}
            className = "left-card1-arrow"
            />
            </div>
            <div className="line">
            </div>
           <div className="right-card1">
           <EventCardRight 
            img={eventimage2}
            title={title}
            date={date}
            content={content} 
            className="right-card1-arrow"
            />
           </div>
            <div className="line">
            </div>
            <div className="left-card2">
            <EventCardLeft
            img={eventimage2}
            title={title}
            date={date}
            content={content} 
            className = "left-card2-arrow"
             />
            </div>
             <div className="line">
            </div>
            <div className="right-card2">
            <EventCardRight
            img={eventimage2}
            title={title}
            date={date}
            content={content} 
            className= "right-card2-arrow"
             />
            </div>
        </div>
    )
}