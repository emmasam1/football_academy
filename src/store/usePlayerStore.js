
import { create } from 'zustand';

const MOCK_API_DATA = [
  { id: 1, name: "Harry Deo", team: "First Team", number: "22", role: "Goalkeeper", nationality: "American", dob: "25/02/1988", height: "190cm", weight: "90kg", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377", stats: { attack: 10, defence: 95, kick: 88 } },
  { id: 2, name: "Noah Smith", team: "Under 21s", number: "34", role: "Goalkeeper", nationality: "British", dob: "12/05/2003", height: "185cm", weight: "80kg", img: "https://images.unsplash.com/photo-1606925791574-e91af3ad295b", stats: { attack: 5, defence: 82, kick: 75 } },
  { id: 3, name: "Oliver Smith", team: "First Team", number: "04", role: "Defender", nationality: "Spanish", dob: "10/10/1995", height: "188cm", weight: "85kg", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36", stats: { attack: 45, defence: 90, kick: 60 } },
  { id: 4, name: "Jacob Smith", team: "First Team", number: "10", role: "Defender", nationality: "French", dob: "22/01/1994", height: "180cm", weight: "78kg", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", stats: { attack: 55, defence: 85, kick: 70 } },
  { id: 5, name: "Jack Due", team: "First Team", number: "28", role: "Midfielder", nationality: "German", dob: "15/03/1998", height: "175cm", weight: "72kg", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c", stats: { attack: 85, defence: 70, kick: 92 } },
  { id: 6, name: "Liam Due", team: "Under 21s", number: "09", role: "Forward", nationality: "Italian", dob: "05/09/2004", height: "182cm", weight: "75kg", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2", stats: { attack: 98, defence: 30, kick: 95 } },
  { id: 7, name: "Aaron Ramsey", team: "First Team", number: "16", role: "Midfielder", nationality: "Welsh", dob: "26/12/1990", height: "178cm", weight: "76kg", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974", stats: { attack: 75, defence: 60, kick: 80 } },
  { id: 8, name: "Mason Mount", team: "First Team", number: "19", role: "Midfielder", nationality: "British", dob: "10/01/1999", height: "180cm", weight: "74kg", img: "https://images.unsplash.com/photo-1510567198184-c748466c1445", stats: { attack: 82, defence: 55, kick: 85 } },
  { id: 9, name: "Virgil Van", team: "First Team", number: "04", role: "Defender", nationality: "Dutch", dob: "08/07/1991", height: "193cm", weight: "92kg", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20", stats: { attack: 30, defence: 98, kick: 70 } },
  { id: 10, name: "Kylian M", team: "First Team", number: "07", role: "Forward", nationality: "French", dob: "20/12/1998", height: "178cm", weight: "73kg", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae", stats: { attack: 99, defence: 20, kick: 90 } },
  { id: 11, name: "Luka Modric", team: "First Team", number: "10", role: "Midfielder", nationality: "Croatian", dob: "09/09/1985", height: "172cm", weight: "66kg", img: "https://images.unsplash.com/photo-1551280857-2b9bbe52cfcd", stats: { attack: 88, defence: 75, kick: 95 } },
  { id: 12, name: "Erling H", team: "First Team", number: "09", role: "Forward", nationality: "Norwegian", dob: "21/07/2000", height: "194cm", weight: "88kg", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018", stats: { attack: 97, defence: 15, kick: 85 } },
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
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
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
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
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
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "A masterclass performance led by the veteran forwards secured a comfortable victory..."
  }
];

export const usePlayerStore = create((set, get) => ({
  players: MOCK_API_DATA,
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