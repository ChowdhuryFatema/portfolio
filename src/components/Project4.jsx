import { Carousel } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useState } from "react";


import img1 from '../assets/luxuryProperties/1.png';
import img2 from '../assets/luxuryProperties/2.png';
import img3 from '../assets/luxuryProperties/3.png';
import img4 from '../assets/luxuryProperties/4.png';
import img5 from '../assets/luxuryProperties/5.png';
import img6 from '../assets/luxuryProperties/6.png';
import img7 from '../assets/luxuryProperties/7.png';
import img8 from '../assets/luxuryProperties/8.png';

const Project4 = () => {

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
                    <img sizes="full" src={img6} alt="..." />
                    <img sizes="full" src={img7} alt="..." />
                    <img sizes="full" src={img8} alt="..." />
                </Carousel>
            </div>
            <div className="bg-white flex justify-center p-5 border-t h-20 lg:h-24">
                <div className="inline-flex extra-btn border border-[#E855DE] btnShadow" role="group">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <button onClick={() => setOpenModal(true)} type="button" className="inline-flex items-center px-4 py-2 text-sm font-bold bg-transparent border-r border-[#E855DE]  project-btn hover:text-white md:text-lg">
                        Details
                    </button>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>
                            <h2 className="font-bold text-2xl md:text-3xl color-gradient">Website Name: Luxury Properties</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <h2 className="font-bold text-xl mb-5 color-gradient"> Technology Used:</h2>
                                <div className="mb-5">
                                    <button className="btn btnShadow py-2 px-3 m-2">Tailwind</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">DaisyUI & Mamba UI</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">React router dom</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Firebase</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">React Hook form</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">Swiper slider</button>
                                    <button className="btn btnShadow py-2 px-3 m-2">React-leaflet</button>
                                </div>
                                <h2 className="font-bold text-xl mb-5 color-gradient">Project Features:</h2>
                                <ul className="space-y-3 *:list-disc pl-6">
                                    <li>
                                        It is a luxury property website. It offers choice apartments for sale and rent.
                                    </li>
                                    <li>
                                        You can login with email and password or with Gmail and Github.
                                    </li>
                                    <li>
                                        If you are not logged in you will not be able to see all our services.So log in and receive the service.
                                    </li>
                                    <li>
                                        After creating the account, the user can view his profile.
                                    </li>
                                    <li>
                                        Users can change their profile.
                                    </li>
                                </ul>

                            </div>
                        </Modal.Body>
                    </Modal>

                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-bold bg-transparent border-r border-[#E855DE]  project-btn hover:text-white md:text-lg">
                        <a target="_blank" href="https://luxury-properties-ccb9d.web.app/">Live</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-bold bg-transparent border-r border-[#E855DE]  project-btn hover:text-white md:text-lg">

                        <a target="_blank" href="https://github.com/ChowdhuryFatema/luxury-properties">
                            Client
                        </a>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Project4;