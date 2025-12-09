import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const ParticlesContainer = dynamic(
  () => import("../components/ParticlesContainer"),
  {
    ssr: false,
  }
);

<<<<<<< HEAD
const Nav = dynamic(() => import("../components/Nav"), {
  ssr: false,
});
=======
import Nav from "../components/Nav";
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)

// font setting
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "700", "800"],
});

// components
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/ProjectsBtn";
import Contact from "../components/Contact";
<<<<<<< HEAD
const StarsCanvas = dynamic(() => import("../components/Canvas/Stars"), {
  ssr: false,
});
const Heros = dynamic(() => import("../components/Heros"), {
  ssr: false,
});
=======
import Heros from "../components/Heros";
const StarsCanvas = dynamic(() => import("../components/Canvas/Stars"), {
  ssr: false,
});

>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
import OtherProjectCards from "../components/OtherProjectCards";

const Layout = ({ children }) => {
  return (
    <div className={`page bg-black text-white font-poppins relative`}>
      <ParticlesContainer />
      <Nav />
      <Header />
      <Heros />
      <About />
      <Experience />
      <Projects />
      <OtherProjectCards />
      <div className="relative bg-black z-0">
        <Contact />
        <StarsCanvas className="z-20" />
      </div>
    </div>
  );
};

export default Layout;
