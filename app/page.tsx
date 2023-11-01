"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import SocialMediaList from "./components/SocialMediaList";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Alert from "./components/miniComponents/Alert";
import ContactForm from "./components/miniComponents/ContactForm";

export default function Home() {
  const [ isContactFormOpen, setIsContactFormOpen ] = useState(false);
  const [ formType, setFormType ] = useState("contact");
  const [ emailSent, setEmailSent ] = useState(true);
  const [ socialMediaList ] = useState([
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sahan-weerakoon-software-engineer", source: "/img/LinkedIn.png" },
    { name: "GitHub", link: "https://www.github.com/SahanNimeshWeerakoon", source: "/img/Github.png" },
    { name: "Medium", link: "https://medium.com/@hsn.weerakoon.m", source: "/img/Medium.png" },
  ]);

  const toggleContactModal = (closeStatus: string) => {
    console.log(closeStatus)
    if(closeStatus == "toggleModal") {
      setIsContactFormOpen(status => !status);
    } else if (closeStatus === "sent") {
      setFormType("successful");
      setEmailSent(true);
      setTimeout(() => { setIsContactFormOpen(false) }, 4000);
    } else if(closeStatus === "notSent") {
      setFormType("failed");
      setEmailSent(false);
      setTimeout(() => { setIsContactFormOpen(false) }, 4000);
    }
  }

  return (
    <main>
      <NavBar toggleContactModal={toggleContactModal} />
      <Banner />
      <SocialMediaList list={socialMediaList} />
      <Projects />
      <Modal isOpen={isContactFormOpen} onClose={toggleContactModal}>
        {formType==="contact" ?
          <ContactForm onClose={toggleContactModal} /> :
          <Alert success={emailSent}> { emailSent ? "Thank you for contacting me. I will get back to you ASAP" : "Sorry something went wrong." } </Alert>
        }
      </Modal>
    </main>
  )
}
