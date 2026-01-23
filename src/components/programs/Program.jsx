import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { FaFutbol, FaRunning, FaBullseye, FaUserFriends  } from 'react-icons/fa';
import { GiWhistle, GiAwareness  } from "react-icons/gi";

const Program = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const programs = [
    { title: "Technical Skills", icon: <FaFutbol />, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" },
    { title: "Speed Training", icon: <FaRunning />, img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800" },
    { title: "Tactical Awareness", icon: <GiAwareness />, img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600" },
    { title: "Physical Conditioning", icon: <FaBullseye />, img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800" },
    { title: "Mental Strength", icon: <FaBullseye />, img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800" },
    { title: "Team Play", icon: <FaUserFriends />, img: "/images/teamplay.jpeg" },
  ];

  return (
    <div className="bg-[#FEFEFE] font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white text-center px-6">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600')` }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">Programs</h1>
          <p className="text-lg text-gray-200 font-light">Football training programs focused on performance and progression</p>
        </motion.div>
      </section>

      {/* FEATURED PROGRAM HEADER */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-blue-600 font-bold tracking-widest text-xs border-l-4 border-blue-600 pl-4 uppercase">Featured Program</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-[1.1]">
              Our Work Turning Bold Ideas Into Market Leaders.
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:pt-14">
            <p className="text-gray-500 text-base mb-6 leading-relaxed">
              Finibus sagittis aliquam tellus odio dis dapibus. Dignissim viverra rutrum curae pretium tristique vestibulum. 
              Nunc curae tortor accumsan magnis non blandit eleifend.
            </p>
            <button className="bg-[#2141a5] text-white px-8 py-3 font-bold text-sm tracking-widest transition-all">DISCOVER MORE</button>
          </motion.div>
        </div>

        {/* PROGRAM GRID */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white shadow-xl overflow-hidden group relative flex flex-col border border-gray-50"
            >
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{prog.title}</h3>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed">Habitasse sociosqu senectus platea sem dictum pretium nullam</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#252625] group-hover:bg-[#252625] group-hover:text-white transition-all duration-300">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 w-full overflow-hidden mt-auto">
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-white flex items-center justify-center shadow-lg text-red-600 text-xl z-20 border-t border-r border-gray-100">
                  {prog.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MENTORS SECTION - FULL WIDTH FLUSH RIGHT */}
      <section 
        className="relative min-h-[550px] flex items-end justify-end bg-cover bg-center"
        style={{ backgroundImage: `url("../../../../public/images/bg_bannerArea.jpg"` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-gradient-to-br from-[#1e3a8a] to-[#991b1b] p-10 lg:p-20 max-w-2xl text-white shadow-2xl"
        >
          <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Passionate football mentors guiding every training experience
          </h2>
          <p className="text-sm lg:text-lg opacity-90 leading-relaxed mb-10">
            Vulpuate integer proin praesent ullamcorper molestie luctus nisi tellus enim. Quam vivamus ac luctus diam duis sapien cubilia nunc conubia nibh at.
          </p>
          <button className="w-fit bg-[#2141a5] px-10 py-4 font-bold uppercase tracking-widest text-xs border border-white/20 hover:bg-white hover:text-blue-900 transition-all">
            Discover More
          </button>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col h-full">
            <span className="text-blue-600 font-bold text-xs border-l-4 border-blue-600 pl-4 uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">Driven By Quality, Focused On Your Growth</h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed">Magis maecenas dui est ultricies conubia tincidunt metus nec lacus suscipit erat lectus habitant aliquam a vestibulum posuere.</p>
            
            <div className="flex flex-col md:flex-row gap-0 items-stretch flex-grow">
              <div className="flex-grow space-y-3 pr-4">
                {['Licensed Professional Coaches', 'Modern Training Methods', 'Player Focused Development', 'One on One Mentorship'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100">
                    <FiCheckCircle className="text-blue-700 text-lg flex-shrink-0" />
                    <span className="font-bold text-slate-800 text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-48 bg-gradient-to-b from-[#2e1065] to-[#1e1b4b] text-white p-6 flex flex-col items-center justify-center text-center shadow-xl">
                  <div className="w-12 h-12 bg-[#dc2626] flex items-center justify-center mb-4 shadow-lg">
                    <FaFutbol size={24} className="text-white" />
                  </div>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-2">Joseniho</h4>
                  <p className="text-[10px] font-bold opacity-70 leading-relaxed uppercase tracking-tighter">Registered as an FA Affiliated Club</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-full min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600" 
              alt="Football Training" 
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Program;