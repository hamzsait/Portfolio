import React from 'react'
import Nav from '../components/Navigation.js'
import ProfileWindow from '../components/ProfileWindow.js'

function Home() {
    return (
        <div>
            <Nav />
            <ProfileWindow />
            <h1> Home </h1>
        </div>
    )
}

export default Home