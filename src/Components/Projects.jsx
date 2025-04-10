import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  const categories = {
    web: [
      {
        photo: "img/Avery_Dennison_Logo.png",
        name: "Avery Dennison",
        description:
          "Enhanced the CPQ system for Avery Dennison by optimizing performance, automating tasks with BML scripting, and resolving critical configuration issues. Improved system reliability, achieving a 10% performance boost and ensuring seamless user interactions.",
        source: "https://github.com/kasularevanth/Averydennison",
        demo: "#",
      },
      {
        photo: "img/usp.png",
        name: "United States Pharmocoepia",
        description:
          "Optimized e-commerce systems by integrating efficient payment processes, automating credit limits, and enhancing UI for seamless platform integration. Spearheaded revenue growth initiatives, reducing downtime by 30% and increasing order value by 15%.",
        source: "https://github.com/kasularevanth/unitedStatesPharmacoepia",
        demo: "#",
      },
      {
        photo: "https://play-lh.googleusercontent.com/Etar8ijdCl_bYMpgCEnHlS505Dkgh-BmUJjmQCSlzyv-8o8Acp7BFxfFiGtju1DTMuqT",
        name: "EcommerceZara",
        description:
          "To build a responsive and user-friendly eCommerce platform similar to Zara with features like product browsing, filtering, and secure checkout.",
        source: "https://github.com/kasularevanth/Ecommerce-Zara",
        demo: "https://ecommercezara.netlify.app/",
      },
      {
        photo: "img/web3.png",
        name: "Web3",
        description:
          "A cryptocurrency-style web page, focusing on sleek UI and modern CSS techniques.",
        source: "https://github.com/kasularevanth/Crypto-project",
        demo: "https://crypto-project-five-opal.vercel.app/",
      },
      {
        photo: "img/smash.png",
        name: "SmashWallsClone",
        description:
          "A clone of a website that lets you break walls. Explored DOM manipulation and animations.",
        source: "https://github.com/kasularevanth/Smashwallsclone",
        demo: "https://smashwallsclone.vercel.app/",
      },
      {
        photo: "img/Film.png",
        name: "MovieApp",
        description:
          "A web app to search and discover movies using the TMDB API. Improved understanding of APIs and asynchronous requests.",
        source: "https://github.com/kasularevanth/Movie-App",
        demo: "https://movie-app-brown-seven-50.vercel.app/",
      },
      {
        photo: "img/gym.png",
        name: "Levels",
        description:
          "A gym website created to boost local gym sales. Learned React basics and hosting on Vercel.",
        source: "https://github.com/kasularevanth/Gym-Website",
        demo: "https://gym-website-pink.vercel.app/",
      },
      {
        photo: "img/colour.png",
        name: "ColourPaletteGenerator",
        description:
          "A tool to generate and save color palettes. Worked on advanced JavaScript techniques and user interaction.",
        source: "https://github.com/kasularevanth/ColourPaletteGenerator",
        demo: "https://colourpalettegen.netlify.app/",
      },
      {
        photo: "img/backpack.png",
        name: "Ecommerce Landing Page",
        description:
          "A simple landing page for an Ecommerce website. Learned how to use custom cursors on web pages .",
        source: "https://github.com/kasularevanth/Ecommerce-Landing-Page",
        demo: "https://landing-page-react-sage.vercel.app/",
      },
      {
        photo: "img/dice.png",
        name: "DiceGame",
        description:
          "A fun landing page with a dice game. Enhanced my understanding of JavaScript logic and DOM events.(demo soon to be uploaded)",
        source: "https://github.com/kasularevanth/Dice-game-Project",
        demo: "#",
      }

    ],
    python: [
      {
        photo: "img/snake.png",
        name: "SnakeGame",
        description:
          "Classic snake game using Python and Pygame. A fun introduction to game development.",
        source: "https://github.com/kasularevanth/Snake-game",
        demo: "#",
      },
      {
        photo: "img/brick.png",
        name: "BrickBreaker",
        description:
          "A retro brick breaker game implemented in Python. Honed skills in Pygame and logic-building.",
        source: "https://github.com/kasularevanth/Brick-Breaker",
        demo: "#",
      },
    ]
    
  };
  

  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      {/* Category Tabs */}
      <div className="categoryTabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`categoryTab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="project">
        {categories[activeCategory].map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.photo}
            projectName={project.name}
            description={project.description}
            source={project.source}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
