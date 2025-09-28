"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import SocialMediaList from "./components/SocialMediaList";
import HeadBanner from "./components/HeadBanner";
import EmailOrPhone from "./components/miniComponents/EmailOrPhone";
import Image from "next/image";
import Projects from "./components/Projects";
import Modal from "./components/Modal";

export default function Home() {
  const [ socialMediaList ] = useState([
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sahan-weerakoon", source: "/img/Linkedin.png" },
    { name: "GitHub", link: "https://www.github.com/SahanNimeshWeerakoon", source: "/img/Github.png" },
    { name: "Medium", link: "https://medium.com/@hsn.weerakoon.m", source: "/img/Medium.png" },
  ]);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main>
      <NavBar setIsOpen={setIsOpen} />
      <SocialMediaList list={socialMediaList} />
      <HeadBanner />
      <div className="contact-icon">
        <EmailOrPhone icon={<Image src="/img/mail.svg" width={10} height={10} alt="mail" />} text="sahanthedev@gmail.com" href="mailto:sahanthedev@gmail.com"  />
        <EmailOrPhone icon={<Image src="/img/Call.svg" width={10} height={10} alt="phone" />} text="+94 76 24 61 573" href="tel:+94762461573"  />
      </div>
      <Projects />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>I’m a self-taught software engineer who took the long road by choice. After finishing my O/Ls I skipped the degree track, grabbed every free resource I could find online, and never stopped building.</p>
        <p>I started with WordPress, HTML, CSS, JavaScript, and PHP—designing, coding, and even doing QA on a full matrimonial site for Eq Solutions. From there I dove deeper: React, Node.js, Angular, Magento, Laravel, Vue, Next.js, and .NET, picking up server management, CI/CD pipelines, AWS services, and database design along the way.</p>
        <p>My career has moved through startups and established teams alike:</p>
        <ul>
          <li><b>Eq Solutions</b> – Designed and built their flagship WordPress site from Figma concept to launch.</li>
          <li><b>Smoking Dots</b> – Full-stack work across React, Node, and Magento, plus mentoring interns and managing AWS infrastructure.</li>
          <li><b>Epit Global</b> – Event-calendar and localization features for a German hotel client, including database architecture.</li>
          <li><b>Assette</b> – Front-end engineer focused on reusable Vue components and SOLID principles.</li>
          <li><b>VitalFew</b> – Senior front-end role with Next.js, Nest.js, GraphQL, and Neo4j social-graph mapping, plus an AWS SNS notification system.</li>
          <li><b>Austal</b> – Jumped into a .NET backend solo and delivered the entire project.</li>
        </ul>
        <p>I thrive on learning fast, solving problems end-to-end, and turning ideas into well-crafted, maintainable software. Whether it’s mentoring teammates, architecting a system, or polishing a UI, I bring curiosity, discipline, and a love for clean code to every project.</p>
      </Modal>
    </main>
  )
}
