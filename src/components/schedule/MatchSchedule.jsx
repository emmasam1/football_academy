

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiChevronLeft, FiPlay, FiX } from 'react-icons/fi';

const MatchSchedule = () => {
  const [view, setView] = useState('list');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scheduleData = [
    { 
      id: 1, 
      date: "Dec 01, 2026", 
      teamA: "Wisdom Academy", 
      teamB: "Ado United", 
      time: "19:00", 
      league: "FC Cup", 
      season: "2026", 
      venue: "Sport Complex", 
      teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", 
      teamBLogo: "https://cdn-icons-png.flaticon.com/512/197/197560.png",
      youtubeId: "qujOZH8y3r8", 
      channelUrl: "https://www.youtube.com/@premierleague" 
    },
    { 
      id: 2, 
      date: "Dec 05, 2026", 
      teamA: "WACO", 
      teamB: "Green Horse", 
      time: "19:00", 
      league: "FC Cup", 
      season: "2026", 
      venue: "Abuja Stadium", 
      teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", 
      teamBLogo: "https://cdn-icons-png.flaticon.com/512/824/824748.png",
      youtubeId: "qujOZH8y3r8",
      channelUrl: "https://www.youtube.com/@FIFA"
    },
    { 
      id: 3, 
      date: "Dec 01, 2026", 
      teamA: "Young Milano", 
      teamB: "Amawonda", 
      time: "19:00", 
      league: "Youth League", 
      season: "2026", 
      venue: "Goal project", 
      teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", 
      teamBLogo: "https://cdn-icons-png.flaticon.com/512/197/197560.png",
      youtubeId: "qujOZH8y3r8", 
      channelUrl: "https://www.youtube.com/@premierleague" 
    },
    { 
      id: 4, 
      date: "Dec 05, 2026", 
      teamA: "Warriors FC", 
      teamB: "Supreme FC", 
      time: "19:00", 
      league: "Youth Cup", 
      season: "2026", 
      venue: "Turf Arena", 
      teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", 
      teamBLogo: "https://cdn-icons-png.flaticon.com/512/824/824748.png",
      youtubeId: "qujOZH8y3r8",
      channelUrl: "https://www.youtube.com/@FIFA"
    },
  ];

  const displayedData = useMemo(() => {
    return scheduleData.slice(0, entriesPerPage);
  }, [entriesPerPage, scheduleData]);

  const handleMatchClick = (id) => {
    const match = scheduleData.find(m => m.id === id);
    setSelectedMatch(match);
    setIsVideoPlaying(false);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16">
      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* HERO SECTION */}
            <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600')` }} />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Schedule</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Schedule</span>
                  <span className="text-red-600">/</span>
                </div>
              </div>
            </section>

            {/* TABLE SECTION */}
            <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
              <div className="mb-6 flex items-center gap-2 text-slate-500 font-bold text-sm">
                <span>Show</span>
                <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))} className="bg-white border border-slate-200 rounded px-2 py-1 outline-none cursor-pointer">
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
                <span>entries</span>
              </div>

              {/* Responsive Container: overflow-x-auto allows horizontal scrolling on mobile */}
              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden rounded-sm border border-slate-100">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-[#1C1F42] text-white uppercase text-[12px] font-black tracking-widest">
                        <th className="py-6 px-6 border-r border-white/10 whitespace-nowrap">Date</th>
                        <th className="py-6 px-6 border-r border-white/10 text-center whitespace-nowrap">Event</th>
                        <th className="py-6 px-6 border-r border-white/10 whitespace-nowrap">Time</th>
                        <th className="py-6 px-6 border-r border-white/10 whitespace-nowrap">League</th>
                        <th className="py-6 px-6 border-r border-white/10 whitespace-nowrap">Season</th>
                        <th className="py-6 px-6 border-r border-white/10 whitespace-nowrap">Venue</th>
                        <th className="py-6 px-6 whitespace-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {displayedData.map((match) => (
                        <tr key={match.id} className="border-b border-slate-100 hover:bg-slate-50 transition-all group">
                          <td className="py-5 px-6 text-slate-500 font-bold whitespace-nowrap">{match.date}</td>
                          <td className="py-5 px-6 text-center font-black text-slate-900 uppercase whitespace-nowrap">
                            {match.teamA} <span className="text-slate-400 mx-2 text-xs">VS</span> {match.teamB}
                          </td>
                          <td className="py-5 px-6 text-slate-600 font-bold whitespace-nowrap">{match.time}</td>
                          <td className="py-5 px-6 text-slate-500 font-bold whitespace-nowrap">{match.league}</td>
                          <td className="py-5 px-6 text-slate-500 font-bold whitespace-nowrap">{match.season}</td>
                          <td className="py-5 px-6 text-slate-500 font-bold whitespace-nowrap">{match.venue}</td>
                          <td className="py-5 px-6 whitespace-nowrap">
                            <button 
                              onClick={() => handleMatchClick(match.id)} 
                              className="bg-[#1C1F42]! text-white font-black px-5 py-3 flex items-center gap-2 rounded-none! transition-all uppercase text-[10px] tracking-widest hover:bg-red-600 whitespace-nowrap"
                            >
                              View Match Info <FiArrowUpRight />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400 italic md:hidden">Scroll table horizontally to view more details →</p>
            </section>
          </motion.div>
        ) : (
          <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            {/* DETAILS HERO */}
            <section className="relative h-[45vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-black/70 z-10" />
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600')` }} />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Matches Details</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Schedule</span> <span className="text-red-600">/</span> <span>Details</span>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pt-10">
                <button 
                    onClick={() => setView('list')} 
                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer text-slate-900 hover:text-blue-900 transition-colors group"
                >
                    <div className="bg-slate-100 p-2 rounded-full group-hover:bg-red-50 transition-colors">
                        <FiChevronLeft size={20} />
                    </div>
                    Back to Schedule
                </button>
            </div>

            {/* MATCH CONTENT */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                 <div>
                   <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">About Match Details</h2>
                   <p className="text-slate-500 leading-[1.8] text-lg mb-10">
                     Join us for the {selectedMatch.league} {selectedMatch.season} season highlights. Watch the tactical battle between {selectedMatch.teamA} and {selectedMatch.teamB} right here or head to our official channel for the full stream.
                   </p>
                   <a 
                    href={selectedMatch.channelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#1C1F42] text-white! px-12 py-5 font-black uppercase tracking-widest text-sm rounded hover:bg-blue-900 hover: text-white! shadow-xl transition-all items-center gap-3"
                  >
                    Stream Now <FiArrowUpRight size={20} />
                   </a>
                 </div>

                {/* VERSUS BOX / VIDEO PLAYER */}
                <div className="relative h-[250px] md:h-[300px] w-full max-w-2xl mx-auto lg:mx-0">
                    <div className="relative h-full bg-slate-900 rounded-sm overflow-hidden shadow-2xl border-b-4 border-blue-900">
                        <AnimatePresence mode="wait">
                            {!isVideoPlaying ? (
                                <motion.div 
                                    key="teams"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="flex items-center justify-between p-6 md:p-12 h-full"
                                >
                                    <div className="text-center flex-1">
                                        <img src={selectedMatch.teamALogo} className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain" alt={selectedMatch.teamA} />
                                        <h4 className="text-white font-black uppercase tracking-tighter text-sm md:text-xl">{selectedMatch.teamA}</h4>
                                    </div>
                                    <div className="px-2 md:px-4 text-center">
                                        <button 
                                            onClick={() => setIsVideoPlaying(true)}
                                            className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-600/40 hover:scale-110 transition-transform mb-2"
                                        >
                                            <FiPlay size={20} fill="currentColor" />
                                        </button>
                                        <span className="text-white/30 font-black uppercase text-[10px] tracking-widest">Watch</span>
                                    </div>
                                    <div className="text-center flex-1">
                                        <img src={selectedMatch.teamBLogo} className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain" alt={selectedMatch.teamB} />
                                        <h4 className="text-white font-black uppercase tracking-tighter text-sm md:text-xl">{selectedMatch.teamB}</h4>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="video"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="relative w-full h-full bg-black"
                                >
                                    <button 
                                        onClick={() => setIsVideoPlaying(false)}
                                        className="absolute top-2 right-2 z-50 bg-red-600 text-white p-1 rounded-full hover:bg-white hover:text-red-600 transition-colors"
                                    >
                                        <FiX size={20} />
                                    </button>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${selectedMatch.youtubeId}?autoplay=1&controls=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MatchSchedule;