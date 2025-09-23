// import styles
import "../styles/about.scss"

//import images
import aboutImg from "../assets/images/about-me.png"

// about page body set up
export default function About() {
  return (
    <div className="about-page d-flex align-items-center">
        <div className="container">
            <div className="row align-items-center">

                {/* left side */}
                <div className="col-md-6 text-center left-section">
                    <h1 className="about-title"> About Me</h1>
                    <img
                        src={aboutImg}
                        alt="About"
                        className="about-img"
                    />
                </div>

                {/* right side */}
                <div className="col-md-6 right-section">
                    <p>
                        Hello! I am Ishara Dilrukshi Wijerathna, an ICT Undergraduate in university of Sri Jayewardenepura.
                        As a secound year student I have engaged with several application development projects. 
                        I have used languages like C#, python, html, JS. I also interert in UI/UX designing. 
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

