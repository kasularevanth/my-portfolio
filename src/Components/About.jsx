import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
    Hi, my name is <b>Revanth Kasula</b> and I am from India.
    I'm a <b>Full Stack Developer</b> with experience in <b>ReactJS, Node.js, Java, Python</b>.
    <br />
    <br />
    I have worked as an <b>Associate Technical Consultant</b> at <b>Argano </b>, where I optimized computing workflows, 
    improved system integrations, and automated manual processes to enhance productivity and efficiency.
    <br />
    <br />
    Some of my key projects include <b>United States Pharmacopeia (USP)</b>, where I streamlined payment processing and 
    credit limit automation, and <b>Avery Dennison Printed Fabric Label (ADPFL)</b>, where I refined CPQ system functionality.
    <br />
    <br />
    I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, 
    links are in the footer.
    <br />
    Some of my hobbies include public speaking, event management, and UI enhancement.
</p>

          <a href="img/Revanth_Kasula.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="Typescript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="CPQ" />
        {/* <Skills skill="Knockout" /> */}
        <Skills skill="OCC" />
        <Skills skill="Postman" />

        <Skills skill="Npm" />
        <Skills skill="SQL" />
        <Skills skill="NodeJS" />
      </div>
    </>
  );
};

export default About;
