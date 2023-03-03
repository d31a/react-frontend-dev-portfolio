import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedResume(pickedResume, oppositeResIconId) {
    this.swapCurrentlyActiveResume(oppositeResIconId);
    document.documentElement.lang = pickedResume;
    var resumePath =
      document.documentElement.lang === window.$primaryResume
        ? `res_developer.json`
        : `res_designer.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveResume(oppositeResIconId) {
    var pickedResIconId =
      oppositeResIconId === window.$primaryResumeIconId
        ? window.$secondaryResumeIconId
        : window.$primaryResumeIconId;
    document
      .getElementById(oppositeResIconId)
      .removeAttribute("filter", "brightness(60%)");
    document
      .getElementById(pickedResIconId)
      .setAttribute("filter", "brightness(60%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedResume(
      window.$primaryResume,
      window.$secondaryResumeIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        {/*Change this so it changes projects -- not language -- on button click */}
        
        <div className="col-md-12 mx-auto text-center project-switch">
          <div
            onClick={() =>
              this.applyPickedResume(
                window.$primaryResume,
                window.$secondaryResumeIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify project-icon mr-5"
              data-icon="pixelarticons:code"
              data-inline="false"
              alt="Coding Projects"
              id={window.$primaryResumeIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedResume(
                window.$secondaryResume,
                window.$primaryResumeIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify project-icon"
              data-icon="pixelarticons:paint-bucket"
              data-inline="false"
              alt="Design Projects"
              id={window.$secondaryResumeIconId}
              
            ></span>
          </div>
        </div> 

        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
