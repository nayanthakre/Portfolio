import React from 'react'
import './Conect.css';

function Conect() {
  return (
  <>
  <div className="conect-wrap">
  <div className="conect-text">
    <h1>Lets-Connect</h1>
    <p>say hello at <a href="mailto:nayant01@gmail.com">nayant01@gmail.com</a></p> 
    <p>for more information here is my <a href="./NayanJ.cv.pdf"  target="_blank" rel="noopener noreferrer">Resume</a></p>  
  </div>
  
    <form action="">
        <label htmlFor="name">Name</label>
      <input type="text"  />
      <label htmlFor="email">Email</label>      
      <input type="email"  />
        <label htmlFor="subject">Subject</label>
       <input type="text"  />
       <label htmlFor="message">Message</label>
      <textarea  ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
    
  </>
  )
}

export default Conect