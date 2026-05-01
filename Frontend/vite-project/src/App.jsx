// importing the Navbar component
import Navbar from "./components/Navbar";

// importing the Footer component
import Footer from "./components/Footer";

// importing global CSS for the app
import "./App.css";

// importing routing components from react-router-dom
import { Route, Routes } from "react-router-dom";

// importing background animation components
import Background from "./components/Background";
import CursorAura from "./components/CursorAura";
import ThreeBackground from "./components/ThreeBackground";

// importing page components
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

// importing the page that shows full project details
import ProjectDetail from "./Pages/ProjectDetail";


// main App component
function App(){

  return(

    // main wrapper of the application
    <div>

      {/* animated background */}
      <Background/>

      {/* glowing cursor effect */}
      <CursorAura/>

      {/* three.js animated background */}
      <ThreeBackground/>

      {/* navigation bar visible on all pages */}
      <Navbar/>

      {/* routes decide which page component should render */}
      <Routes>

        {/* home page route */}
        <Route path="/" element={<Home/>}/>

        {/* projects page route */}
        <Route path="/projects" element={<Projects/>}/>

        {/* project detail page with dynamic id */}
        {/* example: /project/1 */}
        <Route path="/project/:id" element={<ProjectDetail/>}/>

        {/* contact page route
        <Route path="/contact" element={<Contact/>}/> */}

        {/* resume page route */}
        <Route path="/resume" element={<Resume/>}/>

      </Routes>

      {/* footer visible on all pages */}
      <Footer/>

    </div>

  )
}

// exporting the App component so main.jsx can render it
export default App;