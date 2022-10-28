import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EventCardLeft from "./EventCardLeft";
import EventCardRight from "./EventCardRight";
import bg from "../../assets/img/red-lines-bg.png"
import eventimage1 from "../../assets/img/event-image1.png"
import eventimage2 from "../../assets/img/event-image2.png"
import logo from "../../assets/img/logo.png"
import './events.css'
import Navbar from "../../components/Navbar/Navbar"


const eventData=[
    {
        title : "Event Info",
        img:eventimage1,
        date:"1 Jan 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        left:true
    },
    {
        title : "Event Info",
        img:eventimage2,
        date:"1 Jan 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        left:false
    },
    {
        title : "Event Info",
        date:"1 Jan 2021",
        img:eventimage2,
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        left:true
    },
    {
        title : "Event Info",
        date:"1 Jan 2021",
        img:eventimage1,
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        left:false
    }
]


export default function EventsApp(){
    
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
            <KeyboardArrowDownIcon htmlColor="yellow" fontSize="large" className="Arrowicon" sx={{marginLeft: `50vw`}} 
                onClick={()=>{
                    const firstCard = document.querySelector(".left-card1")
                    firstCard.scrollIntoView({behavior: "smooth"})
                }}
            ></KeyboardArrowDownIcon>
            <h1 className="Text2">Past Events</h1>

            {eventData.map((i)=>{
                if(i.left){
                 return <>
                 <div className="left-card1">
                 <EventCardLeft 
                 img={i.img}
                 title={i.title}
                 date={i.date}
                 content={i.content}
                 className = "left-card1-arrow"
                 />
                 </div>
                 <div className="line">
                 </div>
                 </>
                }
                else
                {
                    return <>
                    <div className="right-card1">
                    <EventCardRight 
                        img={i.img}
                        title={i.title}
                        date={i.date}
                        content={i.content}
                        className="right-card1-arrow"
                        />
                    </div>
                    <div className="line">
                    </div>
                    </>
                }
            })}
        </div>
    )
}