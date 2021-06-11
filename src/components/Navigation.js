import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Component } from 'react'
import '../css/Nav.css'

function alertblue(){
    document.getElementById("lineblue").classList.add('setBlue');
}

function alertred(){
    document.getElementById("linered").classList.add('setRed');
}

function alertgreen(){
    document.getElementById("linegreen").classList.add('setGreen');
}

class Navigation extends Component {
    
    render() {
        return (
            <div>
                <Navbar id="navbar" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <h1 id = 'lineblue' onMouseOver={() => alertblue()} className ='nav-link lineblue'>|</h1>
                        <Nav.Link className = 'lineblue' id = 'blueText' href="/projects">Projects</Nav.Link>
                        <h1 id = 'linegreen' onMouseOver={() => alertgreen()} className ='nav-link linegreen'>|</h1>
                        <Nav.Link className = 'linegreen' id = 'greenText' href="/about">About</Nav.Link>
                        <h1 id = 'linered' onMouseOver={() => alertred()} className ='nav-link linered'>|</h1>
                        <Nav.Link id = 'redText' className = 'linered' href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
