import Footer from "../../Components/Footer/Footer";
import BackgroundImage from "../../assets/img/red-lines-bg.png"
import Tile from "./Tile";

const About = () => (
  <section id="about" className="bg-hackx-grey">
    <div className="h-screen">
      <img src={BackgroundImage} className="w-full h-full object-cover mix-blend-hard-light" alt="Background" />
    </div>

    <div className="px-4 sm:px-16">
      <div className="my-20 flex flex-col sm:flex-row w-[270px] sm:w-full mx-auto justify-between items-center gap-8">
        <h1 className="font-title text-7xl sm:text-8xl">
          We are<br />Hack-X
        </h1>

        {/* TODO: Divider here */}

        <p className="sm:w-1/3 my-auto text-lg">A cybersecurity club run and managed by students based in MITWPU, Pune.</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 bg-center bg-cover bg-inherit bg-blend-hard-light" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Tile white title="OUR MISSION" />
      <Tile title="TECH TEAM" />
      <Tile title="NON-TECH TEAM" />
      <Tile white title="OUR LEGACY" />
    </div>

    <Footer />
  </section>
)

export default About;