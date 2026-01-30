
import { create } from 'zustand';
import { FaFutbol, FaRunning, FaBullseye, FaUserFriends } from 'react-icons/fa';
import { GiAwareness } from "react-icons/gi";

const MOCK_API_DATA = [
  { id: 1, name: "Harry Deo", team: "First Team", number: "22", role: "Goalkeeper", nationality: "American", dob: "25/02/1988", height: "190cm", weight: "90kg", img: "/images/p1.jpeg", stats: { attack: 10, defence: 95, kick: 88 } },
  { id: 2, name: "Noah Smith", team: "Under 21s", number: "34", role: "Goalkeeper", nationality: "British", dob: "12/05/2003", height: "185cm", weight: "80kg", img: "/images/forth.jpeg", stats: { attack: 5, defence: 82, kick: 75 } },
  { id: 3, name: "Oliver Smith", team: "First Team", number: "04", role: "Defender", nationality: "Spanish", dob: "10/10/1995", height: "188cm", weight: "85kg", img: "/images/p1.jpeg", stats: { attack: 45, defence: 90, kick: 60 } },
  { id: 4, name: "Jacob Smith", team: "First Team", number: "10", role: "Defender", nationality: "French", dob: "22/01/1994", height: "180cm", weight: "78kg", img: "/images/forth.jpeg", stats: { attack: 55, defence: 85, kick: 70 } },
  { id: 5, name: "Jack Due", team: "First Team", number: "28", role: "Midfielder", nationality: "German", dob: "15/03/1998", height: "175cm", weight: "72kg", img: "/images/p1.jpeg", stats: { attack: 85, defence: 70, kick: 92 } },
  { id: 6, name: "Liam Due", team: "Under 21s", number: "09", role: "Forward", nationality: "Italian", dob: "05/09/2004", height: "182cm", weight: "75kg", img: "/images/p1.jpeg", stats: { attack: 98, defence: 30, kick: 95 } },
  { id: 7, name: "Aaron Ramsey", team: "First Team", number: "16", role: "Midfielder", nationality: "Welsh", dob: "26/12/1990", height: "178cm", weight: "76kg", img: "/images/p1.jpeg", stats: { attack: 75, defence: 60, kick: 80 } },
  { id: 8, name: "Mason Mount", team: "First Team", number: "19", role: "Midfielder", nationality: "British", dob: "10/01/1999", height: "180cm", weight: "74kg", img:"/images/forth.jpeg" , stats : { attack : 82 , defence : 55 , kick : 85 } },
  { id: 9, name: "Virgil Van", team: "First Team", number: "04", role: "Defender", nationality: "Dutch", dob: "08/07/1991", height: "193cm", weight: "92kg", img:"/images/p1.jpeg" , stats : { attack : 30 , defence : 98 , kick : 70 } },
  { id: 11, name: "Luka Modric", team: "First Team", number: "10", role: "Midfielder", nationality: "Croatian", dob: "09/09/1985", height: "172cm", weight: "66kg", img: "/images/forth.jpeg", stats: { attack: 88, defence: 75, kick: 95 } },
  { id: 12, name: "Erling H", team: "First Team", number: "09", role: "Forward", nationality: "Norwegian", dob: "21/07/2000", height: "194cm", weight: "88kg", img: "/images/egles_mvp.jpeg", stats: { attack: 97, defence: 15, kick: 85 } },
];

const MOCK_PROGRAMS = [
  { 
    title: "Technical Skills", 
    description: "Ball control, passing accuracy, dribbling, and finishing fundamentals.",
    icon: 'FaFutbol', // Store as string to avoid component issues in state
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" 
  },
  { 
    title: "Speed Training", 
    description: "Improving acceleration, agility, and quick movement on and off the ball.",
    icon: 'FaRunning', 
    img: "images/speed.jpg" 
  },
  { 
    title: "Tactical Awareness", 
    description: "Understanding positioning, decision-making, and game intelligence.",
    icon: 'GiAwareness', 
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600" 
  },
  { 
    title: "Physical Conditioning", 
    description: "Building strength, endurance, balance, and overall fitness safely.",
    icon: 'FaBullseye', 
    img: "images/training.jpg" 
  },
  { 
    title: "Mental Strength", 
    description: "Developing confidence, focus, discipline, and resilience under pressure.",
    icon: 'FaBullseye', 
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800" 
  },
  { 
    title: "Team Play", 
    description: "Encouraging communication, cooperation, leadership, and sportsmanship.",
    icon: 'FaUserFriends', 
    img: "/images/teamplay.jpeg" 
  },
];

const MOCK_NEWS = [
  { 
    id: 1, 
    title: "France FC Open To Serie A Return", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Transfer",
    img: "images/egles_mvp.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia..."
  },
  { 
    id: 2, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
  },
  { 
    id: 3, 
    title: "Brazil Win 3-0 against Argentina", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "International",
    img: "images/trophy_lift.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "A masterclass performance led by the veteran forwards secured a comfortable victory..."
  },
    { 
    id: 4, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
  },
];

