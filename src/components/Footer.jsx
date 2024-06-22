import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-bg md:-mt-10 lg:-mt-20">
            <div className="bg-black bg-opacity-40 relative">

                <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,320L60,288C120,256,240,192,360,165.3C480,139,600,149,720,176C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

                <div className="flex justify-center items-center py-20">
                    <div className="text-white text-center w-full pt-5 md:pt-20 lg:pt-40 space-y-5">
                        <h2 className="text-3xl">daisyUI</h2>
                        <ul className="flex justify-center">
                            <li><a href="#about" className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg">ABOUT</a></li>
                            <li><a className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg">PROJECTS</a></li>
                            <li><a className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg">SERVICES</a></li>
                            <li><a href="#contact" className="text-white px-3 md:px-4 text-sm lg:text-lg">CONTACT</a></li>
                        </ul>
                        <div className="flex gap-3 justify-center">
                            <a target="_blank" href="https://www.facebook.com/fatema.chowdhury.568089" className="text-2xl ml-2"><FaFacebookSquare className="text-[#159CF8]" /></a>
                            <a target="_blank" href="https://github.com/ChowdhuryFatema" className="text-2xl ml-2"><FaGithubSquare /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/fatemachowdhury318" className="text-2xl ml-2"><FaLinkedin className="text-[#0B66C3]" /></a>
                        </div>
                        <p className="text-sm md:text-lg">Designed & Built by Fatema Chowdhury</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;