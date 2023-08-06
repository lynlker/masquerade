import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CharacterMenu.css";
import HeroSlider, { Slide } from "hero-slider";

const CharacterMenu = () => {
  // Add code here
  const characters = [
    {
      id: "AnneMarie",
      name: "Anne Marie Lawford",
      image: "img/anneL.png",
    },
    {
      id: "Voice",
      name: "Voice of Trespass",
      image: "img/anneLMask.png",
    },
    // Add more character objects as needed
  ];
  const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const path = window.location.pathname;
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    // JSX code for rendering the character menu
    // <div className="scroll-container">
    //   {characters.map((character) => (
    //     <Link key={character.id} to={`character/${character.id}`}>
    //       <div class="scroll-item">
    //         <img src={character.image} alt={character.name} />
    //         <p>{character.name}YOLO</p>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
    <HeroSlider>
      {characters.map((character) => (
        <Slide
          key={character.id}
          background={{
            backgroundImage: character.image,
            // Additional background styles can be added here
          }}
        >
          <div className="slide-content">
            <Link to={character.id}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          </div>
        </Slide>
      ))}
    </HeroSlider>
  );
};

export default CharacterMenu;
