import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaFileInvoiceDollar, FaCalculator } from "react-icons/fa";
import { SiTensorflow , SiNodedotjs,SiOracle,SiPostman , SiTypescript} from "react-icons/si"; 
import { FaMicrochip } from "react-icons/fa"; 


import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaDatabase,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Typescript: <SiTypescript />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
   
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    SQL:<FaDatabase/>,
    Knockout: <DiJavascript1 />, 
    BML: <SiTensorflow />, 
    CPQ: <FaFileInvoiceDollar />,
    NodeJS: <SiNodedotjs />,
    OCC: <SiOracle />,
    Postman: <SiPostman /> 
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
