'use client';

import React, {useEffect} from 'react';
import styles from './navbar.module.css'
import Sidebar from "@/components/navigation/sidebar";

export default function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const handleSidebarClick = (): void => {
    setIsOpen(!isOpen);
  }

  useEffect((): void => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/contact",
      title: "Contact",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "https://www.linkedin.com/in/brennan-woodbury-549435bb",
      title: "LinkedIn",
    },
    {
      href: "https://www.github.com/BrennanWoodbury",
      title: "Github",
    }
  ]


  return (
    <div className={styles.navbar}>
      <a href={"/"}><img src={"/svg/terminal.svg"} alt="terminal"/></a>
      <div className={styles.spacer}></div>
      {windowWidth > 768 ?
        (<ul className={styles.navMenu}>
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/contact"}>Contact</a></li>
          <li><a href={"/projects"}>Projects</a></li>
          <li><a href={"https://www.linkedin.com/in/brennan-woodbury-549435bb"} target={"_blank"}>LinkedIn</a></li>
          <li><a href={"https://www.github.com/BrennanWoodbury"} target={"_blank"}>Github </a></li>
        </ul>)
        : (
          <div style={{position: 'relative', zIndex: 1}}>
            <img src={`/svg/sidebarRightExpand.svg`} alt={`Open Sidebar`} onClick={handleSidebarClick}
                 style={{scale: 2, marginRight: '1rem'}}/>
            <Sidebar
              menuItems={menuItems}
              isOpen={isOpen}
              onClickAction={handleSidebarClick}
            />
          </div>)
      }

    </div>
  )
}
