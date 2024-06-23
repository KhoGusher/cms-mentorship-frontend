import React from "react";
import social from "@/config/social.json";
import Social from "@/components/Social";
import {
  IoCall,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import Link from "next/link";

const Header = () => {
  const { settings } = config;


  return (
    <header
    style={{ backgroundColor: 'rgb(64, 56, 240)' }}
      // className={` ${
      //   settings.sticky_header ? "sticky top-0" : ""
      // }`}
    >
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
    
            <div className="text-white font-bold text-lg ml-3">
              LIMITLESS EXCELLENCE
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
          {/* <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
          <Social source={social} className="social-icons" />
        </div> */}
            <a
              href="mailto:gusherlabs@gmail.com"
              className="text-white flex items-center hover:text-gray-300"
            >
              <IoMail className="text-xl mr-1" /> gusherlabs@gmail.com
            </a>
            <a
              href="#"
              className="text-white flex items-center hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoCall className="text-xl mr-1" /><p className="hidden md:flex"> +265 991 254 738</p>
            </a>
            <a
              href="https://www.facebook.com/gusherlabs"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/98896716"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTwitter className="text-2xl" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="text-2xl" />
            </a>
            {/* Add more social media links here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