const baseMedia = [
    { id: 1, title: "Youth Cup Final", time: "1 years Ago", date: "2025-01-01", img: "/images/inmatch_g.jpeg" },
    { id: 2, title: "Bravo Training Session", time: "1 years Ago", date: "2025-01-15", img: "/images/teamplay.jpeg" },
    { id: 3, title: "Foxtrot Night Match", time: "1 years Ago", date: "2025-01-12", img: "/images/media_n.jpeg" },
    { id: 4, title: "Golf Trophy Lift", time: "3 years Ago", date: "2022-12-10", img: "/images/winner.jpeg" },
    { id: 5, title: "Award presentation", time: "1 months Ago", date: "2026-01-10", img: "/images/award_press.jpeg" },
    { id: 6, title: "India Fan Zone", time: "1 years Ago", date: "2025-01-10", img: "/images/bg_bannerArea.jpg" },
    { id: 7, title: "Juliet Press Conf", time: "6 months Ago", date: "2025-07-10", img: "/images/press.jpeg" },
    { id: 8, title: "Kilo New Kit Reveal", time: "4 months Ago", date: "2025-09-10", img: "/images/teamplay2.jpeg" },
    { id: 9, title: "Lima Championship Win", time: "2 months Ago", date: "2025-12-20", img: "/images/under_12_winner.jpeg" },
    { id: 10, title: "Youth trophy Winner", time: "2 months Ago", date: "2025-12-19", img: "/images/trophy_lift.jpeg" },
    { id: 11, title: "Y.F.A team", time: "2 months Ago", date: "2025-12-15", img: "/images/YFA_team.jpeg" },
    { id: 12, title: "Trophy presentation", time: "2 months Ago", date: "2025-12-10", img: "/images/youtth_winner.jpeg" },
    { id: 13, title: "Award", time: "3 months Ago", date: "2025-12-10", img: "/images/1.jpeg" },
    { id: 14, title: "Award 2", time: "3 months Ago", date: "2025-12-10", img: "/images/2.jpeg" },
    { id: 15, title: "Award 3", time: "3 months Ago", date: "2025-12-10", img: "/images/3.jpeg" },
    { id: 16, title: "Award 4", time: "4 months Ago", date: "2025-12-10", img: "/images/4.jpeg" },
    { id: 17, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/5.jpeg" },
    { id: 18, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/6.jpeg" },
    { id: 19, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/7.jpeg" },
    { id: 20, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/8.jpeg" },
    { id: 21, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/9.jpeg" },
    { id: 22, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/11.jpeg" },
    { id: 23, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/12.jpeg" },
    { id: 24, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/13.jpeg" },
    { id: 25, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/14.jpeg" },
    { id: 26, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/15.jpeg" },
    { id: 27, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/16.jpeg" },
    { id: 28, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/17.jpeg" },
    { id: 29, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/18.jpeg" },
    { id: 30, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/19.jpeg" },
    { id: 31, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/20.jpeg" },
    { id: 32, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/21.jpeg" },
    { id: 33, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/22.jpeg" },
    { id: 33, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/23.jpeg" },
    { id: 34, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/24.jpeg" },
    { id: 35, title: "team celebration", time: "1 months Ago", date: "2026-01-26", img: "/videos/vd3.mp4" },
    { id: 36, title: "Presentation", time: "1 months Ago", date: "2026-01-20", img: "/videos/vd1.mp4" },
    { id: 37, title: "Team line up", time: "1 months Ago", date: "2026-01-19", img: "/videos/vd2.mp4" },
  ];

const text = "Joseninho Kids Football League is a vibrant kids football initiative nestled in the heart of Abuja, where we are passionate about nurturing, developing, and celebrating the incredible talent of young footballers. Tailored for players aged 6 to 15, our league provides a dynamic and engaging environment that combines fun with competition, enabling children to master the fundamentals of football while developing essential life skills such as confidence, discipline, and teamwork.Joseninho Kids Football League promises an exhilarating and fulfilling experience for every participant. Our program harmoniously combines skill development with the values of sportsmanship and mentorship, all within a supportive community. Here, football transcends mere play, it becomes a powerful platform for personal growth, character development, and the creation of cherished memories that will last a lifetime."

export const usePlayerStore = create((set, get) => ({
  players: MOCK_API_DATA,
  programs: MOCK_PROGRAMS,
  baseMedia: baseMedia,
  aboutText: text,
  selectedPlayer: null,
  filterRole: "All",
  currentPage: 1,
  itemsPerPage: 8,

  setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  setFilterRole: (role) => set({ filterRole: role, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  // Logic to get filtered and paginated data
  getProcessedData: () => {
    const { players, filterRole, currentPage, itemsPerPage } = get();
    
    // 1. Filter
    const filtered = filterRole === "All" 
      ? players 
      : players.filter(p => p.role === filterRole);

    // 2. Paginate
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    return { 
      displayPlayers: paginated, 
      totalPages,
      totalResults: filtered.length 
    };
  },

  news: MOCK_NEWS,
  selectedNews: null,
  newsPage: 1,
  newsPerPage: 6,

  setSelectedNews: (news) => set({ selectedNews: news }),
  setNewsPage: (page) => set({ newsPage: page }),

  getPaginatedNews: () => {
    const { news, newsPage, newsPerPage } = get();
    const startIndex = (newsPage - 1) * newsPerPage;
    return news.slice(startIndex, startIndex + newsPerPage);
  },

contactStatus: 'idle', // 'idle' | 'submitting' | 'success'
setContactStatus: (status) => set({ contactStatus: status }),
}));