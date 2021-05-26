import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Router>
        </div>
    )
}

export default App