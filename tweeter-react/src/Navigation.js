import React from 'react'

export const Navigation = () => {
  return (
    <nav>
      <div class="logo">
        <span>tweeter</span>
      </div>
      <button class="write-a-new-tweet">
        <span class="block-display"><span class="weight600">Write</span> a new tweet</span>
        <i class="fas fa-angle-double-down"></i>
      </button>
    </nav>
  )
}
