// import styles
import "../styles/projects.scss"

// project page set up
export default function Projects() {
  return (
    <div className="projects-page d-flex align-items-center">
            <div className="container">
              
              <h1 className="project-title text-center mb-5"> Projects</h1>

              {/* Cards for projects */}

              <div className="row g4">

                <div className="col-md-6">
                  <div className="card project-card">
                    <div className="card-body">
                      <h5 className="card-title">Diary Application Develpoment Project  </h5>
                      <p className="card-text">The first project that I developed. This is a diary application. The name is Day memory. This is developed by using C# programming language.
                        I developed this under .Net framework. My sql workbench have used for database connection.
                      </p>

                      <div className="d-flex justify-content-center gap-3">
                       <a 
                          href="https://github.com/ICT-Courses/application-development-ca1-IsharaDilrukshiWijerathna" 
                          className="btn btn-primary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Repository
                        </a>

                        <a 
                          href="https://drive.google.com/file/d/1j4gWa4HmoP56l5ggmFjrNjTRkAqK1N3m/view?usp=drivesdk" 
                          className="btn btn-primary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Demo vedeo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card project-card">
                    <div className="card-body">
                      <h5 className="card-title"> Footware Marketting Web application Development Project</h5>
                      <p className="card-text"> This is a colloborative project. The name is S&S Footware marketting web site. We developed this by using pure html, java scripts and css. The Database that we used is Firebase. The web site is hosted from vercel. 
                      </p>

                      <div className="d-flex justify-content-center gap-3">
                       <a 
                          href="https://github.com/Hansi-Umayangani/S-S-Footwear-Promo-Website" 
                          className="btn btn-primary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Repository
                        </a>

                        <a 
                          href="https://ss-footwear-promo-website.vercel.app" 
                          className="btn btn-primary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Web Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card project-card">
                    <div className="card-body">
                      <h5 className="card-title">Coffee Menu Marketing Development Project</h5>
                      <p className="card-text"> This is called as "Vintage Coffee House". I developed only the Front end development by using react framwork. The languages are html, css and Java Scrips.
                      </p>

                      <div className="d-flex justify-content-center gap-3">
                       <a 
                          href="https://github.com/ICT-Courses/ict2233-ca-01-IsharaDilrukshiWijerathna" 
                          className="btn btn-primary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}


