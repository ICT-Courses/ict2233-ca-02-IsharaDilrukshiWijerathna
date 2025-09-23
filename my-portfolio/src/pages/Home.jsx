// Import styles
import "../styles/home.scss";

//import images
import profileImg from "../assets/images/Profile.png";

// set up home page
export default function Home() {
    return(
        <div className="home-page d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">

                    {/* left side */}
                    <div className="col-md-6 text-section">
                        <h3 className="greeting">Hi there!</h3>
                        <h1 className="name">
                            I am <span className="highlight">Ishara Dilrukshi Wijerathna</span>
                        </h1>
                        <h4 className="role">Information and Communication Technologyundergraduate </h4>
                    </div>

                    {/* right side */}
                    <div className="col-md-6 text-center">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
