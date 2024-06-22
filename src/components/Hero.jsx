import { Typewriter } from 'react-simple-typewriter'
import dividerImg from '../assets/divider.png';
import resume from '../assets/Fatema Chowdhury _ Resume.pdf';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import Header from './Header';

const Hero = () => {

    return (
        <div className="banner min-h-[35vh] md:min-h-[60vh]">
            <div className="bg-black bg-opacity-50">
                <div className="text-white max-w-6xl mx-auto px-5">
                    <Header></Header>

                    <div className="flex flex-col justify-center min-h-[35vh] md:min-h-[60vh] pt-5 md:pt-10 lg:pt-28">
                        <div>
                            <h4 className="text-3xl md:text-4xl text-[#e9edf8]">Greetings!</h4>
                            <img className='w-60' src={dividerImg} alt="" />

                            <h2 className="text-4xl md:text-6xl font-bold pt-2">Fatema Chowdhury</h2>

                            <p className='text-2xl md:text-3xl py-2 md:py-4'>
                                <span className='text-[#8892B0]'>I am a</span>{' '}
                                <span className='text-[#d94ce0] font-semibold'>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Web Developer', 'MERN Stack Developer', 'Front End Developer', 'React Developer', 'UI Developer']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>

                            <div className="pt-4">
                                <a href={resume} download className='btn-all extra-btn capitalize font-semibold cursor-pointer text-white flex items-center gap-1'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Resume
                                    <HiMiniArrowUpTray />
                                </a>

                                <a href="#contact" className="relative inline-flex items-center justify-center ml-32 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out shadow-xl group hover:ring-1 hover:ring-purple-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                    <span className="relative text-white">Discuss? <FaArrowRightLong className='inline' /></span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,320L60,288C120,256,240,192,360,165.3C480,139,600,149,720,176C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;