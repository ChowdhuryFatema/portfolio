import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,192L60,160C120,128,240,64,360,42.7C480,21,600,43,720,85.3C840,128,960,192,1080,186.7C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <Marquee>
                <div className="py-20 mr-5">

                    <div className="flex gap-5">
                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#dd1818] shape flex justify-center items-center rounded-2xl">
                            <div className="MuiBox-root css-eokicu"><div className="MuiBox-root css-12uywf9"></div><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 434.1 434.1" width="58" height="58"><path fill="#fff" d="M82.7 44.3H362.2V366.7H82.7z"></path><path fill="#FC490B" d="M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z"></path></svg><p className="MuiTypography-root MuiTypography-body1 css-wb5ewh text-center">html</p></div>
                        </div>


                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#38ef7d] shape flex justify-center items-center rounded-2xl -mt-10">
                            <div>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">Node</h4>
                            </div>
                        </div>


                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#fdbb2d] shape flex justify-center items-center rounded-2xl -mt-10">
                            <div>
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">Firebase</h4>
                            </div>
                        </div>

                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#45a247] shape flex justify-center items-center rounded-2xl">
                            <div>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">MongoDB</h4>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#1CB5E0] shape flex justify-center items-center rounded-2xl -mt-10">
                            <div>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">React</h4>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#155799] shape flex justify-center items-center rounded-2xl">
                            <div>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">CSS</h4>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#F2C94C] shape flex justify-center items-center rounded-2xl -mt-10">
                            <div>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">Javascript</h4>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-gradient-to-b from-[#333333] to-[#56CCF2] shape flex justify-center items-center rounded-2xl -mt-10">
                            <div>
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
                                <h4 className="text-xl font-semibold text-white">Tailwind</h4>
                            </div>
                        </div>


                    </div>
                </div>
            </Marquee>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,192L60,160C120,128,240,64,360,42.7C480,21,600,43,720,85.3C840,128,960,192,1080,186.7C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </>
    );
};

export default Skills;