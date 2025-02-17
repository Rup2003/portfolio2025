import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="relative overflow-x-hidden text-slate-500 antialiased">
        <div className="container mx-auto px-8 min-h-screen">
          <NavBar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
