import { Nav } from 'react-bootstrap'
import { Component } from 'react'
import '../css/Nav.css'



class Navigation extends Component {

    render() {
        return (
            <div>
                <Nav id = "navbar" defaultActiveKey="link-1">
                    <Nav.Item >
                        <Nav.Link href = '/' eventKey="link-1">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link class = "navText" href = '/projects' eventKey="link-2">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link class = "navText" href = '/about' eventKey="link-3">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link class = "navText" href = '/contact' eventKey="link-4">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.renderPage}
            </div>
        )
    }
}

export default Navigation
