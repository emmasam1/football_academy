import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Table } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Row, Col, Typography, Divider, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import sliderImg_1 from "../../../public/images/sliderImg_1.png";
import sliderImg_2 from "../../../public/images/sliderImg_2.png";
import sliderImg_3 from "../../../public/images/sliderImg_3.png";
import sliderImg_4 from "../../../public/images/sliderImg_4.png";

import small_img_1 from "../../../public/images/small_img_1.jpg";
import small_img_2 from "../../../public/images/small_img_2.jpg";
import small_img_3 from "../../../public/images/small_img_3.jpg";
import small_img_4 from "../../../public/images/small_img_4.jpg";

const heroSlides = [
  {
    image: "/images/teamplay-dark.jpeg",
    title: "Join the Football League Today",
    subtitle: "Compete with the Best. Develop Your Skills.",
    cta: "Register Now",
  },
  {
    image: "/images/aboutImg1-dark.jpeg",
    title: "Train Like a Pro",
    subtitle: "Expert Coaches. Structured Development.",
    cta: "Learn More",
  },
  {
    image: "/images/hero-dark.jpeg",
    title: "Unleash Your Potential",
    subtitle: "Become a Confident, Disciplined Athlete.",
    cta: "Get Started",
  },
];

const { Title, Text, Link } = Typography;

