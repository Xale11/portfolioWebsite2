import React, {useEffect, useState} from 'react'
import "./home.css"
import logo from "../img/Group 30.png"
import logo2 from "../img/svg/trBackground.svg"
import { TrBackground, BlBackground, Incentive } from '../svgComponents'
import { ReactComponent as Logo } from "../img/svg/trBackground.svg"
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {HiMenu} from "react-icons/hi"
import { useStateContext } from '../context/context'
import { Link } from 'react-router-dom'

const Home = () => {
  
  const {slideShowData,setScrollHome, scrollHome, setScrollAbout, setScrollServices, setScrollContact, showModal, setShowMenu} = useStateContext()

    return (
      <div className="home" >
        <div className="trDesign">
            <TrBackground/>
        </div>
        <div className="blDesign">
            <BlBackground/>
        </div>
        <div className="homeContent">
          <div className="navbar">
              <div className="navLinks">
                  <div className="navLink" onClick={() => setScrollHome(true)}>
                    Home
                  </div>
                  <Link to="/projects" className="navLink">
                    Projects
                  </Link>
                  <div className="navLink" onClick={() => setScrollAbout(true)}>
                    About
                  </div>
                  <div className="navLink" onClick={() => setScrollServices(true)}>
                    Services
                  </div>
                  <div className="navLink" onClick={() => setScrollContact(true)}>
                    Contact
                  </div>
                </div>
                <Link to="/projects" className="navProj">
                    <div className="navProjLink">View my work</div>
                </Link>
                <div className="navBurger">
                  <HiMenu onClick={() => setShowMenu(true)}/>
                </div>
                <div className="navSocials">
                  <FaGithub onClick={() => {window.open("https://github.com/Xale11")}}/>
                  <FaLinkedin onClick={() => {window.open("https://www.linkedin.com/in/alex-diyan-325200202/")}}/>
                  <MdEmail onClick={() => {navigator.clipboard.writeText("alexdiyan@outlook.com"); showModal()}}/>
                </div>
            </div>
            <div className='homeContainer'>  
            <div className="homeText">
              <div className="htHeader">Alex Diyan</div>
              <div className="htSubheader">A <span className='orange'>WEB DEVELOPER</span>, WHO UTILISES THE POWER OF REACT AND A.I. AUTOMATION TO REVOLUTIONISE B2B AND B2C INTERACTIONS AND CREATE IMMERSIVE WEB DESIGNS.</div>
            </div>
            <div className="homeSlides">
              {slideShowData.map((slide, i) => {
                return <div className="slideshow" style={{animationDelay: `${i * 3}s`}}>
                <div className="slideTitle">{slide.title}</div>
                <div className="slideImg">
                  <img src={require(`../img/${slide.img}`)} alt="" />
                </div>
                <div className="slideBtns">
                  <div className="slideBtn" onClick={() => window.open(slide.liveLink)}>View Website</div>
                  <div className="slideBtn orangeBg" id='' onClick={() => window.open(slide.gitHub)}>View GitHub</div>
                </div>
              </div>
              })}
              <div className="hsTitle">Recent Projects</div>
            </div>
            <div className="homeCTA">
              <div className="ctaContent">
                <div className="ctaBtn1">
                  <Link to="/projects" className="ctaBtn">View My Work</Link>
                </div>
                <div className="ctaBtn2">
                  <div className="ctaBtn orangeBg" id='' onClick={() => setScrollContact(true)}>Contact Me</div>
                </div>
              </div>
            </div>
            <div className="incentive"><Incentive/></div>
          </div>
        </div>
      </div>
    );
  };

export default Home