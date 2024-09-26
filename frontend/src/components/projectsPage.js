import React from 'react'
import "./projectsPage.css"
import logo from "../img/projectsListBg.png"
import bg from "../img/openchat.png"
import { useStateContext } from '../context/context'
import { Link } from 'react-router-dom'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {HiMenu} from "react-icons/hi"

const ProjectsPage = () => {

  const {setScrollHome, scrollHome, setScrollAbout, setScrollServices, setScrollContact, showModal, projectData} = useStateContext()
  return (
    <div className='projectPage'>

      <div className="projectPageContent">
          <div className="ppNavbar">
            <Link to="/" className="toHome">Go to home</Link>
            <div className="projectsPageTitle">Projects</div>
          </div>
          <div className="ppCards">
            {projectData.map((slide) => {
              return <div className="ppCard">
              <div className="ppTitle">{slide.title}</div>
              <div className="ppDets">
                <div className="ppDetsL">
                  <img className='ppImg' src={require(`../img/${slide.img}`)} alt="" />
                  <div className="ppBtns">
                    <div className="ppBtn" onClick={() => window.open(slide.liveLink)}>View website</div>
                    <div className="ppBtn orangeBg" onClick={() => window.open(slide.gitHub)}>View Github</div>
                  </div>
                </div>
                <div className="ppDetsR">
                  <div className="ppDesc">{slide.desc}</div>
                  <div className="ppTools">Tools: {slide.tools}</div>
                  <Link to="/services" className="ppCta">
                    <div>Get a free design!</div>
                  </Link>
                </div>
              </div>
            </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default ProjectsPage