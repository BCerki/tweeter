import React from 'react'
import './Navigation.css'

export const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <span>tweeter</span>
      </div>
      <button className="write-a-new-tweet">
        <span className="block-display"><span className="weight600">Write</span> a new tweet</span>
        <i className="fas fa-angle-double-down"></i>
      </button>
    </nav>
  )
}
