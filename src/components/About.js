import React, { Component } from "react";
import nparesume from "../assets/NikolaosPapadakis-CV.pdf";
class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    if (resumeData) {
      var name = resumeData.name;
      var profilepic = "images/" + resumeData.image;
      var bio = resumeData.bio;
      var city = resumeData.address.city;
      var state = resumeData.address.state;
      var zip = resumeData.address.zip;
      var phone = resumeData.phone;
      var email = resumeData.email;
      var resumedownload = resumeData.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}
                    <br />
                  </span>
                  <span>
                    <a href="mailto:npapadakis@gmail.com">{email}</a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={nparesume} className="button" target="_blank">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
