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
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </div>
                </Jumbotron>
            </div>
        )
}

export default ProfileWindow