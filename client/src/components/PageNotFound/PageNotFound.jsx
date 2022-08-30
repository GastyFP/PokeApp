import React from 'react'
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
      <h1>Sorry, Pokemon not found</h1>
      <img  src="https://c.tenor.com/J6lraJXFl4IAAAAC/pokemon-pikachu.gif" alt="sorry" />
    </div>

  )
}

export default PageNotFound