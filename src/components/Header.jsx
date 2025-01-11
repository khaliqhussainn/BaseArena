import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { brainwave } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import { links } from "../config";
import { navigation } from "../constants";
import Button from "./Button";
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:bg-black/50" />
      
      <div className="absolute inset-x-0 bottom-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-75" />
      </div>

      <div className="relative flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center flex-1">
          {/* Logo with transition */}
          <a 
            className={`block w-[12rem] xl:mr-8 relative group overflow-hidden transition-all duration-300 ${
              showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            }`}
            href="#hero"
          >
            <img
              src={brainwave}
              width={100}
              height={10}
              alt="BaseArena"
              className="pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-opacity-95 backdrop-blur-md bg-n-8 lg:static lg:flex lg:bg-transparent transition-all duration-300`}
          >
            <div className={`relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row transition-all duration-300 ${
              showLogo ? 'lg:ml-8' : 'lg:ml-0'
            }`}>
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external && "noreferrer noopener"}
                  onClick={handleClick}
                  className={`relative font-code text-2xl uppercase text-white transition-all duration-300
                    group
                    ${item.onlyMobile && "lg:hidden"}
                    px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold
                    ${item.url === pathname.hash ? "z-2 lg:text-blue-400" : "lg:text-white"}
                    lg:leading-5 xl:px-12
                    ${showLogo ? '' : 'lg:first:pl-0'}`}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">
                    {item.title}
                  </span>
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0" />
                  </div>
                </a>
              ))}
            </div>

            <HambugerMenu />
          </nav>
        </div>

        <div className="flex items-center">
          <Button 
            className="hidden lg:flex hover:scale-105 transition-transform duration-300" 
            href={links.sourceCode} 
            external
          >
            Launch Now
          </Button>

          <Button
            onClick={toggleNavigation}
            className="ml-auto lg:hidden hover:scale-105 transition-transform duration-300"
            px="px-3"
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;