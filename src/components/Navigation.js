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
                        <h1 id = 'lineblue' onMouseOver={() => alertblue()} class='nav-link lineblue'>|</h1>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <h1 id = 'linegreen' onMouseOver={() => alertgreen()} class='nav-link linegreen'>|</h1>
                        <Nav.Link href="/about">About</Nav.Link>
                        <h1 id = 'linered' onMouseOver={() => alertred()} class='nav-link linered'>|</h1>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
