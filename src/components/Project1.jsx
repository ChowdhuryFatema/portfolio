import { Carousel } from "flowbite-react";
import img1 from '../assets/techApp/techApp1.png';
import img2 from '../assets/techApp/techApp2.png';
import img3 from '../assets/techApp/techApp3.png';
import img4 from '../assets/techApp/techApp4.png';
import img5 from '../assets/techApp/techApp5.png';
import img6 from '../assets/techApp/techApp6.png';
import img7 from '../assets/techApp/techApp7.png';
import img8 from '../assets/techApp/techApp8.png';
import img9 from '../assets/techApp/techApp9.png';
import img10 from '../assets/techApp/techApp10.png';
import img11 from '../assets/techApp/techApp11.png';
import img12 from '../assets/techApp/techApp12.png';
import img13 from '../assets/techApp/techApp13.png';
import img14 from '../assets/techApp/techApp14.png';
import img15 from '../assets/techApp/techApp15.png';
import { Modal } from "flowbite-react";
import { useState } from "react";

const Project1 = () => {


    const [openModal, setOpenModal] = useState(false);

    return (


        <div className="bg-white border projects">
            <div className="h-44 lg:h-72 mb-20">
                <Carousel slide={false} indicators={false}>
                    <img src={img1} alt="..." />
                    <img src={img2} alt="..." />
                    <img src={img3} alt="..." />
                    <img src={img4} alt="..." />
                    <img src={img5} alt="..." />
                    <img src={img6} alt="..." />
                    <img src={img7} alt="..." />
                    <img src={img8} alt="..." />
                    <img src={img9} alt="..." />
                    <img src={img10} alt="..." />
                    <img src={img11} alt="..." />
                    <img src={img12} alt="..." />
                    <img src={img13} alt="..." />
                    <img src={img14} alt="..." />
                    <img src={img15} alt="..." />
                </Carousel>
                <div className="bg-white flex justify-center p-5 border-t">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button onClick={() => setOpenModal(true)} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Details
                        </button>
                        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header>Website Name: Tech App</Modal.Header>
                            <Modal.Body>
                                <div>
                                    <h2>Technology:</h2>
                                    <div className="mb-5">
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">Tailwind</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">DaisyUI & Mamba UI</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">React router dom</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">Firebase</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">Node Js</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">Express Js</button>
                                        <button className="btn btnShadow py-2 px-3 m-2 text-sm">MongoDB</button>
                                    </div>
                                    <h2>Features:</h2>
                                    <ul className="space-y-3 *:list-disc pl-6">
                                        <li>
                                            Tech App provides role-based dashboards: Admins manage users and roles, moderators approve products, and users manage their products and subscriptions.
                                        </li>

                                        <li>
                                            Users can submit products, with unlimited submissions after subscribing. The upvote system and product reviews enhance community engagement by allowing voting and feedback.
                                        </li>
                                        <li>
                                            A search bar and pagination improve user experience by making it easy to find and navigate products.
                                        </li>
                                        <li>
                                            Subscriptions unlock unlimited product submissions, with a seamless payment process encouraging upgrades.
                                        </li>
                                        <li>
                                            Coupon codes on the home page offer subscription discounts, promoting user engagement and flexible promotional strategies.
                                        </li>
                                    </ul>

                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <a target="_blank" href="https://tech-apps-f8d51.web.app/">Live</a>
                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <a target="_blank" href="https://github.com/ChowdhuryFatema/tech-app-client">Client</a>

                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">

                            <a target="_blank" href="https://github.com/ChowdhuryFatema/tech-app-server">
                                Server
                            </a>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Project1;