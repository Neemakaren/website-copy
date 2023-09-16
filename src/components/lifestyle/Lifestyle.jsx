import React from 'react'
import './lifestyle.css'

const Lifestyle = () => {
  return (
    <div className='lifestyle'>
      <div className="lifestyle-img">
        <img src="../img-8.webp" alt="" className='image' />
      </div>
      <div className="lifestyle-content">
        <h1 className='lifestyle-heading'>DIY & <br /> LIFESTYLE</h1>
        <p className='lifestyle-main'>Check out my latest blog posts! <br />
          Get inspired, find new patterns <br />
          and learn to sew  with my <br /> tutorials, 
          tips, and freebie <br /> projects.</p>
          <a href="/">READ BLOG</a>
      </div>
    </div>
  )
}

export default Lifestyle