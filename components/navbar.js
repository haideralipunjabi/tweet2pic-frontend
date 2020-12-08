import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import LogoSvg from "../public/logo-2.svg";
import DownloadModal from "./downloadmodel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "./iconButton";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className={"navbar"} role="navigation" aria-label="main navigation">
        <div className={"navbar-brand"}>
          <div className="navbar-item pl-3 pr-0">
            <LogoSvg height={28} width={0} style={{ width: "auto" }}></LogoSvg>
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
              <IconButton
                href="mailto:developer@hackesta.org"
                icon={["fas", "envelope"]}
              >
                Contact
              </IconButton>
            </div>
            <div className="navbar-item">
              <IconButton
                onClick={() => {
                  setModalOpened(true);
                }}
                icon={["fas", "arrow-circle-down"]}
              >
                Download
              </IconButton>
            </div>
            <div className="navbar-item">
              <Link href="/about">
                <IconButton
                  className={router.pathname === "/about" ? styles.active : ""}
                  icon={["fas", "info-circle"]}
                >
                  About
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <DownloadModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      ></DownloadModal>
    </>
  );
}
