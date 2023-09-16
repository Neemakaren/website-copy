import React from 'react'
import './hero.css'
import img from '../../assets/img-1.webp'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="box1">
            <div className="box1-img">
            <img src='../img-6.webp' alt="" />
            </div>
        
        </div>
        <div className="box2">
            <div className="box2-content">
                <div className="box2-heading">
                <h4>it's here!</h4>
                <h3>MAKE IT YOURS</h3>
                </div>
                <div className="box2-img">
                    <img src="../img-7.webp" alt="" />
                </div>
                <p className='box2-footer'>Purchase at any of the retailers <br />listed below. Learn More</p>
            </div>
        </div>
        <div className="box3">
            <img src='../img-5.webp' alt="" />
        </div> 
    </div>
  )
}

export default Hero