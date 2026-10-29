import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  return (
    <section className="container contact-page">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Good things start<br /><span className="serif-accent">with a hello.</span></h1>
        <p>Interested in a project, internship, or just want to talk about building things? Find me on the links below.</p>
      </div>
      <div className="contact-methods">
        <a href="https://github.com/ishanshdubey-builds" target="_blank" rel="noreferrer">
          <span className="contact-method-icon"><FaGithub /></span>
          <div><small>GITHUB</small><strong>ishanshdubey-builds</strong><p>Projects, code, and experiments</p></div>
          <FaArrowUpRightFromSquare />
        </a>
        <a href="https://www.linkedin.com/in/ishansh-dubey-877b3438b" target="_blank" rel="noreferrer">
          <span className="contact-method-icon"><FaLinkedin /></span>
          <div><small>LINKEDIN</small><strong>Connect professionally</strong><p>Internships, opportunities, and conversations</p></div>
          <FaArrowUpRightFromSquare />
        </a>
      </div>
    </section>
  );
}

export default Contact;
