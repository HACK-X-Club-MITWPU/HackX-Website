import Footer from "../../Components/Footer/Footer";
import BackgroundImage from "../../assets/img/red-lines-bg.png"
import Tile from "./Tile";

const About = () => (
  <main id="about" className="bg-hackx-grey">
    <section className="h-screen relative">
      <img src={BackgroundImage} className="w-full h-full object-cover mix-blend-hard-light" alt="Background" />

      <div className="w-full px-4 sm:px-16 absolute bottom-0 bg-hackx-grey">
        <div className="my-7 flex flex-col sm:flex-row w-[270px] sm:w-full mx-auto justify-between items-center gap-8">
          <h1 className="font-title text-7xl sm:text-8xl">
            We are<br />HACK-X
          </h1>

          {/* TODO: Divider here */}

          <p className="sm:w-1/3 my-auto text-lg">A cybersecurity club run and managed by students based in MITWPU, Pune.</p>
        </div>
      </div>
    </section>

    <section className="grid sm:grid-cols-2 bg-center bg-cover bg-inherit bg-blend-hard-light" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Tile white title="OUR MISSION" />
      <Tile title="TECH TEAM" />
      <Tile title="NON-TECH TEAM" />
      <Tile white title="OUR LEGACY" />
    </section>

    <Footer />
  </main>
)

export default About;