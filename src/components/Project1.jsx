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

const Project1 = () => {



    return (
        <div>
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
            <div className="bg-white flex justify-center py-5">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        Profile
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                        </svg>
                        Settings
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>
                        Downloads
                    </button>
                </div>




            </div>
            </div>

        </div>
    );
};

export default Project1;