import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import LogoSvg from "../public/logo-2.svg"
import DownloadModal from "./downloadmodel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const router = useRouter();
  
  return (
    <>
    <nav
      className={"navbar"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"navbar-brand"}>
          <div className="navbar-item pl-3 pr-0">
            <LogoSvg height={28} width={0} style={{width: "auto"}}></LogoSvg>
          </div>
        <a className={`"navbar-item" ${styles.siteName}`} href="/">
          <h3 className={"title"}>Tweet2Pic</h3>
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
      >
        <div className={"navbar-end"}>
        <div className="navbar-item">
            <a className="button" href="mailto:developer@hackesta.org">
            <span className="icon"><FontAwesomeIcon icon={["fas","envelope"]}/></span>
              <span>Contact</span>
            </a>
          </div>
        <div className="navbar-item">
            <button
              onClick={()=>{
                setModalOpened(true)
              }}
              className={`button`}
            >
              <span className="icon"><FontAwesomeIcon icon={["fas","arrow-circle-down"]}/></span>
              <span>Download</span>
            </button>
          </div>
          <div className="navbar-item">
          <Link href="/about">
            <a
              className={`button ${
                router.pathname === "/about" ? styles.active : ""
              }`}
            >
              <span className="icon"><FontAwesomeIcon icon={["fas","info-circle"]}/></span>
              <span>About</span>
            </a>
          </Link>
          </div>
        </div>
      </div>
    </nav>
    <DownloadModal modalOpened={modalOpened} setModalOpened={setModalOpened}></DownloadModal>
    </>
  );
}