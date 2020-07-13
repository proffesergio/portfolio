import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faDotCircle } from "@fortawesome/free-solid-svg-icons";


class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.projects.map((exp, index) => (
                <div key={index} className="col-12">
                                  <h3 className="mb-0">
                      <FontAwesomeIcon icon={faCube} color="blue" />
                      <span className="ml-3">{exp.title}</span>                  
                  </h3>
                <p className="list-item">
                  <FontAwesomeIcon icon={faDotCircle} color="green" />
                  <span className="ml-3">{exp.aboutWork}</span>
                </p>
              </div>              
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;
