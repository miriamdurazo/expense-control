import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
const { nav, setNav } = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <Link className="logo text-3xl" to="/" style={{textShadow: "4px 4px 4px #aaa"}} onClick={() => setNav(false)}>Vanessa D'Antonio</Link>
      
      {/* Menu */}
      <ul className="hidden md:flex">
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setNav(false)} className="navLink">Home</NavLink>
        <NavLink exact="true" activeclassname="active" to="#expensesChart" onClick={() => setNav(false)} className="navLink">Expenses Chart</NavLink>
        <NavLink exact="true" activeclassname="active" to="#currency" onClick={() => setNav(false)} className="navLink">Work</NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" onClick={() => setNav(false)} className="navLink">Contact</NavLink>
      </ul>
      
      {/* Hamburger */}
      <div onClick = { handleClick } className="hamburger-icon md:hidden z-10">
        {!nav ? <FontAwesomeIcon icon = { faBars }/> : <FontAwesomeIcon icon = { faClose }/>}
      </div>
      
      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setNav(false)} className="navLink py-4 text-2xl">Home</NavLink>
        <NavLink exact="true" activeclassname="active" to="/about" onClick={() => setNav(false)} className="navLink py-4 text-2xl">About</NavLink>
        <NavLink exact="true" activeclassname="active" to="/work" onClick={() => setNav(false)} className="navLink py-4 text-2xl">Work</NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" onClick={() => setNav(false)} className="navLink py-4 text-2xl">Contact</NavLink>
      </ul>

      {/* Menu */}  
      <ul className="flex">
        <li className="px-3">
          <a href="https://www.linkedin.com/in/vanessadantonio/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="https://github.com/VanessaDantonio" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="@VYumi" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="https://twitter.com/VYNDantonio" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} className="anchor-icon"/></a>
        </li>
      </ul>

    </div>
  );
}