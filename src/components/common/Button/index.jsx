import React from 'react'

import './Button.css'

const Button = ({ type, content, variant }) => {
  return (
    <button type={type ? type : 'button'}  className={`btn btn-${variant}`}>
        { content }
    </button>
  )
}

export default Button