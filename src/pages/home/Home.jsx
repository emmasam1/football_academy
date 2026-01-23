import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Row, Col, Typography, Divider, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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
    image: "/images/hero.jpg",
    title: "Join the Football League Today",
    subtitle: "Compete with the Best. Develop Your Skills.",
    cta: "Register Now",
  },
  {
    image: "/images/hero-slide2.jpg",
    title: "Train Like a Pro",
    subtitle: "Expert Coaches. Structured Development.",
    cta: "Learn More",
  },
  {
    image: "/images/hero-slide3.jpg",
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
        cursor-pointer hover:bg-orange-600 transition

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
        cursor-pointer hover:bg-orange-600 transition
      "
    >
      <LeftOutlined />
    </div>
  );
};
/* ================================================ */

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [current]);

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

    // responsive: [
    //   { breakpoint: 1280, settings: { slidesToShow: 3 } },
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false, // 🔥 prevent mobile overflow
    //     },
    //   },
    // ],
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
    {
      title: "Goals",
      description: "Cras maximus tortor mauris, at venenatis ante eleifend.",
      image: sliderImg_1,
    },
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

  return (
    <div>
      <div className="-top-16 relative w-full overflow-hidden h-[90vh] sm:h-[85vh] md:h-[80vh]">
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />

                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32 text-white">
                    <motion.h1
                      className="text-3xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="text-lg md:text-2xl mb-6 max-w-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.button
                      className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold w-fit"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      {slide.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* Controls */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button> */}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === i ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background image (absolute) */}
        <div
          className='
      absolute inset-0 -top-16
      bg-[url("/images/hero.jpg")]
      bg-cover bg-center
      z-0
    '
        />

        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

        {/* Hero content (if any later) */}
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          {/* Hero text/buttons can live here */}
        </div>
      </section>

      <div className="">
        {/* Slider */}
        <div className=" bg-[#323437] h-auto md:h-120 flex items-center justify-center text-white py-12 md:py-0 overflow-hidden">
          {/* relative wrapper REQUIRED for arrows */}
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

                    <Button className="mt-auto bg-[#1C1F26]! text-[#949aa7]! border-none! hover:bg-[#FB5724]! hover:text-white! rounded-none! px-5! text-sm">
                      details
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Banner Area */}
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
                  Join Our Club!
                </span>
              </p>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis lobortis felis. Sed commodo commodo tempor. Nullam eget
                augue quis felis posuere accumsan eu et erat. Sed urna dolor,
                posuere sed eros vel, accumsan fermentum mi. Nunc ullamcorper,
                dolor non fringilla dapibus, risus tellus congue enim, ac
                faucibus odio nunc id erat. Phasellus mollis eu nulla eget
                congue. Vivamus id laoreet nisi, sed scelerisque diam. Curabitur
                interdum convallis sapien, eget placerat neque placerat ut.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1D21] p-10 md:p-20 text-white">
          <div className="max-w-7xl mx-auto">
            <Row gutter={[48, 40]}>
              {/* Column 1: Welcome */}
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

              {/* Column 2: Latest News */}
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

              {/* Column 3: What We Do */}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
