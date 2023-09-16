import React from 'react';
import './cards.css'

const Cards = () => {
  return (
    <div className='cards'>
       <div className="card-grid">
        <div className="card stacked">
            <img src="../img-10.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Learn To Sew </h2>
                <p className="card-description">Learn to sew with step-by-step <br />video courses designed for <br /> beginners. Learn at your pace!</p>
            </div>
        </div>
        <div className="card stacked">
            <img src="../img-11.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Video Collection </h2>
                <p className="card-description">Subscribe to my channel for <br /> freebie tutorials, sew-alongs and <br /> lifestyle content.</p>
            </div>
        </div>
        <div className="card stacked">
            <img src="../img-12.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Biz Podcast</h2>
                <p className="card-description">Listen as I share how I turned my <br /> hobby into a multi million dollar <br /> business.</p>
            </div>
        </div>
        <div className="card stacked">
            <img src="../img-15.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Shoemaking</h2>
                <p className="card-description">Learn to sew with step-by-step <br /> video courses designed for <br /> beginners. Learn at your pace! </p>
            </div>
        </div>
        <div className="card stacked">
            <img src="../img-13.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Shop Fabric</h2>
                <p className="card-description">Subscribe to my channel for <br /> freebie tutorials, sew-alongs and <br /> lifestyle content.</p>
            </div>
        </div>
        <div className="card stacked">
            <img src="../img-14.webp" alt="" className='card-img'/>
            <div className="card-content">
                <h2 className="card-title">Community</h2>
                <p className="card-description">Join my community of amazing <br /> people who love to sew, makes <br /> shoes, learn new things and <br /> motivate each other.</p>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Cards