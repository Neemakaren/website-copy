import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-content">
            <h1>JOIN MY COMMUNITY</h1>
            <h4>Subscribe for the inside scoop!</h4>
        </div>

            <form action="" className='contact-form'>
                <input type="text" placeholder='First name' className='first' />
                <input type="text" placeholder='Last name' className='first'/>
                <input type="text" placeholder='Email Address' className='first'/>
                <input type="text" placeholder='subscribe' className='first'/>
            </form>
    </div>
  )
}

export default Contact