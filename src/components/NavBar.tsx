"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { NavBarProps } from "@/types/NavBar";
import Image from "next/image";

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={styles.navbar}>

      {/* -------------- LOGO AREA ---------------- */}
      <Link href="/" className={styles.navbarLogo}>
        <Image src="/grainger_logo.png" alt="Grainger Logo" width={37} height={37}/>
        Home
      </Link>
      {/* --------------------------------------------------- */}

      <ul className={styles.navbarLinks}>
        {items.map((item) => (
          <li
            key={item.label}
            className={styles.navItem}
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => item.children && setOpenDropdown(null)}
          >
            {/* TOGGLE SWITCH */}
            {item.isToggle ? (
              <div className={styles.toggleWrapper}>
                <span className={styles.toggleText}>{item.label}</span>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={item.toggleValue}
                    onChange={(e) => item.onToggle?.(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

            ) : item.isButton ? (
              /* BUTTON */
              <button className={styles.navButton} onClick={item.onClick}>
                {item.label}
              </button>

            ) : item.path ? (
              /* LINK */
              <Link href={item.path}>{item.label}</Link>
            ) : (
              /* DROPDOWN LABEL */
              <span className={styles.dropdownLabel}>{item.label}</span>
            )}

            {/* DROPDOWN MENU */}
            {item.children && openDropdown === item.label && (
              <ul className={styles.dropdownMenu}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.path!}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
