import React from 'react'
import "./projects.css"
import { ProjectTl } from '../svgComponents'
import { useStateContext } from '../context/context'
import {Link} from "react-router-dom"

const Projects = () => {

  const {slideShowData} = useStateContext()
  const baseUrl = "../img/"

  return (
    <div className='Projects'>
      <div className="projectTl">
        <ProjectTl/>
      </div>
      <div className="projectsContent">
        <div className="projectsTitle">Projects</div>
        <div className="projectCards">
          {slideShowData.map((slide, i) => {
            if(i > 1){
              return
            }
            return(
            <div className="projectCard">
              <div className="cardImg">
                <img src={require(`../img/${slide.img}`)} alt="" />
              </div>
              <div className="cardTitle">{slide.title}</div>
              <div className="cardDesc">{slide.desc}</div>
              <div className="cardBtn" onClick={() => window.open(slide.liveLink)}>View Website</div>
              <div className="cardBtn orangeBg" onClick={() => window.open(slide.gitHub)}>View GitHub</div>
              <Link to="/projects" className="projExtras">Learn More</Link>
            </div>
          )})}
        </div>
        <Link to="/projects" className="toProjects">See all Projects</Link>
      </div>
    </div>
  )
}

export default Projects