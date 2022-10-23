import Footer from "../../Components/Footer/Footer";
import EventsApp from "./events.jsx"

function Events() {
  return (
    <>
    <EventsApp />
    <Footer />
    </>
  );
}


//Snap Scroll on buttons
const firstArrow = document.querySelector(".Arrowicon")
const firstCard = document.querySelector(".left-card1")
firstArrow.addEventListener("click", () =>{
  firstCard.scrollIntoView({behavior: "smooth"})
})

const seccondArrow = document.querySelector(".left-card1-arrow")
const seccondCard = document.querySelector(".right-card1")
seccondArrow.addEventListener("click", () =>{
  seccondCard.scrollIntoView({behavior: "smooth"})
})

const thirdArrow = document.querySelector(".right-card1-arrow")
const thirdCard = document.querySelector(".left-card2")
thirdArrow.addEventListener("click", () =>{
  thirdCard.scrollIntoView({behavior: "smooth"})
})

const fourthArrow = document.querySelector(".left-card2-arrow")
const fourthCard = document.querySelector(".right-card2")
fourthArrow.addEventListener("click", () =>{
  fourthCard.scrollIntoView({behavior: "smooth"})
})


export default Events;
