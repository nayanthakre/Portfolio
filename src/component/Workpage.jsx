import React from 'react'
import Featuresection from './Featuresection'
import card2 from "../assets/card2.jpg"; // Adjust the path as necessary
function Workpage() {
  return (
  <>
  <Featuresection
  image={card2}
  paragraph={
    <p>
      Collaborated with a team to develop a sleek and modern landing page for a fictional product. Focused on creating an intuitive user experience with smooth animations and responsive design.
    </p> }
  year="2024"
  technologies={["React", "SCSS", "JavaScript"]}
  role="CMS"
  />
  </>
  )
}

export default Workpage