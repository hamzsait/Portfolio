import { Nav } from 'react-bootstrap'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'


class Navigation extends React.Component {

    render() {
        return (
            <div>
                <Nav defaultActiveKey="link-1">
                    <Nav.Item>
                        <Nav.Link href = '/' eventKey="link-1">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/projects' eventKey="link-2">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/about' eventKey="link-3">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/contact' eventKey="link-4">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.renderPage}
            </div>
        )
    }
}

export default Navigation
