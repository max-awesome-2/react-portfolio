import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils, my_email } from "../content_option";
import Themetoggle from "../components/themetoggle";

import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube
};

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <Link className="navbar-brand nav_ac" to="/">
            {logotext}
            </Link>
            <Link className="navbar-brand nav_ac header-email pastel-1" to="mailto:mgelinas101@rogers.com">
              {my_email}
            </Link>
             {Object.entries(socialprofils).map(([platform, url]) => {
              const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
              return (
              
                <a className="navbar-brand nav_ac" key={platform} href={url}>
                  <IconComponent />
                </a>
              
          );
        })}
        
        </div>

          <div className="d-flex align-items-center">
             <Link className="navbar-brand nav_ac" to="/projects">
            Projects
            </Link>

          <Themetoggle />
          <button className="menu__button  nav_ac pastel-2" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">

            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
