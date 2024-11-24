'use client';
import React from "react";
import styles from './mobileMenu.module.css'

export interface MobileMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export interface MenuItem {
  href: string;
  title: string;
  className?: string;
}


export default function MobileMenu({menuItems, className}: MobileMenuProps): React.ReactNode {
  const [open, setOpen] = React.useState(false);

  const onMenuClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className={`${styles.menu} ${className} ${open ? styles.open : styles.closed}`}>
        <div className={styles.menuIcon}>
          {!open ? (
              <img src={'/svg/mobileMenuClosed.svg'} alt={`Menu`} onClick={onMenuClick}/>) :
            (<img src={`/svg/mobileMenuOpen.svg`} alt={`Menu`} onClick={onMenuClick}/>)
          }
        </div>
        <ul>
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
