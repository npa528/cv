import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((project) => {
                  let projectImage = "images/portfolio/" + project.img;
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <img src={projectImage} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{project.name}</h5>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
