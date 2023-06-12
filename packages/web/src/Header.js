import React from 'react'

const Header = ({ children }) => {
  return (
    <header>
      <h1>{children||"Facewall"}</h1>
    </header>
  )
}

export default React.memo(Header)
