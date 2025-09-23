import githubIcon from "../assets/images/github-icon.png";
import linkedinIcon from "../assets/images/linkdin.jpg";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3 mt-5">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Left side */}
        <p className="mb-0">© {new Date().getFullYear()} Ishara | ICT Undergraduate</p>

        {/* Right side */}
        <div className="footer-links">
          <a
            href="https://github.com/IsharaDilrukshiWijerathna"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>

          <a
            href="https://linkedin.com/in/ishara-dilrukshi-6111222317"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}