/* ================= ARROWS (FIXED) ================= */
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute right-2 md:-right-10
        top-1/2 -translate-y-1/2
        z-20 bg-[#1f2226]
        w-10 h-10 mr-10
        flex items-center justify-center
        cursor-pointer hover:bg-[#1C1F42]! transition

      "
    >
      <RightOutlined />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute left-2 md:-left-10
        top-1/2 -translate-y-1/2
        z-20 bg-[#1f2226]
        w-10 h-10 ml-10
        flex items-center justify-center
        cursor-pointer hover:bg-[#1C1F42]! transition
      "
    >
      <LeftOutlined />
    </div>
  );
};
/* ================================================ */

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const fixtures = [
    {
      id: 1,
      stadium: "Central Olympic Stadium",
      date: "April 02, 2019",
      home: { name: "Istanbul", logo: "/images/club1.png" },
      away: { name: "Italy FC.", logo: "/images/club2.png" },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 2,
      stadium: "Central Olympic Stadium",
      date: "April 02, 2019",
      home: { name: "Rayal FC", logo: "/images/club3.png" },
      away: { name: "Italy FC.", logo: "/images/club4.png" },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 3,
      stadium: "Central Olympic Stadium",
      date: "April 02, 2019",
      home: { name: "DC Unfo.", logo: "/images/club1.png" },
      away: { name: "Italy FC.", logo: "/images/club4.png" },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 4,
      stadium: "Central Olympic Stadium",
      date: "April 02, 2019",
      home: { name: "Istanbul", logo: "/images/club1.png" },
      away: { name: "Italy FC.", logo: "/images/club2.png" },
      bg: "/images/bg-mc3.jpeg",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Draymond Green Had Bizarre...",
      image: "/images/news1.webp",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry.",
      featured: true,
    },
    {
      id: 2,
      title: "Draymond Green Had Bizarre...",
      image: "/images/news2.webp",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry.",
      featured: true,
    },
    {
      id: 3,
      title: "Draymond Green Had Biz...",
      image: "/images/news3.jpg",
      date: "27 June, 2020",
      comments: 89,
    },
    {
      id: 4,
      title: "Draymond Green Had Bizarre...",
      image: "/images/news4.jpg",
      date: "27 June, 2020",
      comments: 89,
    },
  ];

  const featuredPosts = posts.filter((p) => p.featured);
  const smallPosts = posts.filter((p) => !p.featured);

  const results = [
    { id: 1, score: "1 - 2" },
    { id: 2, score: "2 - 0" },
    { id: 3, score: "1 - 0" },
    { id: 4, score: "1 - 0" },
    { id: 5, score: "1 - 0" },
  ];

  const leagueTable = [
    { id: 1, club: "France FC", logo: "/logos/france.png", w: 13, d: 1, l: 61 },
    {
      id: 2,
      club: "France FC",
      logo: "/logos/france.png",
      w: 12,
      d: 20,
      l: 61,
    },
    {
      id: 3,
      club: "France FC",
      logo: "/logos/france.png",
      w: 25,
      d: 36,
      l: 61,
    },
    {
      id: 4,
      club: "France FC",
      logo: "/logos/france.png",
      w: 10,
      d: 15,
      l: 61,
    },
    {
      id: 5,
      club: "France FC",
      logo: "/logos/france.png",
      w: 18,
      d: 22,
      l: 61,
    },
  ];

  const schedule = [
    {
      id: 1,
      date: "Nov 10, 2022",
      event: "Royal FC vs GS FC",
      time: "12:00",
      venue: "GST Stadium",
    },
    {
      id: 2,
      date: "Nov 11, 2022",
      event: "Royal FC vs GS FC",
      time: "14:00",
      venue: "GST Stadium",
    },
    {
      id: 3,
      date: "Nov 12, 2022",
      event: "Royal FC vs GS FC",
      time: "14:30",
      venue: "GST Stadium",
    },
    {
      id: 4,
      date: "Nov 14, 2022",
      event: "Royal FC vs GS FC",
      time: "15:30",
      venue: "GST Stadium",
    },
    {
      id: 5,
      date: "Nov 15, 2022",
      event: "Royal FC vs GS FC",
      time: "19:30",
      venue: "GST Stadium",
    },
    {
      id: 6,
      date: "Nov 16, 2022",
      event: "Royal FC vs GS FC",
      time: "20:00",
      venue: "GST Stadium",
    },
  ];

  const leagueColumns = [
    {
      title: "Club",
      dataIndex: "club",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img src={record.logo} alt="" className="h-8 w-8 object-contain" />
          <span className="font-medium">{record.club}</span>
        </div>
      ),
    },
    { title: "W", dataIndex: "w", sorter: (a, b) => a.w - b.w },
    { title: "D", dataIndex: "d", sorter: (a, b) => a.d - b.d },
    { title: "L", dataIndex: "l", sorter: (a, b) => a.l - b.l },
  ];

  const scheduleColumns = [
    { title: "Date", dataIndex: "date" },
    { title: "Event", dataIndex: "event" },
    { title: "Time", dataIndex: "time" },
    { title: "Venue", dataIndex: "venue" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    /* ===== OVERFLOW FIXES ===== */
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: false,
    /* ========================= */

    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          fade: true,
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Coaches",
      description:
        "Cras mattis mattis ipsum, vel porttitor augue laoreet quis.",
      image: sliderImg_2,
    },
    {
      title: "Awards",
      description: "Net massa. Ut vel diam nulla. Cras mattis mattis ipsum.",
      image: sliderImg_1,
    },
    {
      title: "Our Team",
      description: "Vivamus at condimentum ipsum. Nulla fringilla risus.",
      image: sliderImg_4,
    },
    // {
    //   title: "Goals",
    //   description: "Cras maximus tortor mauris, at venenatis ante eleifend.",
    //   image: sliderImg_1,
    // },
    {
      title: "Rules",
      description: "Cras maximus tortor mauris, at venenatis ante eleifend.",
      image: sliderImg_3,
    },
  ];

  const smallImg = [
    { image: small_img_1 },
    { image: small_img_2 },
    { image: small_img_3 },
    { image: small_img_4 },
  ];

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <div className="-top-16 relative w-full overflow-hidden h-[90vh] sm:h-[85vh] md:h-[90vh] bg-black">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ zIndex: 1 }}
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${heroSlides[current].image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55" />

            {/* CONTENT */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32 text-white max-w-3xl"
              variants={textContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={textItem}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {heroSlides[current].title}
              </motion.h1>

              <motion.p
                variants={textItem}
                className="text-lg md:text-2xl mb-6 text-slate-200"
              >
                {heroSlides[current].subtitle}
              </motion.p>

              <motion.button
                variants={textItem}
                className="bg-[#1C1F42] hover:bg-orange-500 transition px-6 py-3 font-semibold w-fit"
              >
                {heroSlides[current].cta}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-20">
          <div className="flex justify-between items-center text-white text-sm mb-3">
            <span className="font-semibold">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="opacity-60">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-1 cursor-pointer transition-all duration-500 ${
                  current === i
                    ? "h-1 bg-orange-500"
                    : "h-[2px] bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* <section className="relative h-screen w-full">
 
        <div
          className='
      absolute inset-0 -top-16
      bg-[url("/images/hero.jpg")]
      bg-cover bg-center
      z-0
    '
        />

    
        <div className="relative z-10 h-full flex items-center justify-center text-white">
        
        </div>
      </section> */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> */}
        {/* LEFT: FIXTURES */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Fixtures & Results</h2>
            <button className="bg-[#1C1F42]! text-white px-4 py-2 text-sm rounded-none! cursor-pointer transition">
              All Matches →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fixtures.map((match) => (
              <div
                key={match.id}
                className="relative h-56 rounded-xl overflow-hidden text-white"
              >
                <img
                  src={match.bg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div className="text-center">
                    <h3 className="font-semibold">{match.stadium}</h3>
                    <p className="text-sm text-gray-200">{match.date}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-2">
                      <img src={match.home.logo} className="h-18" />
                      <span className="text-sm">{match.home.name}</span>
                    </div>

                    <span className="text-lg font-bold">VS</span>

                    <div className="flex flex-col items-center gap-2">
                      <img src={match.away.logo} className="h-18" />
                      <span className="text-sm">{match.away.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: LATEST RESULTS */}
        {/* <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Latest Results</h3>
              <span className="text-white cursor-pointer bg-[#1C1F42] px-3">
                ↗
              </span>
            </div>

            <div className="bg-white rounded-xl shadow p-4 space-y-4">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b last:border-none pb-3 last:pb-0"
                >
                  <div className="flex items-center gap-2">
                    <img src="/images/clublog1.png" className="h-6" />
                    <span className="text-sm font-medium">Italy FC.</span>
                  </div>

                  <span className="text-red-600 font-bold">{item.score}</span>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Italy FC.</span>
                    <img src="/images/clublog2.png" className="h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}
      </motion.section>

      {/* <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-5">League Table & Schedule</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl shadow">
            <div className="bg-[#1C1F42] text-white px-6 py-4 font-semibold">
              Serie A
            </div>
            <Table
              columns={leagueColumns}
              dataSource={leagueTable}
              rowKey="id"
              size="small"
              pagination={false}
              scroll={{ y: 260 }}
              className="px-4"
            />

            <div className="px-6 py-4 text-sm text-gray-500">
              Showing 1 to {leagueTable.length} of {leagueTable.length} entries
            </div>
          </div>

          <div className="bg-white rounded-xl shadow">
            <div className="bg-[#1C1F42] text-white px-6 py-4  font-semibold">
              Serie A
            </div>

            <Table
              columns={scheduleColumns}
              dataSource={schedule}
              rowKey="id"
              size="small"
              pagination={false}
              scroll={{ y: 260 }}
              className="px-4"
            />

            <div className="px-6 py-4 text-sm text-gray-500">
              Showing 1 to {schedule.length} of {schedule.length} entries
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative h-120 w-full overflow-hidden mb-5">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-right" />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020617]/90 via-[#020617]/70 to-transparent" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl">
              <p className="text-sm uppercase tracking-wide mb-3 opacity-90">
                Our History
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 leading-tight">
                About the Club SC United
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <Button className="inline-flex items-center gap-2 bg-[#1C1F42]! cursor-pointer border-none! text-white! transition px-6 py-3 text-sm font-semibold rounded-none!">
                About More
                <span>→</span>
              </Button>
            </div>

            {/* RIGHT IMAGE (PLAYER) */}
            {/* <div className="hidden lg:flex justify-end">
              <img
                src="/images/player.png"
                alt="Football Player"
                className="h-130 object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>

      <div className="">
        <div className=" bg-[#1C1F42] h-auto md:h-120 flex items-center justify-center text-white py-12 md:py-0 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-3">
                  <div className="h-full flex flex-col items-center text-center p-6">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-24 sm:h-28 w-full object-contain mb-4"
                    />

                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {slide.description}
                    </p>

                    <Button className="mt-auto bg-[#1C1F26]! text-[#949aa7]! border-none! hover:bg-[#1C1F42]! hover:text-white! rounded-none! px-5! text-sm">
                      details
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div>
          <div
            className='
            bg-[url("/images/bg_bannerArea.jpg")]
            py-16 md:py-20
            bg-fixed bg-cover bg-center
            flex justify-center items-center
            text-center flex-col text-white
            px-6 sm:px-10 md:px-20
          '
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl md:text-4xl">
                Looking for a good team?{" "}
                <span className="block font-bold uppercase text-4xl sm:text-5xl md:text-7xl mt-2">
                  Join Our League!
                </span>
              </p>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-200">
                We are building a community of dedicated teams committed to
                growth, discipline, and excellence. With a well organised
                fixtures, qualified officials, and a focus on development and
                fair play, this is the perfect platform to showcase your skills
                and be a part of an exciting football experience.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                {/* BIG LEFT */}
                <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/1 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <CalendarOutlined className="text-red-500" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {post.comments} Comments
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <button className="mt-6 w-10 h-10 bg-[#1C1F42]! text-white flex items-center justify-center rounded hover:bg-red-700 transition">
                      ↗
                    </button>
                  </div>
                </div>

                {/* SMALL RIGHT (MATCHING INDEX) */}
                {smallPosts[index] && (
                  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={smallPosts[index].image}
                        alt={smallPosts[index].title}
                        className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h4 className="font-semibold mb-2 text-gray-900">
                        {smallPosts[index].title}
                      </h4>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <CalendarOutlined className="text-red-500" />
                          {smallPosts[index].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {smallPosts[index].comments} Comments
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* <div className="bg-[#1A1D21] p-10 text-white">
          <div className="max-w-7xl mx-auto">
            <Row gutter={[48, 40]}>
              <Col xs={24} lg={8}>
                <div className="mb-6">
                  <Title
                    level={3}
                    className="text-white! mb-1! text-2xl! uppercase font-bold tracking-tighter"
                  >
                    Welcome to our site
                  </Title>
                  <div className="h-0.5 w-16 bg-orange-600" />
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img
                      src="/images/small_img_2.jpg"
                      alt="Player"
                      className="w-1/2 h-32 object-cover border-4 border-[#25282c]"
                    />
                    <p className="text-gray-400 text-sm leading-relaxed italic font-semibold">
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ...
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/images/small_img_3.jpg"
                      alt="Soccer"
                      className="w-1/2 h-32 object-cover border-4 border-[#25282c]"
                    />
                    <div className="w-1/2">
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white text-xs italic"
                      >
                        read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="mb-6">
                  <Title
                    level={3}
                    className="text-white! mb-1! text-2xl! uppercase font-bold tracking-tighter"
                  >
                    Latest News
                  </Title>
                  <div className="h-0.5 w-16 bg-orange-600" />
                </div>

                <div className="space-y-6">
                  {[1, 2].map((_, i) => (
                    <div key={i}>
                      <span className="text-gray-600 text-[10px] block mb-2 uppercase">
                        30 of October, 2014
                      </span>
                      <Link
                        href="#"
                        className="text-gray-200 hover:text-orange-500 underline text-sm block mb-2 font-medium"
                      >
                        {i === 0
                          ? "Vestibulum eget massa volutpat, rutrum diam vitae"
                          : "Sed eget risus vel sem suscipit"}
                      </Link>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Vestibulum eget massa volutpat, rutrum diam vitae,
                        pellentesque eros. Phasellus tristique, nulla id
                        vulputate imperdiet.
                      </p>
                      {i === 0 && <Divider className="border-gray-800 my-6" />}
                    </div>
                  ))}
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-xs block mt-4"
                  >
                    news archive →
                  </Link>
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="mb-6">
                  <Title
                    level={3}
                    className="text-white! mb-1! text-2xl! uppercase font-bold tracking-tighter"
                  >
                    What we do
                  </Title>
                  <div className="h-0.5 w-16 bg-orange-600" />
                </div>

                <div className="space-y-4">
                  {[
                    "Mauris eu mi ac orci lobortis",
                    "Proin vulputate tincidunt ante",
                    "Etiam risus ante, vestibulum eget",
                    "Vestibulum sit amet eros porta",
                  ].map((title, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <img
                        src={smallImg[index]?.image}
                        alt="thumb"
                        className="w-20 h-15 object-cover border-2 border-[#25282c] group-hover:border-orange-600 transition-colors"
                      />

                      <div>
                        <Title
                          level={5}
                          className="text-white! text-xs! mb-1! group-hover:text-orange-500 transition-colors"
                        >
                          {title}
                        </Title>

                        <p className="text-gray-500 text-[11px] leading-tight">
                          Sed finibus elit vitae nulla ultricies convallis.
                          Vestibulum finibus, tellus
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
