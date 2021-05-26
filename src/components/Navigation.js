import { Nav } from 'react-bootstrap'
import React from 'react'
import Home from './Home'
import About from './About'


class Navigation extends React.Component {

    handlePageChange = res => console.log(res)

    render() {
        return (
            <div>
                <Nav defaultActiveKey="link-1">
                    <Nav.Item  onClick={this.handlePageChange("Home")}>
                        <Nav.Link eventKey="link-1">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  onClick={this.handlePageChange("Projects")}>
                        <Nav.Link eventKey="link-2">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.handlePageChange("About")}>
                        <Nav.Link eventKey="link-3">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.handlePageChange("Contact")}>
                        <Nav.Link eventKey="link-4">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.renderPage}
            </div>
        )
    }
}

export default Navigation
