import { useEffect, useState } from "react"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import logo from "./assets/logo/logo.png";
import Skills from "./components/Skills"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])

  return (
    <>

      {loading ?
        <div className="bg-gradient-to-b from-indigo-500 via-[#ec38bc] to-[#3c1053]">

          <div className="flex justify-center items-center min-h-screen w-full">
            <div>
              <img className="w-60" src={logo} alt="" />
            </div>
          </div>
        </div>


        :

        <div>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
      }


    </>
  )
}

export default App
