import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Special from "./components/Special"
import Chef from "./components/Chef"
import Video from "./components/Video"
import Laurels from "./components/Laurels"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Special/>
      <Chef/> 
      <Video/>
      <Laurels/>
    </>
  )
}