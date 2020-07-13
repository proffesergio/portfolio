import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Tools extends Component {
  constructor(props) {
    super(props);

    this.tools = props.tools;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="tools">
        <div className="w-100">
          <h2 className="mb-5">Tools</h2>
          <div className="subheading mb-3">Other Tools &amp; Technologies</div>
          <div className="row">
          {
            this.tools.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
