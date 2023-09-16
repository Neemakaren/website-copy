import React from 'react'
import './main.css';
import img from '../../assets/img-1.webp'

 
const Main = () => {
  return (
    <div className="cont">
    <div className='main'>
        <div className="main-img">
            <img src={img} alt="" className='hero-img'/>
        </div>
        <div className="content">
          <span>mimi g</span>
          <span>Aug 23</span>
          <div>
            <p>Linen Diy pants & Pullover Top</p>
          </div>
        </div>
    </div>
    <div className='main'>
        <div className="main-img">
            <img src={img} alt="" className='hero-img'/>
        </div>
        <div className="content">
          <span>mimi g</span>
          <span>Aug 23</span>
          <div>
            <p>Linen Diy pants & Pullover Top</p>
          </div>
        </div>
    </div>
    <div className='main'>
        <div className="main-img">
            <img src={img} alt="" className='hero-img'/>
        </div>
        <div className="content">
          <span>mimi g</span>
          <span>Aug 23</span>
          <div>
            <p>Linen Diy pants & Pullover Top</p>
          </div>
        </div>
    </div>
    <div className='main'>
        <div className="main-img">
            <img src={img} alt="" className='hero-img'/>
        </div>
        <div className="content">
          <span className='mini'>mimi g</span>
          <span className='mini'>Aug 23</span>
          <div>
            <p>Linen Diy pants & Pullover Top</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Main