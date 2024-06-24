import { Navbar } from "flowbite-react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
// import { FaFacebookSquare } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar fluid className="bg-transparent">
            <a href="#">
                <img className="w-44" src={logo} alt="" />
            </a>
            <div className="flex md:order-2 gap-2 items-center">
                {/* <Button>Get started</Button> */}
                <div className='flex'>
                    {/* <a target="_blank" href="" className="text-2xl ml-2"><FaFacebookSquare className="text-[#159CF8]" /></a> */}
                    <a target="_blank" href="https://github.com/ChowdhuryFatema" className="text-3xl ml-2 social-icon text-[#911c89] bg-white"><FaGithubSquare /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/fatemachowdhury318" className="text-3xl ml-2 social-icon"><FaLinkedin className="text-[#911c89] bg-white" /></a>
                </div>
                <Navbar.Toggle className="text-[#911c89]"/>
            </div>
            <Navbar.Collapse className="nav-link font-bold bg-white md:bg-transparent rounded-sm">
                <Navbar.Link href="#" className="nav-link font-bold md:text-white md:text-lg">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#about" className="nav-link font-bold md:text-white md:text-lg">About</Navbar.Link>
                <Navbar.Link href="#projects" className="nav-link font-bold md:text-white md:text-lg">Projects</Navbar.Link>
                <Navbar.Link href="#contact" className="nav-link font-bold md:text-white md:text-lg">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;