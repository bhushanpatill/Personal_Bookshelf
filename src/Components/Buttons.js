import React from 'react'
// import styled from 'styled-components'
// import { useTheme } from '../Context/themeContext';

function Buttons({name, icon, onClick}) {
    // const theme = useTheme();
  return (
    <div className = "buttons-container" onClick = {onClick}>
        <span>
            {icon}
            {/* {name} */}
        </span>
        <span>{name}</span>
    </div>
  )
}

export default Buttons