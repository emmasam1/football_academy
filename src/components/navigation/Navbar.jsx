import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= SCROLL DETECTION ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  /* ==================================================== */

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // CLOSE drawer when switching back to desktop
      if (!mobile) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= THEME ================= */
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  /* ========================================= */

  const menuItems = [
    { key: "/", label: "Home" },

    {
      key: "/about",
      label: "About Club",
    },

    {
      key: "/team",
      label: "Team",
      children: [
        { key: "/team/players", label: "Players" },
        { key: "/team/coaches", label: "Coaches" },
      ],
    },
    // {
    //   key: "/program",
    //   label: "Programs",
    //   children: [
    //     { key: "/program/program", label: "Programs" },
    //     { key: "/program/training", label: "Tranining" },
    //   ],
    // },
     { key: "/program", label: "Programs" },
      { key: "/schedule", label: "Match Schedule" },
    { key: "/blog", label: "Blog" },
    { key: "/gallery", label: "Gallery" },
    { key: "/contact", label: "Contacts" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`z-50 ${
          scrolled ? "fixed top-0 left-0 w-full" : "relative"
        }`}
      >
        {/* ===== NAV CONTAINER ===== */}
        <motion.div
          animate={{
            width: scrolled ? "100%" : "80%",
            borderRadius: scrolled ? "0px" : "6px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            mx-auto h-16
            flex items-center justify-between
            bg-[#1C1F42]
            px-4
          "
        >
          {/* LOGO */}
          {/* <div
            className="font-bold tracking-wide cursor-pointer text-white"
            onClick={() => navigate("/")}
          >
            <img src="/images/logo.png" alt="Joseninho Logo" />
          </div> */}
          <div
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer select-none"
      >
        <img
          src="/images/logo2.jpeg"
          alt="Joseninho Logo"
          className="
            h-10 
            w-auto 
            object-contain 
            md:h-12 
            lg:h-14
          "
        />
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
            tracking-wide
            border-none!
            [&_.ant-menu-item]:px-4
            [&_.ant-menu-submenu-title]:px-4
          "
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-lg ml-4 text-white"
            >
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </motion.button>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              type="text"
              icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              className="text-white!"
            />
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={17}
              duration={0.8}
            />
          </div>
        </motion.div>

        {/* MOBILE DRAWER */}
        <Drawer
          placement="left"
          open={open}
          onClose={() => setOpen(false)}
          mask={false}
          closable={false}
          getContainer={false}
          destroyOnClose
          width={0}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-nav"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
          fixed top-0 left-0 h-screen
          w-[50vw]
          bg-[#252625]
          text-[#9DAAAA]!
          z-40
          p-6
        "
              >
                <Menu
                  mode="inline"
                  selectedKeys={[location.pathname]}
                  onClick={(e) => {
                    navigate(e.key);
                    setOpen(false);
                  }}
                  items={menuItems}
                  className="
    bg-transparent!
    border-none!
    uppercase
    tracking-wide
    text-xs
    [&_.ant-menu-item]:py-3
    [&_.ant-menu-submenu-title]:py-3
    [&_.ant-menu-item]:text-[#9DAAAA]
    [&_.ant-menu-submenu-title]:text-[#9DAAAA]
  "
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Drawer>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
