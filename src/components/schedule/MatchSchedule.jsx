import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiArrowUpRight, FiChevronLeft } from 'react-icons/fi';

const MatchSchedule = () => {
  const [view, setView] = useState('list');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Expanded dataset to demonstrate "entries" functionality
  const scheduleData = [
    { id: 1, date: "Dec 01, 2026", teamA: "ITALY FC", teamB: "RAYAL FC", time: "19:00", league: "FC Cup", season: "2026", venue: "GST Stadium", teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", teamBLogo: "https://cdn-icons-png.flaticon.com/512/197/197560.png" },
    { id: 2, date: "Dec 05, 2026", teamA: "ITALY FC", teamB: "RAIDO FC", time: "19:00", league: "FC Cup", season: "2026", venue: "GST Stadium", teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", teamBLogo: "https://cdn-icons-png.flaticon.com/512/824/824748.png" },
    { id: 3, date: "Nov 05, 2026", teamA: "ITALY FC", teamB: "RAIDO FC", time: "19:00", league: "FC Cup", season: "2026", venue: "GST Stadium", teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197626.png", teamBLogo: "https://cdn-icons-png.flaticon.com/512/824/824748.png" },
    { id: 4, date: "Jan 10, 2027", teamA: "LONDON FC", teamB: "PARIS SG", time: "20:45", league: "UEFA", season: "2027", venue: "Wembley", teamALogo: "https://cdn-icons-png.flaticon.com/512/197/197374.png", teamBLogo: "https://cdn-icons-png.flaticon.com/512/197/197560.png" },
  ];

  // Logic to handle "Show X entries"
  const displayedData = useMemo(() => {
    return scheduleData.slice(0, entriesPerPage);
  }, [entriesPerPage]);

  const handleMatchClick = (id) => {
    const match = scheduleData.find(m => m.id === id);
    setSelectedMatch(match);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16">
      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HERO SECTION */}
            <section className="relative h-[40vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600')` }}
              />
              <div className="relative z-20 text-center">
                <h1 className="text-6xl font-black uppercase tracking-tighter">Schedule</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Home</span>
                  <span className="text-red-600">/</span>
                  <span>Schedule</span>
                </div>
              </div>
            </section>

            {/* SCHEDULE TABLE SECTION */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
              <div className="mb-6 flex items-center gap-2 text-slate-500 font-bold">
                <span>Show</span>
                <select 
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="bg-white border border-slate-200 rounded px-2 py-1 outline-none cursor-pointer"
                >
                    <option value={2}>2</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                </select>
                <span>entries</span>
              </div>

              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#1C1F42] text-white uppercase text-[13px] font-black tracking-widest">
                        <th className="py-6 px-8 border-r border-white/10">Date</th>
                        <th className="py-6 px-8 border-r border-white/10 text-center">Event</th>
                        <th className="py-6 px-8 border-r border-white/10">Time</th>
                        <th className="py-6 px-8 border-r border-white/10">League</th>
                        <th className="py-6 px-8 border-r border-white/10">Season</th>
                        <th className="py-6 px-8 border-r border-white/10">Venue</th>
                        <th className="py-6 px-8">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {displayedData.map((match) => (
                        <tr key={match.id} className="border-b border-slate-100 hover:bg-slate-50 transition-all group">
                          <td className="py-6 px-8 text-slate-500 font-bold">{match.date}</td>
                          <td className="py-6 px-8 text-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-black text-slate-900  transition-colors uppercase">{match.teamA}</span>
                                <span className="text-slate-400 font-black text-xs">VS</span>
                                <span className="font-black text-slate-900 transition-colors uppercase">{match.teamB}</span>
                            </div>
                          </td>
                          <td className="py-6 px-8 text-slate-600 font-bold">{match.time}</td>
                          <td className="py-6 px-8 text-slate-500 font-bold">{match.league}</td>
                          <td className="py-6 px-8 text-slate-500 font-bold">{match.season}</td>
                          <td className="py-6 px-8 text-slate-500 font-bold">{match.venue}</td>
                          <td className="py-6 px-8">
                            <button 
                              onClick={() => handleMatchClick(match.id)}
                              className="bg-[#1C1F42]! text-white font-black px-6 py-3 flex items-center rounded-none! gap-2 transition-all uppercase text-xs tracking-wider"
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
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {/* DETAILS HERO */}
            <section className="relative h-[45vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-black/70 z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600')` }}
              />
              
              {/* Back Button Restored Inside Hero */}
              <button 
                onClick={() => setView('list')}
                className="absolute top-10 left-10 z-30 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/80 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
              >
                <FiChevronLeft size={18} /> Back to Schedule
              </button>

              <div className="relative z-20 text-center">
                <h1 className="text-6xl font-black uppercase tracking-tighter">Matches Details</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Home</span>
                  <span className="text-red-600">/</span>
                  <span>Matches Details</span>
                </div>
              </div>
            </section>

            {/* MATCH CONTENT */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">About Match Details</h2>
                  <p className="text-slate-500 leading-[1.8] text-lg mb-10">
                    Experience the pinnacle of football. This upcoming clash between {selectedMatch.teamA} and {selectedMatch.teamB} 
                    is set to be a highlight of the {selectedMatch.season} {selectedMatch.league} season. Join thousands of fans at {selectedMatch.venue}.
                  </p>
                  <button className="bg-[#1C1F42] text-white px-12 py-5 font-black uppercase tracking-widest text-sm rounded shadow-xl shadow-red-200 hover:bg-slate-900 transition-all flex items-center gap-3">
                   Stream Now <FiArrowUpRight size={20} />
                  </button>
                </div>

                {/* Match Box Container */}
                <div className="relative">
                    <div className="relative bg-slate-900 p-12 rounded-sm overflow-hidden shadow-2xl flex items-center justify-between border-b-4 border-red-600">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        <div className="relative z-10 text-center flex-1">
                            <img src={selectedMatch.teamALogo} className="w-24 h-24 mx-auto mb-4 object-contain" alt="" />
                            <h4 className="text-white font-black uppercase tracking-tighter text-xl">{selectedMatch.teamA}</h4>
                        </div>

                        <div className="relative z-10 px-8 text-center">
                            <span className="text-4xl font-black text-white/20 tracking-tighter block mb-2">VS</span>
                            <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Live</div>
                        </div>

                        <div className="relative z-10 text-center flex-1">
                            <img src={selectedMatch.teamBLogo} className="w-24 h-24 mx-auto mb-4 object-contain" alt="" />
                            <h4 className="text-white font-black uppercase tracking-tighter text-xl">{selectedMatch.teamB}</h4>
                        </div>
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