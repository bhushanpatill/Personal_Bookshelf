import React from 'react'


function Buttons({name, icon, onClick}) {

  return (
    <div className = "buttons-container" onClick = {onClick}>
        <span>
            {icon}
        </span>
        <span>{name}</span>
    </div>
  )
}

export default Buttons