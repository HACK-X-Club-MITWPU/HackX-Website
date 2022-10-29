import BackgroundImage from "../../../assets/img/red-lines-bg.png"
import Tile from "./Tile";

const About = () => (
  <main id="about" className="bg-hackx-grey">
    <section className="grid sm:grid-cols-2 bg-center bg-cover bg-inherit bg-blend-hard-light" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Tile white title="OUR MISSION" />
      <Tile title="TECH TEAM" />
      <Tile title="NON-TECH TEAM" />
      <Tile white title="OUR LEGACY" />
    </section>
  </main>
)

export default About;