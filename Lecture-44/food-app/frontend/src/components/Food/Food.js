import React from 'react'

const Food = (props) => {
  return (
      <li>
          <p>{props.name}</p>
          <p>{props.desc}</p>
          <p>$ { props.price }</p>
    </li>
  )
}

export default Food