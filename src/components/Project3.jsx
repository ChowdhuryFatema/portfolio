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
            <div className="bg-white flex justify-center p-5 border-t h-20 lg:h-24">

                <div className="inline-flex extra-btn border border-[#E855DE] btnShadow" role="group">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>


                    <button onClick={() => setOpenModal(true)} type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
                        Details
                    </button>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>
                            <h2 className="font-bold text-xl md:text-3xl color-gradient">Website Name: Travel Pro</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <h2 className="font-bold text-xl mb-5 color-gradient"> Technology Used:</h2>
                                <div className="mb-5">
                                    <button className="btn btnShadow py-2 px-3 m-2">Tailwind</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">DaisyUI & Mamba UI</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">React router dom</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Firebase</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Node Js</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Express Js</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">MongoDB</button>
                                </div>
                                <h2 className="font-bold text-xl mb-5 color-gradient">Project Features:</h2>
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
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
                        <a target="_blank" href="https://travel-pro-46258.web.app/">Live</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
                        <a target="_blank" href="https://github.com/ChowdhuryFatema/travel-pro-client">Client</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
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