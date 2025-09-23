// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import stylesheests 
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Navbar setup
export default function App(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home"> Ishara Dilrukshi Wijerathna </a>
                <div>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> 

        {/* Section setup  */}
        <section id="home"><Home /> </section>
        <section id="about"><About /> </section>
        <section id="projects"><Projects /> </section>
        <section id="contact"><Contact /> </section>

        {/* Footer set up */}
        <Footer />
        </>
    )

}





