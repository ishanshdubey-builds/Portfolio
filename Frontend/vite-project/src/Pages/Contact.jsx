import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Contact() {
  return (
    <section className="container contact-page">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Good things start<br /><span className="serif-accent">with a hello.</span></h1>
        <p>Interested in a project, internship, or just want to talk about building things? Feel free to reach out.</p>
      </div>
      <div className="contact-methods">
        <a href="mailto:ishansh.dubey@example.com"><span><FaEnvelope /></span><div><small>EMAIL</small><strong>ishansh.dubey@example.com</strong></div><FaArrowUpRightFromSquare /></a>
        <a href="https://github.com/ishanshdubey-builds" target="_blank" rel="noreferrer"><span><FaGithub /></span><div><small>GITHUB</small><strong>ishanshdubey-builds</strong></div><FaArrowUpRightFromSquare /></a>
        <a href="https://www.linkedin.com/in/ishansh-dubey-877b3438b" target="_blank" rel="noreferrer"><span><FaLinkedin /></span><div><small>LINKEDIN</small><strong>Connect professionally</strong></div><FaArrowUpRightFromSquare /></a>
      </div>
    </section>
  );
}

export default Contact;
