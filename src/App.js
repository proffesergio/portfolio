import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Tools from './Components/Tools';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import profileData from './profileData.json';
import ReactGA from 'react-ga';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      projects : profileData.projects,
      education : profileData.education,
      skills : profileData.skills,
      tools : profileData.tools,
      interests : profileData.interests,
      awards : profileData.awards
    };

    ReactGA.initialize('UA-158818625-1');
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Projects projects={this.state.projects} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Tools tools={this.state.tools} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
        </div>
      </div>
    );
  }
}

export default App;
