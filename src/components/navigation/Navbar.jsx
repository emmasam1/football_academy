import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // THEME (PERSISTENT)
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

  // MENU ITEMS (KEYS = ROUTES)
  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Club" },
    { key: "/team", label: "Team" },
    { key: "/blog", label: "Blog" },
    { key: "/gallery", label: "Gallery" },
    { key: "/contact", label: "Contacts" },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="text-white relative z-50"
      >
        {/* 80% CENTERED BAR */}
        <div className="w-[80%] mx-auto h-16 flex items-center justify-between bg-[#252625] px-3">
          {/* Logo */}
          <div
            className="font-bold tracking-wide cursor-pointer"
            onClick={() => navigate("/")}
          >
            ⚽ SOCCERCLUB
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              onClick={(e) => navigate(e.key)}
              items={menuItems}
              theme="dark"
              className="bg-transparent! uppercase tracking-wide"
            />

            {/* THEME TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-lg ml-4"
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
              className="text-white"
            />

            <Hamburger toggled={open} toggle={setOpen} size={20} />
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <Drawer
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
          className="dark:bg-black"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            onClick={(e) => {
              navigate(e.key);
              setOpen(false);
            }}
            items={menuItems}
          />
        </Drawer>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
