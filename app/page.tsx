"use client"
import { useState } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  const [ socialMediaList ] = useState([
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sahan-weerakoon-software-engineer", source: "/img/LinkedIn.png" },
    { name: "GitHub", link: "https://www.github.com/SahanNimeshWeerakoon", source: "/img/Github.png" },
    { name: "Medium", link: "https://medium.com/@hsn.weerakoon.m", source: "/img/Medium.png" },
  ]);
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <main>
      <NavBar toggleContactModal={() => {setModalStatus(status => !status)}} />
      <Banner />
    </main>
  )
}
