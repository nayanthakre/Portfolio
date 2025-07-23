import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Mainpage from "./component/Mainpage";
import Featuresection from "./component/Featuresection";
import About from "./component/About";
import Conect from "./component/Conect";
import Aboutpage from "./component/Aboutpage"; // or from pages if you moved it
import Contactpage from "./component/Contactpage"; // Ensure this import matches your file structure
import work from "./component/Workpage"
import card1 from "./assets/card1.jpg"; // Adjust the path as necessary
import card2 from "./assets/card2.jpg"; // Adjust the path as necessary
import card3 from "./assets/card3.jpg"; // Adjust the path as necessary
import Workpage from "./component/Workpage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainpage />
              <Featuresection
              image={card1}
                paragraph={
                  <p>
                    Teamed up with a designer to breathe life into a promotional
                    webpage for our beloved show, Adventure Time. Delivered a
                    fully responsive design with dynamic content capabilities,
                    seamlessly integrating a newsletter feature to keep fans
                    updated with the latest adventures.
                  </p>
                }
                year="2023"
                technologies={["React", "CSS", "JavaScript"]}
                role="Frontend Developer"
              />
              <Featuresection
                image={card2}
                paragraph={
                  <p>
                    Collaborated with a team to develop a sleek and modern
                    landing page for a fictional product. Focused on creating
                    an intuitive user experience with smooth animations and
                    responsive design.
                  </p>
                }
                year="2024"
                technologies={["React", "SCSS", "JavaScript"]}
                role="CMS"
              />
              <Featuresection
                image={card3}
                paragraph={
                  <p>
                    Developed a comprehensive e-commerce platform with a focus
                    on user experience and performance. Implemented features
                    such as product filtering, user authentication, and a
                    shopping cart.
                  </p>
                }
                year="2025"
                technologies={["React, ", " CSS, ", " JavaScript,", " HTML"]}
                role="Full Stack Developer"
              />
              <About />
              <Conect />
            </>
          }
        />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Work" element={<Workpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
