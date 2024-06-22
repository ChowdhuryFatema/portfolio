import Project1 from "./Project1";
import Project2 from "./Project2";


const Projects = () => {

  return (
    <div className="relative">
      <div className="projects">
        <div className="bg-black bg-opacity-60">

          <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,320L60,288C120,256,240,192,360,165.3C480,139,600,149,720,176C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

          <div className="max-w-7xl mx-auto px-5 py-28 md:py-36 lg:py-60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-3 md:pt-12 lg:pt-28">
              <Project1></Project1>
              <Project2></Project2>
            </div>
          </div>
        </div>

      </div>
      <svg className="absolute -bottom-[1px] left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,320L60,288C120,256,240,192,360,165.3C480,139,600,149,720,176C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  );
};

export default Projects;


