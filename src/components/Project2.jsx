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

const Project2 = () => {
    return (
        <div className="bg-white">
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
            <div className="bg-white flex justify-center p-5">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">

                        Details
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">

                        Live
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">

                        Client
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">

                        <a href="">
                            Server
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project2;


