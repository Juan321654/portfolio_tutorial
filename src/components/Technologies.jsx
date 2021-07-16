import React from 'react'
import DevIcon from "devicon-react-svg";
import {techs} from '../helpers/techData'

function Technologies() {
  return (
    <div className="technologies__container">
      <div>
        <h1 style={{textAlign: 'center'}}>SOME OF THE TECHNOLOGIES I USE</h1>
      </div>
      <div className="tech__cards__container">
      {techs.map(e => {
        return (
          <div className="tech__card">
            <DevIcon className="icon tech__icons" icon={e.iconName}/>
            <span style={{margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Technologies
