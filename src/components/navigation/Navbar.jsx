// import React, { useState, useEffect } from "react";
// import { Menu, Drawer, Button } from "antd";
// import { SunOutlined, MoonOutlined } from "@ant-design/icons";
// import { motion, AnimatePresence } from "framer-motion";
// import { Spin as Hamburger } from "hamburger-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* ================= SCROLL DETECTION ================= */
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   /* ==================================================== */

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);

//       // CLOSE drawer when switching back to desktop
//       if (!mobile) {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ================= THEME ================= */
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") !== "light";
//   });

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => {
//       const next = !prev;
//       localStorage.setItem("theme", next ? "dark" : "light");
//       return next;
//     });
//   };
//   /* ========================================= */

//   const menuItems = [
//     { key: "/", label: "Home" },

//     {
//       key: "/about",
//       label: "The League",
//     },

//     {
//       key: "/team",
//       label: "Team",
//       children: [
//         { key: "/team/coaches", label: "Coaches" },
//         { key: "/team/players", label: "Players" },
//         { key: "/team/media", label: "Media" },
//       ],
//     },
//     { key: "/program", label: "Programs" },
//     { key: "/schedule", label: "Match Schedule" },
//     { key: "/blog", label: "Blog" },
//     { key: "/contact", label: "Contacts" },
//   ];

//   return (
//     <AnimatePresence>
//       <motion.header
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.35 }}
//         className={`z-50 ${
//           scrolled ? "fixed top-0 left-0 w-full" : "relative"
//         }`}
//       >
//         {/* ===== NAV CONTAINER ===== */}
//         <motion.div
//           animate={{
//             width: scrolled ? "100%" : "80%",
//             borderRadius: scrolled ? "0px" : "6px",
//           }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           className="
//             mx-auto h-16
//             flex items-center justify-between
//             bg-[#1C1F42]
//             px-4
//           "
//         >
//           {/* LOGO */}
//           {/* <div
//             className="font-bold tracking-wide cursor-pointer text-white"
//             onClick={() => navigate("/")}
//           >
//             <img src="/images/logo.png" alt="Joseninho Logo" />
//           </div> */}
//           <div
//         onClick={() => navigate("/")}
//         className="flex items-center cursor-pointer select-none"
//       >
//         <img
//           src="/images/logo2.jpeg"
//           alt="Joseninho Logo"
//           className="
//             h-10 
//             w-auto 
//             object-contain 
//             md:h-12 
//             lg:h-14
//           "
//         />
//       </div>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-4">
//             <Menu
//               key={isMobile ? "mobile-hidden" : "desktop-menu"}
//               mode="horizontal"
//               selectedKeys={[location.pathname]}
//               onClick={(e) => navigate(e.key)}
//               items={menuItems}
//               theme="dark"
//               className="
//             bg-transparent!
//             uppercase
//             tracking-wide
//             border-none!
//             [&_.ant-menu-item]:px-4
//             [&_.ant-menu-submenu-title]:px-4
//           "
//             />

//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleTheme}
//               className="text-lg ml-4 text-white"
//             >
//               {darkMode ? <SunOutlined /> : <MoonOutlined />}
//             </motion.button>
//           </div>

//           {/* MOBILE */}
//           <div className="md:hidden flex items-center gap-3">
//             <Button
//               type="text"
//               icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
//               onClick={toggleTheme}
//               className="text-white!"
//             />
//             <Hamburger
//               toggled={open}
//               toggle={setOpen}
//               size={17}
//               duration={0.8}
//               color="white"
//             />
//           </div>
//         </motion.div>

