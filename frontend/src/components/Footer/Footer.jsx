import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='programs'>
        <h3>UNDERGRADUATE PROGRAMS</h3>
        <p>B.Sc Civil Engineering</p><hr/>
        <p>B.Sc Electrical Engineering</p><hr/>
        <p>B.Sc Mechanical Engineering</p><hr/>
        <p>B. Architecture</p><hr/>
        <p>B.Sc Computer Science</p><hr/>
        <p>Bachelor of Business Administration</p><hr/>
      </div>
      <div className='details'>
        <h4>CONTACT DETAILS</h4>
        <p>Kotla Rd, Near Ramlila Chauraha, Gandhi-<br/>Nagar, Firozabad, Uttar Pradesh 283203</p>
        <p>Telephone- +9123456789</p>
        <p>Email- abc@email.com</p>
      </div>
    </div>
    <div className='bottom'>
    <p>CopyRights @ Allright Reserved 2024</p>
  </div>
  </>
  )
}

export default Footer
