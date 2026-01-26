

import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { SunOutlined, MoonOutlined, DownOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => document.documentElement.classList.toggle("dark", darkMode), [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  /* ================= UPDATED MENU ITEMS ================= */
  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "The League" },
    {
      key: "/team",
      // WE ADD THE ICON MANUALLY TO THE LABEL HERE
      label: (
        <span className="flex items-center gap-1 group">
          Team 
          <DownOutlined className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
        </span>
      ),
      children: [
        { key: "/team/coaches", label: "Coaches" },
        { key: "/team/players", label: "Players" },
        { key: "/team/media", label: "Media" },
      ],
    },
    { key: "/program", label: "Programs" },
    { key: "/schedule", label: "Match Schedule" },
    { key: "/blog", label: "Blog" },
    { key: "/contact", label: "Contacts" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`z-50 ${scrolled ? "fixed top-0 left-0 w-full" : "relative"}`}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          /* Ensure the submenu dropdown looks clean */
          .ant-menu-sub {
            background: #1C1F42 !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5) !important;
          }
          /* Hide Ant Design's default internal arrow if it appears */
          .ant-menu-submenu-arrow { display: none !important; }
          
          .ant-menu-item-selected, .ant-menu-submenu-selected {
            color: #ef4444 !important;
          }
        `}} />

        <motion.div
          animate={{
            width: scrolled ? "100%" : "80%",
            borderRadius: scrolled ? "0px" : "6px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-auto h-16 flex items-center justify-between bg-[#1C1F42] px-4 shadow-2xl"
        >
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="flex items-center cursor-pointer select-none">
            <img src="/images/logo2.jpeg" alt="Logo" className="h-10 w-auto object-contain md:h-12 lg:h-14" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            <Menu
              key={isMobile ? "mobile-hidden" : "desktop-menu"}
              mode="horizontal"
              selectedKeys={[location.pathname]}
              onClick={(e) => navigate(e.key)}
              items={menuItems}
              theme="dark"
              className="
                bg-transparent!
                uppercase
                text-[13px]
                font-black
                tracking-tighter
                border-none!
                [&_.ant-menu-item]:px-4
                [&_.ant-menu-submenu-title]:px-4
              "
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-lg ml-4 text-white hover:text-red-600 transition-colors"
            >
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-3">
            <Button type="text" icon={darkMode ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} className="text-white!" />
            <Hamburger toggled={open} toggle={setOpen} size={17} duration={0.8} color="white" />
          </div>
        </motion.div>

        {/* MOBILE DRAWER */}
        <Drawer
          placement="left"
          open={open}
          onClose={() => setOpen(false)}
          mask={true}
          closable={false}
          width="70vw"
          styles={{ body: { padding: 0, backgroundColor: '#1C1F42' } }}
        >
          <div className="p-6 pt-20">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[location.pathname]}
              onClick={(e) => {
                if(!e.key.includes('team')) {
                  navigate(e.key);
                  setOpen(false);
                }
              }}
              // In mobile inline mode, expandIcon works!
              expandIcon={({ isOpen }) => (
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                  <DownOutlined />
                </motion.span>
              )}
              items={menuItems}
              className="bg-transparent! border-none! uppercase tracking-widest font-bold text-xs"
            />
          </div>
        </Drawer>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;