//         {/* MOBILE DRAWER */}
//         <Drawer
//           placement="left"
//           open={open}
//           onClose={() => setOpen(false)}
//           mask={false}
//           closable={false}
//           getContainer={false}
//           destroyOnClose
//           width={0}
//         >
//           <AnimatePresence>
//             {open && (
//               <motion.div
//                 key="mobile-nav"
//                 initial={{ x: "-100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "-100%" }}
//                 transition={{ duration: 0.35, ease: "easeOut" }}
//                 className="
//           fixed top-0 left-0 h-screen
//           w-[50vw]
//           bg-[#252625]
//           text-[#9DAAAA]!
//           z-40
//           p-6
//         "
//               >
//                 <Menu
//                   mode="inline"
//                   selectedKeys={[location.pathname]}
//                   onClick={(e) => {
//                     navigate(e.key);
//                     setOpen(false);
//                   }}
//                   items={menuItems}
//                   className="
//     bg-transparent!
//     border-none!
//     uppercase
//     tracking-wide
//     text-xs
//     [&_.ant-menu-item]:py-3
//     [&_.ant-menu-submenu-title]:py-3
//     [&_.ant-menu-item]:text-[#9DAAAA]
//     [&_.ant-menu-submenu-title]:text-[#9DAAAA]
//   "
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </Drawer>
//       </motion.header>
//     </AnimatePresence>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Menu, Drawer, Button } from "antd";
// import { SunOutlined, MoonOutlined, DownOutlined, EllipsisOutlined } from "@ant-design/icons";
// import { motion, AnimatePresence } from "framer-motion";
// import { Spin as Hamburger } from "hamburger-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* ================= HELPERS ================= */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile) setOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ================= THEME FIX ================= */
//   const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");
  
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => {
//       const next = !prev;
//       localStorage.setItem("theme", next ? "dark" : "light");
//       return next;
//     });
//   };

//   /* ================= DUAL MENU CONFIGURATION ================= */
//   const desktopMenuItems = [
//     { key: "/", label: "Home" },
//     { key: "/about", label: "The League" },
//     {
//       key: "team-parent",
//       label: (
//         <span className="flex items-center gap-1 group">
//           Team 
//           <DownOutlined className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
//         </span>
//       ),
//       children: [
//         { key: "/team/coaches", label: "Coaches" },
//         { key: "/team/players", label: "Players" },
//         { key: "/team/media", label: "Media" },
//       ],
//     },
//     { key: "/program", label: "Programs" },
//     { key: "/schedule", label: "Match Schedule" },
//     {
//       key: "more-parent",
//       label: (
//         <span className="flex items-center gap-1 group">
//           More <EllipsisOutlined className="text-lg" />
//         </span>
//       ),
//       children: [
//         { key: "/blog", label: "Blog" },
//         { key: "/contact", label: "Contacts" },
//       ],
//     },
//   ];

//   const mobileMenuItems = desktopMenuItems.map(item => {
//     if (item.key === "team-parent") return { ...item, label: "Team" };
//     if (item.key === "more-parent") return null; 
//     return item;
//   }).filter(Boolean);

//   mobileMenuItems.push(
//     { key: "/blog", label: "Blog" },
//     { key: "/contact", label: "Contacts" }
//   );

//   return (
//     <AnimatePresence>
//       <motion.header
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.35 }}
//         className={`z-50 transition-all duration-300 ${scrolled ? "fixed top-0 left-0 w-full" : "relative"}`}
//       >
//         <style dangerouslySetInnerHTML={{ __html: `
//           .ant-menu-sub {
//             background: #1C1F42 !important;
//             border: 1px solid rgba(255,255,255,0.1) !important;
//           }
//           .ant-menu-horizontal .ant-menu-submenu-arrow { display: none !important; }
//           .ant-menu-item-selected, .ant-menu-submenu-selected {
//             color: #ef4444 !important;
//           }
//           .ant-menu-submenu-title {
//             display: flex !important;
//             align-items: center !important;
//           }
//           /* Custom: Reduce padding between menu items to fit more on the left */
//           .ant-menu-horizontal > .ant-menu-item, 
//           .ant-menu-horizontal > .ant-menu-submenu {
//             padding-inline: 12px !important;
//           }
//         `}} />

//         <motion.div
//           animate={{
//             width: scrolled ? "100%" : "80%", // Increased slightly to provide more left-room
//             borderRadius: scrolled ? "0px" : "6px",
//           }}
//           className="mx-auto h-16 flex items-center justify-between bg-[#1C1F42] px-6 shadow-2xl"
//         >
//           {/* LOGO */}
//           <div onClick={() => navigate("/")} className="flex-shrink-0 flex items-center cursor-pointer">
//             <img src="/images/logo2.jpeg" alt="Logo" className="h-10 w-auto object-contain md:h-12" />
//           </div>

//           {/* DESKTOP MENU - justify-center pulls it away from the right side */}
//           <div className="hidden md:flex flex-1 items-center justify-center gap-0">
//             <Menu
//               mode="horizontal"
//               overflowedIndicator={null}
//               selectedKeys={[location.pathname]}
//               onClick={(e) => navigate(e.key)}
//               items={desktopMenuItems}
//               theme="dark"
//               className="bg-transparent! uppercase text-[12px] font-black border-none! flex-1 justify-center min-w-0"
//             />
//           </div>

