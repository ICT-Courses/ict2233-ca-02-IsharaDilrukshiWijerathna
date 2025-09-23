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
                      <h5 className="card-title"> Diary application develpoment project</h5>
                      <p className="card-text"> The first project that I developed. This is a diary application. The name is Day memory. This is developed by using C# programming language.
                        I developed this under .Net framework. My sql workbench have used for database connection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card project-card">
                    <div className="card-body">
                      <h5 className="card-title"> Footware Marketting Web application Development Project</h5>
                      <p className="card-text"> This is a colloborative project. The name is S&S Footware marketting web site. We developed this by using pure html, java scripts and css. The Database that we used is Firebase. The web site is hosted from vercel. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}


