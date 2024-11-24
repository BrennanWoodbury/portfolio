'use client';

import React from 'react';
import styles from './sidebar.module.css'

interface SidebarProps {
  menuItems: MenuItems[];
  isOpen: boolean;
  onClickAction: () => void;
  className?: string;
}

export interface MenuItems {
  href: string;
  title: string;
  className?: string;
}

export default function Sidebar({menuItems, isOpen, onClickAction, className}: SidebarProps): React.ReactNode {


  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}></div>
      <div className={`${className} ${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.closeSidebar}>

          <img src={`/svg/sidebarRightClose.svg`} alt={`Close Sidebar`} onClick={onClickAction}
               className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}/>
        </div>
        <ul className={`${styles.sidebarMenu} ${!isOpen && styles.sidebarClosed}`}>
          {
            menuItems.map((item, index) => (
                <li className={item.className} key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              )
            )
          }
        </ul>
      </div>
    </>
  )
}