//           {/* THEME BUTTON - Kept on the right */}
//           <div className="hidden md:flex items-center pl-4">
//             <motion.button 
//               whileTap={{ scale: 0.9 }} 
//               onClick={toggleTheme} 
//               className="text-lg text-white flex-shrink-0 hover:text-red-500 transition-colors"
//             >
//               {darkMode ? <SunOutlined /> : <MoonOutlined />}
//             </motion.button>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="md:hidden flex items-center gap-3">
//             <Button type="text" icon={darkMode ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} className="text-white!" />
//             <Hamburger toggled={open} toggle={setOpen} size={17} color="white" />
//           </div>
//         </motion.div>

//         {/* MOBILE DRAWER */}
//         <Drawer
//           placement="left"
//           open={open}
//           onClose={() => setOpen(false)}
//           mask={true}
//           closable={false}
//           width="75vw"
//           styles={{ body: { padding: "80px 0 0 0", backgroundColor: '#1C1F42' } }}
//         >
//           <Menu
//             mode="inline"
//             theme="dark"
//             selectedKeys={[location.pathname]}
//             onClick={(e) => {
//               navigate(e.key);
//               setOpen(false);
//             }}
//             expandIcon={({ isOpen }) => (
//               <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="flex items-center">
//                 <DownOutlined className="text-[10px]" />
//               </motion.span>
//             )}
//             items={mobileMenuItems}
//             className="bg-transparent! border-none! uppercase font-bold text-sm"
//           />
//         </Drawer>
//       </motion.header>
//     </AnimatePresence>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { SunOutlined, MoonOutlined, DownOutlined, EllipsisOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= HELPERS ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");
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

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "The League", path: "/about" },
    { 
      label: "Team", 
      path: "/team", 
      children: [
        { label: "Coaches", path: "/team/coaches" },
        { label: "Players", path: "/team/players" },
        { label: "Media", path: "/team/media" },
      ] 
    },
    { label: "Programs", path: "/program" },
    { label: "Match Schedule", path: "/schedule" },
    { 
      label: "More", 
      isMore: true,
      children: [
        { label: "Blog", path: "/blog" },
        { label: "Contacts", path: "/contact" },
      ] 
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        // Removed pt-4 here to ensure it always touches the top
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none"
      >
        <motion.nav
          animate={{
            width: scrolled ? "100%" : "80%",
            borderRadius: scrolled ? "0px" : "0px 0px 12px 12px", // Only round bottom corners
            height: scrolled ? "75px" : "68px",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-[#1C1F42] shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between px-6 md:px-10 border-b border-white/10 overflow-visible pointer-events-auto"
        >
          {/* LOGO */}
          <div 
            onClick={() => navigate("/")} 
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <img src="/images/logo2.jpeg" alt="Logo" className="h-10 w-auto object-contain md:h-12" />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4 cursor-pointer">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !item.children && navigate(item.path)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold uppercase tracking-wider cursor-pointer transition-colors hover:text-red-500 ${
                    location.pathname === item.path ? "text-red-500" : "text-white/90"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <DownOutlined className={`text-[10px] transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                  {item.isMore && <EllipsisOutlined className="text-lg" />}
                </button>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-0 w-48 bg-[#1C1F42] border border-white/10 rounded-b-lg shadow-2xl py-2 backdrop-blur-xl cursor-pointer"
                    >
                      {item.children.map((child) => (
                        <div
                          key={child.path}
                          onClick={() => {
                            navigate(child.path);
                            setActiveDropdown(null);
                          }}
                          className="px-4 py-2.5 text-[12px] text-white/80 uppercase font-bold hover:bg-red-500 hover:text-white cursor-pointer transition-all"
                        >
                          {child.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button 
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-white/5 text-white transition-colors"
            >
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-white">
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color="white" />
          </div>
        </motion.nav>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#1C1F42] pt-24 px-8 flex flex-col gap-6 overflow-y-auto"
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <div 
                  className="text-2xl font-black uppercase text-white/90"
                  onClick={() => {
                    if(!item.children) {
                      navigate(item.path);
                      setIsOpen(false);
                    } else {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }
                  }}
                >
                  <div className="flex justify-between items-center">
                    {item.label}
                    {item.children && <DownOutlined className={`text-sm transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                  </div>
                </div>
                
                {item.children && activeDropdown === item.label && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pl-4 mt-4 flex flex-col gap-4 border-l-2 border-red-500"
                  >
                    {item.children.map(child => (
                      <span 
                        key={child.path}
                        className="text-lg font-bold text-white/60 uppercase"
                        onClick={() => {
                          navigate(child.path);
                          setIsOpen(false);
                        }}
                      >
                        {child.label}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;