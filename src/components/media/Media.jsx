import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiX, FiChevronLeft, FiChevronRight, FiClock, FiPlay } from 'react-icons/fi';
import { usePlayerStore } from '../../store/usePlayerStore';

const Media = () => {
  const [sortType, setSortType] = useState('Latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const { baseMedia } = usePlayerStore();

  // Helper to check if a file is a video
  const isVideo = (path) => {
    return path?.match(/\.(mp4|webm|ogg|mov)$/i);
  };

  const sortedData = useMemo(() => {
    let data = [...baseMedia];
    if (sortType === 'A-Z') return data.sort((a, b) => a.title.localeCompare(b.title));
    if (sortType === 'Z-A') return data.sort((a, b) => b.title.localeCompare(a.title));
    if (sortType === 'Oldest') return data.sort((a, b) => new Date(a.date) - new Date(b.date));
    return data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Latest
  }, [sortType, baseMedia]);

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
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Media Center</h1>
              <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="text-gray-400">Home</span>
                <span className="text-[#e2e619]">/ Media</span>
              </div>
            </div>
          </section>

          {/* FILTER BAR SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <h2 className="text-3xl font-black text-[#1C1F42] uppercase tracking-tighter">Photos & Videos</h2>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-500 whitespace-nowrap">
                    Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} results
                </span>
                <select 
                  value={sortType}
                  onChange={(e) => { setSortType(e.target.value); setCurrentPage(1); }}
                  className="bg-white border border-slate-200 rounded px-4 py-2 text-sm font-bold outline-none cursor-pointer hover:border-[#e2e619] transition-colors"
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
                    <div 
                      className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-200 cursor-pointer" 
                      onClick={() => setSelectedMediaIndex(indexOfFirstItem + index)}
                    >
                      {isVideo(item.img) ? (
                        <div className="w-full h-full relative">
                           <video src={item.img} className="w-full h-full object-cover" muted />
                           <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white">
                              <FiPlay size={14} />
                           </div>
                        </div>
                      ) : (
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      )}
                      
                      <div className="absolute inset-0 bg-[#1C1F42]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center text-white border-2 border-white">
                          {isVideo(item.img) ? <FiPlay size={24} fill="currentColor" /> : <FiPlus size={24} />}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-black text-lg text-[#1C1F42] uppercase tracking-tight truncate">{item.title || "Gallery Item"}</h3>
                      <div className="flex items-center gap-2 text-slate-500 mt-1 text-sm font-bold">
                        <FiClock size={14} />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-20 pb-20 border-t border-slate-100 pt-10">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                <span>Items per page</span>
                <select 
                    value={itemsPerPage} 
                    onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                    className="border border-slate-200 rounded px-3 py-2 outline-none bg-white"
                >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={20}>20</option>
                </select>
              </div>

              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-[#97991b] text-white px-8 py-3 font-bold flex items-center gap-2 hover:bg-[#b8bb22] transition-colors disabled:opacity-50"
              >
                Next page <FiChevronRight />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600">{currentPage}</div>
                    <span className="text-sm font-bold text-slate-400">of {totalPages}</span>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:text-[#97991b] disabled:opacity-30"
                    >
                        <FiChevronLeft />
                    </button>
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:text-[#97991b] disabled:opacity-30"
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
        {selectedMediaIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedMediaIndex(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] transition-colors"><FiX size={32} /></button>
            
            <button onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => (prev - 1 + totalItems) % totalItems); }} className="absolute left-4 md:left-10 text-white/50 hover:text-[#e2e619] transition-colors"><FiChevronLeft size={48} /></button>
            <button onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => (prev + 1) % totalItems); }} className="absolute right-4 md:right-10 text-white/50 hover:text-[#e2e619] transition-colors"><FiChevronRight size={48} /></button>

            <motion.div 
                key={selectedMediaIndex} 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                className="relative max-w-5xl w-full flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()}
            >
              {isVideo(sortedData[selectedMediaIndex].img) ? (
                <video 
                    src={sortedData[selectedMediaIndex].img} 
                    controls 
                    autoPlay 
                    className="max-h-[75vh] w-auto shadow-2xl rounded-lg"
                />
              ) : (
                <img src={sortedData[selectedMediaIndex].img} alt="Selected" className="max-h-[75vh] object-contain shadow-2xl rounded-lg" />
              )}
              
              <div className="mt-8 text-center text-white px-4">
                <h4 className="text-xl md:text-3xl font-black uppercase tracking-tight">{sortedData[selectedMediaIndex].title || "Untitled"}</h4>
                <div className="flex items-center justify-center gap-4 mt-3">
                    <p className="text-[#e2e619] font-bold text-sm tracking-widest">{selectedMediaIndex + 1} / {totalItems}</p>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <p className="text-white/40 text-sm font-bold uppercase">{sortedData[selectedMediaIndex].time}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Media;