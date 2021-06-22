import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Github } from 'react-bootstrap-icons'
import '../css/Nav.css'
import '../css/HomeIcon.css'


function alertblue(){
    document.getElementById("lineblue").classList.add('setBlue');
}

function alertred(){
    document.getElementById("linered").classList.add('setRed');
}

function alertgreen(){
    document.getElementById("linegreen").classList.add('setGreen');
}

function Navigation() {

        return (
            <div>
                <Navbar id="navbar" bg="light" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <h1 id = 'lineblue' onMouseOver={() => alertblue()} className ='nav-link lineblue'>|</h1>
                        <Nav.Link className = 'lineblue' id = 'blueText' href="/projects">Projects</Nav.Link>
                        <h1 id = 'linegreen' onMouseOver={() => alertgreen()} className ='nav-link linegreen'>|</h1>
                        <Nav.Link className = 'linegreen' id = 'greenText' href="/about">About</Nav.Link>
                        <h1 id = 'linered' onMouseOver={() => alertred()} className ='nav-link linered'>|</h1>
                        <Nav.Link id = 'redText' className = 'linered' href="/contact">Contact</Nav.Link>
                    </Nav>
                    <a href = 'https://github.com/hamzsait' id = 'icon'>
                            <Github/>
                    </a>
                </Navbar>
            </div>
            
        )
}

export default Navigation
