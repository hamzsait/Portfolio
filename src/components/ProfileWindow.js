import Jumbotron from 'react-bootstrap/Jumbotron'
import '../css/ProfileWindow.css'


function hoverJumbo(){
    document.getElementById("jumbotron").classList.add('hoverJumbo')
    document.getElementById("profilePhoto").classList.add('hoverPhoto')
    document.getElementById("profileName").classList.add("hoverProfileName")
}


function ProfileWindow(){

        return (
            <div id="profileWindow" >
                <Jumbotron id = "jumbotron" onMouseOver={() => hoverJumbo()}>
                    <div id = 'profilePhoto'>
                        <img alt = 'profilePhoto' src="../images/profilePhoto.jpeg"></img>
                    </div>
                    <div id = 'profileText'>
                        <h1 id = 'profileName'>Hamza Sait</h1>
                        <p>
                                Full Stack Web Developer and Data Engineer based in Austin, Texas focused on politics, policy and society.
                            The majority of my work revolves around civic tech and how to improve society through software solutions. 
                        </p>
                    </div>
                </Jumbotron>
            </div>
        )
}

export default ProfileWindow