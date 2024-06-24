import { Carousel } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useState } from "react";


import img1 from '../assets/travelPro/travelPro1.png';
import img2 from '../assets/travelPro/travelPro2.png';
import img3 from '../assets/travelPro/travelPro3.png';
import img4 from '../assets/travelPro/travelPro4.png';
import img5 from '../assets/travelPro/travelPro5.png';
import img7 from '../assets/travelPro/travelPro7.png';
import img8 from '../assets/travelPro/travelPro8.png';
import img9 from '../assets/travelPro/travelPro9.png';
import img10 from '../assets/library/library10.png';
import img11 from '../assets/library/library6.png';

const Project3 = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="bg-white border projects">
            <div className="h-44 lg:h-72">
                <Carousel slide={false} indicators={false}>
                    <img sizes="full" src={img1} alt="..." />
                    <img sizes="full" src={img2} alt="..." />
                    <img sizes="full" src={img3} alt="..." />
                    <img sizes="full" src={img4} alt="..." />
                    <img sizes="full" src={img5} alt="..." />
                    <img sizes="full" src={img7} alt="..." />
                    <img sizes="full" src={img8} alt="..." />
                    <img sizes="full" src={img9} alt="..." />
                    <img sizes="full" src={img10} alt="..." />
                    <img sizes="full" src={img11} alt="..." />
                </Carousel>
            </div>
            <div className="bg-white flex justify-center p-5 border-t">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button onClick={() => setOpenModal(true)} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        Details
                    </button>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>Website Name: Travel Pro</Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="mb-5">
                                    <button className="btn btnShadow py-2 px-3 m-2">Tailwind</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">DaisyUI & Mamba UI</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">React router dom</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Firebase</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Node Js</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Express Js</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">MongoDB</button>
                                </div>
                                <ul className="space-y-3 *:list-disc pl-6">
                                    <li>
                                    This is a travel website. On this site, users will get all the information about traveling to South Asian countries.
                                    </li>
                                    <li>
                                    User Can Create an Account and Login Via Gmail and Github firebase authentication.
                                    </li>
                                    <li>
                                    The user can choose the places of his choice and list them for travel.
                                    </li>
                                    <li>
                                    User can delete, add, update places.
                                    </li>
                                    <li>
                                    Users can set dark and light mood on the website.
                                    </li>
                                </ul>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <a target="_blank" href="https://travel-pro-46258.web.app/">Live</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <a target="_blank" href="https://github.com/ChowdhuryFatema/travel-pro-client">Client</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <a target="_blank" href="https://github.com/ChowdhuryFatema/travel-pro-server">
                            Server
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project3;