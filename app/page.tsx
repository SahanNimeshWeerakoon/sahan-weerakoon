"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import SocialMediaList from "./components/SocialMediaList";
import HeadBanner from "./components/HeadBanner";

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
    </main>
  )
}
