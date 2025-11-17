import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
            <img src={props.img} alt="profile picture" />
            <h1>{props.user}</h1>
            <h4>{props.role}</h4>
            <p>Hey, I am a Software Developer and looking to start my jouney.</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card