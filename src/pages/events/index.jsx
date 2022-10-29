import { useEffect } from "react";
import Footer from "../../Components/Footer";
import EventsApp from "./events.jsx"

function Events() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <>
    <EventsApp />
    <Footer />
    </>
  );
}


const thirdArrow = document.querySelector(".right-card1-arrow")
const thirdCard = document.querySelector(".left-card2")
// thirdArrow.addEventListener("click", () =>{
//   thirdCard.scrollIntoView({behavior: "smooth"})
// })

const fourthArrow = document.querySelector(".left-card2-arrow")
const fourthCard = document.querySelector(".right-card2")
// fourthArrow.addEventListener("click", () =>{
//   fourthCard.scrollIntoView({behavior: "smooth"})
// })


export default Events;
