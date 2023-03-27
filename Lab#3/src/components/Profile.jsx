import "./Profile.css";
import profilePicture from "../assets/Profile.jpg"
function Profile() {
    return(
        <div className="layout">
            <img src={profilePicture} alt="profile pitcture" />
            <h1 className="name">Kaung Kaung</h1>
            <hr />
        </div>
    )

}
export default Profile;