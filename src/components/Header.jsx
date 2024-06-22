import { Navbar } from "flowbite-react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar fluid className="bg-transparent pt-8">
            <Navbar.Brand href="https://flowbite-react.com">

                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Flowbite React</span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2 items-center">
                {/* <Button>Get started</Button> */}
                <div className='flex'>
                    <a target="_blank" href="https://www.facebook.com/fatema.chowdhury.568089" className="text-2xl ml-2"><FaFacebookSquare className="text-[#159CF8]" /></a>
                    <a target="_blank" href="https://github.com/ChowdhuryFatema" className="text-2xl ml-2"><FaGithubSquare /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/fatemachowdhury318" className="text-2xl ml-2"><FaLinkedin className="text-[#0B66C3]" /></a>
                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="bg-white md:bg-transparent rounded-sm">
                <Navbar.Link href="#" className="md:text-white md:text-lg">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="md:text-white md:text-lg">About</Navbar.Link>
                <Navbar.Link href="#" className="md:text-white md:text-lg">Services</Navbar.Link>
                <Navbar.Link href="#" className="md:text-white md:text-lg">Pricing</Navbar.Link>
                <Navbar.Link href="#" className="md:text-white md:text-lg">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;