import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bootstrap from '../assets/skill-icon/bootstrap.png';
import nextImg from '../assets/skill-icon/next.png';
import reactRouter from '../assets/skill-icon/react-router.svg';
import expressImg from '../assets/skill-icon/express.png';
import githubImg from '../assets/skill-icon/github-logo.png';
import dividerImg from '../assets/divider.png';
import { HiMiniArrowUpTray } from 'react-icons/hi2';
import communicationHacks from '../assets/communication-hacks-certificate.pdf';

const About = () => {
    return (
        <div id="about" className=''>
            <div className="max-w-6xl mx-auto px-5">
                <div className='mb-5 md:mb-12 flex flex-col items-center'>
                    <h1 className='text-center font-bold text-3xl md:text-5xl pb-2'>Meet Fatema</h1>
                    <img src={dividerImg} alt="" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
                    <div>
                        <div className='lg:-mt-10'>
                            <dotlottie-player className="about-img" src="https://lottie.host/708c872b-a380-4895-a12c-ef0f449e38b6/rWnqOdkkhD.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
                        </div>
                    </div>
                    <div>
                        <Tabs>
                            <div className='about-tab'>
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Skills</Tab>
                                    <Tab>Education</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div className='mt-10'>
                                    <div className='space-y-3'>
                                        <p>I&rsquo;m Fatema Chowdhury, a dedicated Frontend React Developer with a passion for creating dynamic and responsive web applications. I thrive on transforming complex problems into intuitive user interfaces using React.</p>
                                        <p>
                                          Currently, I am working on diverse projects that utilize the power of React to build intuitive and high-performance user interfaces. My focus is on writing clean, maintainable code and leveraging best practices to deliver exceptional user experiences.
                                        </p>
                                        <p>
                                            My goal is to continuously enhance my skills in front-end development and explore new technologies and frameworks. I aim to contribute to innovative projects that push the boundaries of web development, and I am eager to collaborate with other professionals to achieve outstanding results.
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-3 gap-5 mt-10'>
                                    <div>
                                        <h3 className='text-xl font-bold text-[#d94ce0] pb-3'>Frontend</h3>
                                        <ul className='space-y-1'>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                                                <h4 className="font-semibold">HTML</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                                                <h4 className="font-semibold">CSS</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
                                                <h4 className="font-semibold">Tailwind</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src={bootstrap} alt="" />
                                                <h4 className="font-semibold">Bootstrap</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://daisyui.com/favicon.ico" alt="" />
                                                <h4 className="font-semibold">DaisyUI</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                                                <h4 className="font-semibold">Javascript</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                                                <h4 className="font-semibold">React</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src={reactRouter} alt="" />
                                                <h4 className="font-semibold">React router dom</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src={nextImg} alt="" />
                                                <h4 className="font-semibold">Nextjs</h4>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-[#d94ce0] pb-3'>Backend</h3>
                                        <ul className='space-y-1'>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" />
                                                <h4 className="font-semibold">Firebase</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                                                <h4 className="font-semibold">Node.js</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src={expressImg} alt="" />
                                                <h4 className="font-semibold">Expressjs</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                                                <h4 className="font-semibold">MongoDB</h4>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='text-xl font-bold text-[#d94ce0] pb-3'>Tools</h3>
                                        <ul className='space-y-1'>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="" />
                                                <h4 className="font-semibold">Git</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="" />
                                                <h4 className="font-semibold">Figma</h4>
                                            </li>
                                            <li className="flex gap-2">
                                                <img className='w-5' src={githubImg} alt="" />
                                                <h4 className="font-semibold">Github</h4>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <ul className='ml-5 mt-10'>
                                    <li className='list-disc'>Fazil | Institute of Jameul Ulum Fazil (Degree) Madrasah
                                    </li>

                                </ul>
                                <ul className='ml-5 mt-5'>
                                    <li className='list-disc flex'>
                                        Web development Course
                                        <span className='flex gap-2 items-center ml-1 md:ml-7'>
                                            - Certificate <HiMiniArrowUpTray />
                                        </span>
                                    </li>
                                    <li className='list-disc flex'>
                                        Communication hacks
                                        <span className='flex gap-2 items-center ml-1 md:ml-7'>
                                            <a className='flex items-center gap-2' href={communicationHacks} download >
                                                - Certificate <HiMiniArrowUpTray />
                                            </a>

                                        </span>
                                    </li>
                                </ul>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;