import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import ReactGA from "react-ga4";

class App extends Component {
  setGA = () => {
    ReactGA.initialize("G-LEVMTTBD7Y");
    ReactGA.send("pageview");
  };
  componentDidMount() {
    this.setGA();
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
