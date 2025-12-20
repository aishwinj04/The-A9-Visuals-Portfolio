import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { LogoAnimation } from "./components/LogoAnimation";
import { Metrics } from "./components/Metrics";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";


export default function Home() {
  return (
    <>
    <Hero/>
    <LogoAnimation/>
    <About/>
    <Portfolio/>
    <Metrics/>
    <Services/>

  

    </>
  );
}
