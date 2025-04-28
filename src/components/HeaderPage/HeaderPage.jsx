import React from 'react'
import './HeaderPage.css'

const HeaderPage = ({title}) => {
  return (
    <div className='page-title'>
      <h2>{title}</h2>
    </div>
  )
}

export default HeaderPage
