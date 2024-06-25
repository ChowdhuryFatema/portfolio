import { Carousel } from "flowbite-react";
// import { FaGithub } from "react-icons/fa";
// import { TbListDetails } from "react-icons/tb";
// import { LuEye } from "react-icons/lu";
import img1 from '../assets/library/library1.png';
import img2 from '../assets/library/library2.png';
import img3 from '../assets/library/library3.png';
import img4 from '../assets/library/library4.png';
import img5 from '../assets/library/library5.png';
import img7 from '../assets/library/library7.png';
import img8 from '../assets/library/library8.png';
import img9 from '../assets/library/library9.png';
import img10 from '../assets/library/library10.png';
import img11 from '../assets/library/library11.png';
import img12 from '../assets/library/library12.png';
import img13 from '../assets/library/library13.png';
import img14 from '../assets/library/library14.png';
import img15 from '../assets/library/library15.png';
import img16 from '../assets/library/library6.png';

import { Modal } from "flowbite-react";
import { useState } from "react";

const Project2 = () => {

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
                    <img sizes="full" src={img12} alt="..." />
                    <img sizes="full" src={img13} alt="..." />
                    <img sizes="full" src={img14} alt="..." />
                    <img sizes="full" src={img15} alt="..." />
                    <img sizes="full" src={img16} alt="..." />
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
                            <h2 className="font-bold text-2xl md:text-3xl color-gradient">Website Name: Library</h2>
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
                                        This is a online library store management website.
                                    </li>

                                    <li>
                                        User can create an account and Login via Gmail and Github firebase authentication.
                                    </li>

                                    <li>
                                        Users can set dark and light mood on the website.

                                    </li>
                                    <li>
                                        When the user selects the book category, the details of that category will be displayed, and the user can pick the book and the total number of books will be reduced by one.
                                    </li>

                                    <li>
                                        When the user returns the book, the total number of books in that category will increase by one.
                                    </li>

                                    <li>
                                        All book route has a button called show all available, if the user wants to see the available books. Books whose number is less than 0 will not be displayed.
                                    </li>

                                    <li>
                                        Users can view all books in list and grid format.
                                    </li>

                                </ul>

                            </div>
                        </Modal.Body>
                    </Modal>

                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
                        <a target="_blank" href="https://library-2dd53.web.app/">Live</a>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">
                        <a target="_blank" href="https://github.com/ChowdhuryFatema/library-client">Client</a>

                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm bg-transparent project-btn font-bold hover:text-white md:text-lg border-r border-[#E855DE]">

                        <a target="_blank" href="https://github.com/ChowdhuryFatema/library-server">
                            Server
                        </a>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Project2;


