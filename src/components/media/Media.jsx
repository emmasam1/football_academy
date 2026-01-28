import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiX, FiChevronLeft, FiChevronRight, FiClock } from 'react-icons/fi';

const Media = () => {
  const [sortType, setSortType] = useState('Latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Expanded Mock Data (12 Items)
  const baseMedia = [
    { id: 1, title: "Youth Cup Final", time: "1 years Ago", date: "2025-01-01", img: "/images/inmatch_g.jpeg" },
    { id: 2, title: "Bravo Training Session", time: "1 years Ago", date: "2025-01-15", img: "/images/teamplay.jpeg" },
    { id: 6, title: "Foxtrot Night Match", time: "1 years Ago", date: "2025-01-12", img: "/images/media_n.jpeg" },
    { id: 7, title: "Golf Trophy Lift", time: "3 years Ago", date: "2022-12-10", img: "/images/winner.jpeg" },
    { id: 8, title: "Award presentation", time: "1 months Ago", date: "2026-01-10", img: "/images/award_press.jpeg" },
    { id: 9, title: "India Fan Zone", time: "1 years Ago", date: "2025-01-10", img: "/images/bg_bannerArea.jpg" },
    { id: 10, title: "Juliet Press Conf", time: "6 months Ago", date: "2025-07-10", img: "/images/press.jpeg" },
    { id: 11, title: "Kilo New Kit Reveal", time: "4 months Ago", date: "2025-09-10", img: "/images/teamplay2.jpeg" },
    { id: 12, title: "Lima Championship Win", time: "2 months Ago", date: "2025-12-20", img: "/images/under_12_winner.jpeg" },
    { id: 13, title: "Youth trophy Winner", time: "2 months Ago", date: "2025-12-19", img: "/images/trophy_lift.jpeg" },
    { id: 14, title: "Y.F.A team", time: "2 months Ago", date: "2025-12-15", img: "/images/YFA_team.jpeg" },
    { id: 15, title: "Trophy presentation", time: "2 months Ago", date: "2025-12-10", img: "/images/youtth_winner.jpeg" },
  ];

  // Sorting Logic
  const sortedData = useMemo(() => {
    let data = [...baseMedia];
    if (sortType === 'A-Z') return data.sort((a, b) => a.title.localeCompare(b.title));
    if (sortType === 'Z-A') return data.sort((a, b) => b.title.localeCompare(a.title));
    if (sortType === 'Oldest') return data.sort((a, b) => new Date(a.date) - new Date(b.date));
    return data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Latest
  }, [sortType]);

  // Pagination Logic
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16 py-10">
      <AnimatePresence mode="wait">
        <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          
          {/* HERO SECTION */}
          <section className="relative h-[30vh] md:h-[50vh] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
            <div className="relative z-20 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Media</h1>
              <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="text-gray-400">Home</span>
                <span className="text-[#e2e619]">/ Media</span>
              </div>
            </div>
          </section>

          {/* FILTER BAR SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <h2 className="text-3xl font-black text-[#1C1F42] uppercase tracking-tighter">Media Cover Photo</h2>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-500 whitespace-nowrap">
                    Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} results
                </span>
                <select 
                  value={sortType}
                  onChange={(e) => { setSortType(e.target.value); setCurrentPage(1); }}
                  className="bg-white border border-slate-200 rounded px-4 py-2 text-sm font-bold outline-none cursor-pointer hover:border-red-600 transition-colors"
                >
                  <option value="Latest">Sort by Latest</option>
                  <option value="Oldest">Sort by Oldest</option>
                  <option value="A-Z">Sort by A-Z</option>
                  <option value="Z-A">Sort by Z-A</option>
                </select>
              </div>
            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 min-h-[600px]">
              <AnimatePresence mode='popLayout'>
                {currentItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-200 cursor-pointer" onClick={() => setSelectedImageIndex(indexOfFirstItem + index)}>
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#1C1F42]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center text-white border-2 border-white">
                          <FiPlus size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-black text-lg text-[#1C1F42] uppercase tracking-tight">{item.title}</h3>
                      <div className="flex items-center gap-2 text-[#e2e619] mt-1 text-sm font-bold">
                        <FiClock size={14} />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* PAGINATION (Matching pg.png) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-20 pb-20 border-t border-slate-100 pt-10">
              
              {/* Items Per Page Select */}
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                <span>Users per page</span>
                <select 
                    value={itemsPerPage} 
                    onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                    className="border border-slate-200 rounded px-3 py-2 outline-none bg-white"
                >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                </select>
              </div>

              {/* Next Page Button */}
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-[#0A1D37] text-white px-8 py-3 font-bold flex items-center gap-2 hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:hover:bg-[#0A1D37]"
              >
                Next page <FiChevronRight />
              </button>

              {/* Page Numbers and Arrows */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="border border-slate-200 px-4 py-2 text-sm font-bold text-slate-400">{currentPage}</div>
                    <span className="text-sm font-bold text-slate-400">of {totalPages}</span>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:text-yellow-600 disabled:opacity-30"
                    >
                        <FiChevronLeft />
                    </button>
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:text-yellow-600 disabled:opacity-30"
                    >
                        <FiChevronRight />
                    </button>
                </div>
              </div>

            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-yellow-600 z-[110]"><FiX size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((prev) => (prev - 1 + totalItems) % totalItems); }} className="absolute left-10 text-white hover:text-yellow-600"><FiChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((prev) => (prev + 1) % totalItems); }} className="absolute right-10 text-white hover:text-reyellowd-600"><FiChevronRight size={40} /></button>

            <motion.div key={selectedImageIndex} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img src={sortedData[selectedImageIndex].img} alt="Selected" className="max-h-[80vh] object-contain shadow-2xl" />
              <div className="mt-6 text-center text-white">
                <h4 className="text-2xl font-black uppercase tracking-widest">{sortedData[selectedImageIndex].title}</h4>
                <p className="text-[#e2e619] font-bold mt-2">{selectedImageIndex + 1} / {totalItems}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Media;