import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiClock, FiMessageSquare, FiUser, FiChevronLeft, FiChevronRight, FiArrowRight, FiShare2 } from 'react-icons/fi';
import { usePlayerStore } from '../../store/usePlayerStore';

const Blog = () => {
  const { news, selectedNews, setSelectedNews, getPaginatedNews, newsPage, setNewsPage } = usePlayerStore();
  const displayNews = getPaginatedNews();

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16">
      <AnimatePresence mode="wait">
        {!selectedNews ? (
          /* NEWS GRID VIEW */
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">OUR NEWS</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Home</span>
                  <span className="text-red-600">/ News</span>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="flex justify-between items-center mb-10">
                 <h2 className="text-3xl font-black text-[#1C1F42] uppercase">Our News</h2>
                 <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-400 font-bold">Showing 1-4 of 13 results</span>
                    <select className="bg-white border border-slate-200 text-sm p-2 outline-none font-bold">
                        <option>Sort by Latest</option>
                    </select>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayNews.map((item) => (
                  <motion.div key={item.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                    <div className="relative overflow-hidden aspect-video">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-[#1C1F42] text-white p-2 text-center leading-tight min-w-[50px]">
                         <span className="block text-xl font-black">{item.date.split(' ')[0]}</span>
                         <span className="block text-[10px] uppercase font-bold">{item.date.split(' ')[1]}</span>
                      </div>
                      <button onClick={() => setSelectedNews(item)} className="absolute top-4 right-4 bg-[#1C1F42] cursor-pointer text-white p-2 text-xs font-black flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <FiArrowRight />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-[11px] font-bold text-blue-900 uppercase mb-3">
                        <span className="flex items-center gap-1"><FiUser className="text-slate-400"/> {item.author}</span>
                        <span className="flex items-center gap-1"><FiMessageSquare className="text-slate-400"/> {item.commentsCount}</span>
                        <span className="flex items-center gap-1"><FiClock className="text-slate-400"/> {item.timeAgo}</span>
                      </div>
                      <h3 className="text-xl font-black text-[#1C1F42] mb-3 leading-tight group-hover:text-blue-900 transition-colors cursor-pointer" onClick={() => setSelectedNews(item)}>
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.excerpt}</p>
                      <button onClick={() => setSelectedNews(item)} className="flex items-center gap-2 bg-[#1C1F42] cursor-pointer text-white px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-[#1C1F42] transition-colors">
                        Read more <FiArrowRight />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FIGMA STYLE PAGINATION */}
              <div className="mt-20 border-t border-slate-200 pt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-500">Users per page</span>
                    <select className="border border-slate-200 p-2 text-sm outline-none">
                        <option>23</option>
                    </select>
                </div>
                <button className="bg-[#0A1D37] text-white px-8 py-3 text-sm font-black uppercase flex items-center gap-2">
                    Next page <FiChevronRight />
                </button>
                <div className="flex items-center gap-2">
                    <div className="px-4 py-2 border border-slate-200 font-bold">23</div>
                    <span className="text-sm font-bold text-slate-400 mx-2">of 1,761</span>
                    <button className="p-2 border border-slate-200 hover:bg-slate-50"><FiChevronLeft /></button>
                    <button className="p-2 border border-slate-200 hover:bg-slate-50"><FiChevronRight /></button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* NEWS DETAIL VIEW */
          <motion.div key="detail" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <section className="relative h-[30vh] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">NEWS DETAILS</h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Home</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-red-600">News Details</span>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-8">
                <button onClick={() => setSelectedNews(null)} className="flex items-center gap-2 font-black uppercase text-xs text-[#1C1F42] cursor-pointer hover:text-blue-900 mb-8">
                    <FiChevronLeft /> Back to News
                </button>
                <img src={selectedNews.img} className="w-full aspect-video object-cover mb-6 rounded-sm" />
                
                <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-400 uppercase border-b border-slate-100 pb-6 mb-6">
                    <span className="flex items-center gap-2"><FiUser /> By {selectedNews.author}</span>
                    <span className="flex items-center gap-2"><FiClock /> {selectedNews.fullDate}</span>
                    <span className="flex items-center gap-2"><FiMessageSquare /> 2 Comments</span>
                    <button className="ml-auto flex items-center gap-2 hover:text-red-600"><FiShare2 /> Share</button>
                </div>

                <h2 className="text-4xl font-black text-[#1C1F42] uppercase mb-8 leading-tight">{selectedNews.title}</h2>
                <div className="text-slate-500 leading-loose text-lg space-y-6">
                    <p>{selectedNews.content}</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                </div>

                {/* Comments Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-black text-[#1C1F42] uppercase mb-10">Comments</h3>
                    <div className="space-y-8">
                        {[1, 2].map((c) => (
                            <div key={c} className="flex gap-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                                    <img src={`https://i.pravatar.cc/150?u=${c}`} alt="user" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h4 className="font-black text-[#1C1F42] uppercase">Jone Due</h4>
                                        <span className="text-xs font-bold text-blue-900">Oct 12, 2021</span>
                                    </div>
                                    <p className="text-slate-500 text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-10 shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-black text-[#1C1F42] uppercase mb-8">Leave a Comment</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Full Name" className="w-full bg-[#f8fafc] border border-slate-200 p-4 outline-none focus:border-blue-900" />
                            <input type="email" placeholder="Email" className="w-full bg-[#f8fafc] border border-slate-200 p-4 outline-none focus:border-blue-900" />
                        </div>
                        <textarea rows="5" placeholder="Message" className="w-full bg-[#f8fafc] border border-slate-200 p-4 outline-none focus:border-blue-900 mb-6"></textarea>
                        <button className="bg-[#1C1F42] text-white px-10 py-4 font-black uppercase text-sm hover:bg-[#1C1F42] transition-colors">Post Comment</button>
                    </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 shadow-sm border border-slate-100">
                    <h4 className="text-xl font-black text-[#1C1F42] uppercase mb-6 border-l-4 border-red-600 pl-4">Categories</h4>
                    <ul className="space-y-4 font-bold text-sm text-slate-500">
                        {["Tincidunt Condimentum", "Porttitor Velit", "Popular Belief", "Nisl Porttitor", "Adipiscing Elit"].map(cat => (
                            <li key={cat} className="flex items-center gap-2 hover:text-red-600 cursor-pointer transition-colors">
                                <FiArrowRight className="text-xs" /> {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-8 shadow-sm border border-slate-100">
                    <h4 className="text-xl font-black text-[#1C1F42] uppercase mb-8 border-l-4 border-red-600 pl-4">Recent Post</h4>
                    <div className="space-y-6">
                        {news.map(post => (
                            <div key={post.id} className="flex gap-4 group cursor-pointer" onClick={() => setSelectedNews(post)}>
                                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <h5 className="font-black text-[#1C1F42] text-sm group-hover:text-red-600 transition-colors uppercase leading-snug">{post.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;