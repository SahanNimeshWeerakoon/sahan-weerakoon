"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import SocialMediaList from "./components/SocialMediaList";
import HeadBanner from "./components/HeadBanner";
import EmailOrPhone from "./components/miniComponents/EmailOrPhone";
import Image from "next/image";
import Projects from "./components/Projects";

export default function Home() {
  const [ socialMediaList ] = useState([
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sahan-weerakoon-software-engineer", source: "/img/Linkedin.png" },
    { name: "GitHub", link: "https://www.github.com/SahanNimeshWeerakoon", source: "/img/Github.png" },
    { name: "Medium", link: "https://medium.com/@hsn.weerakoon.m", source: "/img/Medium.png" },
  ]);

  return (
    <main>
      <NavBar />
      <SocialMediaList list={socialMediaList} />
      <HeadBanner />
      <div className="contact-icon">
        <EmailOrPhone icon={<Image src="/img/mail.svg" width={10} height={10} alt="mail" />} text="sahanthedev@gmail.com" href="mailto:sahanthedev@gmail.com"  />
        <EmailOrPhone icon={<Image src="/img/Call.svg" width={10} height={10} alt="phone" />} text="+94 76 24 61 573" href="tel:+94762461573"  />
      </div>
      <Projects />
    </main>
  )
}
