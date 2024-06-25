import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import dividerImg from '../assets/divider.png';


const Projects = () => {

  return (
    <div id="projects" className="my-10 md:my-20">
      <div>
        <div className='mb-10 md:mb-12 flex flex-col items-center'>
          <h1 className='text-center font-bold text-3xl md:text-5xl pb-2'>My Projects</h1>
          <img src={dividerImg} alt="" />
        </div>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
            <Project4></Project4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


