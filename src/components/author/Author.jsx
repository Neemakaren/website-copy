import React from 'react'
import './author.css'

const Author = () => {
  return (
   <div className="author">
    <div className="author-card">
        <div className="author-content">
            <h1 className='author-heading'>HELLO!</h1>
            <h4 className='author-heading2'>I'm Mimi G - I am an author, <br /> entrepreneur, and expert in the DIY <br /> sewing revolution.</h4>
            <p className='author-main'>I have taught hundreds of 
                thousands of people how to <br />
                sew, start creative careers, 
                and monetize their hobbies <br />
                My life mission is to help 
                others bring their dreams to <br />
                fruition and live the life they have always wanted. </p>
        <a href="">READ MY BLOG</a>
        </div>
    </div>
    <div className="author-img">
        <img src="../img-9.webp" alt="" />
    </div>
   
   </div>

  )
}

export default Author