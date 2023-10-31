"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import SocialMediaList from "./components/SocialMediaList";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import ContactForm from "./components/miniComponents/ContactForm";

export default function Home() {
  const [ isContactFormOpen, setIsContactFormOpen ] = useState(false);
  const [ socialMediaList ] = useState([
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sahan-weerakoon-software-engineer", source: "/img/LinkedIn.png" },
    { name: "GitHub", link: "https://www.github.com/SahanNimeshWeerakoon", source: "/img/Github.png" },
    { name: "Medium", link: "https://medium.com/@hsn.weerakoon.m", source: "/img/Medium.png" },
  ]);

  const toggleContactModal = () => {
    setIsContactFormOpen(status => !status);
  }

  return (
    <main>
      <NavBar toggleContactModal={toggleContactModal} />
      <Banner />
      <SocialMediaList list={socialMediaList} />
      <Projects />
      <Modal isOpen={isContactFormOpen}>
        <ContactForm />
      </Modal>
    </main>
  )
}
