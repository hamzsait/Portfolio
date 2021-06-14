import Jumbotron from 'react-bootstrap/Jumbotron'
import '../css/ProfileWindow.css'

function ProfileWindow(){

        return (
            <div id="profileWindow" >
                <Jumbotron id = "jumbotron">
                    <div id = 'profilePhoto'>
                        <img alt = 'profilePhoto' src="../images/profilePhoto.jpeg"></img>
                    </div>
                    <div id = 'profileText'>
                        <h1>Hamza Sait</h1>
                        <p>
                            Full Stack Web Developer 
                        </p>
                    </div>
                </Jumbotron>
            </div>
        )
}

export default ProfileWindow