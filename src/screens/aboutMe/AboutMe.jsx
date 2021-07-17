import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'

function AboutMe() {
  return (
    <div className="about__container">
      <div>
        <img src={person} alt="person icon"/>
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>This project is for a tutorial I am making to sell at Udemy... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facilis esse quisquam incidunt, sit temporibus eaque cum nisi dolor tempore et, accusamus aliquam eveniet nam, exercitationem libero! Atque, sint labore!,consectetur, adipisicing elit. Ipsam facilis esse quisquam incidunt, sit temporibus eaque</p>
      </div>
    </div>
  )
}

export default AboutMe
