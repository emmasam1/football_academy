import React, { useState } from "react";
import { Progress, Button, Collapse, Tabs } from "antd";
import {
  UsergroupAddOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [size, setSize] = useState("small");

  const [activeKey, setActiveKey] = useState("1");

  const tabItems = [
    {
      key: "1",
      label: "Our Mission",
      children: (
        <p className="text-gray-600 leading-relaxed">
          Our mission is to nurture young football talents through structured
          training, mentorship, and competitive exposure while instilling
          discipline, confidence, and teamwork.
        </p>
      ),
    },
    {
      key: "2",
      label: "Our Vision",
      children: (
        <p className="text-gray-600 leading-relaxed">
          We aim to become a leading youth football development platform in
          Africa, producing technically sound, mentally strong, and globally
          competitive players.
        </p>
      ),
    },
    {
      key: "3",
      label: "Our Values",
      children: (
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Discipline & Sportsmanship</li>
          <li>Teamwork & Leadership</li>
          <li>Consistency & Growth</li>
        </ul>
      ),
    },
  ];

  const coaches = [
    {
      name: "Dr Victor isereke ",
      role: "Technical Coach",
      image: "/images/Victor_isereke.jpeg",
      experience: "10 Years Experience",
      bio: "Chairman/Covener",
    },
    {
      name: "Temidayo faleyimu",
      role: "Assistant Coach",
      image: "/images/Temidayo_faleyimu.jpeg",
      experience: "8 Years Experience",
      bio: "LOC chairman",
    },
    {
      name: "Pascal Inyang",
      role: "Head Coach",
      image: "/images/Pascal_Inyang.jpeg",
      experience: "12 Years Experience",
      bio: "member planning committee",
    },
    {
      name: "Keiphas Augustine",
      role: "Goalkeeper Coach",
      image: "/images/forth.jpeg",
      experience: "9 Years Experience",
      bio: "Match Commissioner",
    },
  ];

  const stats = [
    {
      icon: <UsergroupAddOutlined />,
      value: "12K+",
      label: "Active Players",
    },
    {
      icon: <TrophyOutlined />,
      value: "48+",
      label: "Winning Records",
    },
    {
      icon: <CheckCircleOutlined />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <StarOutlined />,
      value: "4.7",
      label: "User Ratings",
    },
  ];

  const faqsLeft = [
    {
      key: "1",
      label: "Who are the coaches at Joseninho Kids Football League?",
      children:
        "Our coaches are experienced football professionals and trained mentors passionate about youth development. They combine technical knowledge with a strong focus on discipline, character, and player growth..",
    },
    {
      key: "2",
      label: "How do I know which service is right for my child?",
      children:
        "Our coaches assess each player’s skill level and recommend programs that best support their development and confidence.",
    },
    {
      key: "3",
      label: "What qualifications do your coaches have?",
      children:
        "Our coaching team consists of certified and experienced football coaches with backgrounds in grassroots and youth football development, ensuring safe, effective, and age-appropriate training.",
    },
  ];

  const faqsRight = [
    {
      key: "4",
      label: "How do coaches support player development?",
      children:
        "Coaches focus on technical skills, tactical understanding, physical conditioning, mental strength, and teamwork, creating a balanced approach to football and personal development.",
    },
    {
      key: "5",
      label: "Do coaches work with different age groups?",
      children:
        "Yes. Our coaches are trained to work with various age categories, adapting training methods to suit each player’s age, ability, and stage of development.",
    },
    {
      key: "6",
      label: "Is player safety a priority during training?",
      children:
        "Absolutely. Player safety is central to our coaching philosophy. Coaches are trained in first aid, injury prevention, and creating a safe training environment for all players.",
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] w-full">
        <div className='absolute inset-0 -top-16 bg-[url("/images/hero.jpg")] bg-cover bg-center' />
        <div className="relative z-10 h-full" />
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-10">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* LEFT */}
            <div className="bg-blue-50 p-5">
              <span className="inline-block mb-4 text-xs uppercase tracking-wide text-orange-500 border border-orange-500/30 px-3 py-1">
                Who we are
              </span>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black mb-6">
                Dedicated football professionals shaping confident, disciplined,
                and skilled athletes
              </h2>

              <p className="max-w-xl text-black text-justify">
                Joseninho Kids Football League is a vibrant kids football
                initiative nestled in the heart of Abuja, where we are
                passionate about nurturing, developing, and celebrating the
                incredible talent of young footballers. Tailored for players
                aged 6 to 15, our league provides a dynamic and engaging
                environment that combines fun with competition, enabling
                children to master the fundamentals of football while developing
                essential life skills such as confidence, discipline, and
                teamwork.
              </p>

              <p className="text-black text-justify max-w-xl mt-5 mb-10">
                Joseninho Kids Football League promises an exhilarating and
                fulfilling experience for every participant. Our program
                harmoniously combines skill development with the values of
                sportsmanship and mentorship, all within a supportive community.
                Here, football transcends mere play, it becomes a powerful
                platform for personal growth, character development, and the
                creation of cherished memories that will last a lifetime.
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <Progress
                    type="circle"
                    percent={87}
                    width={80}
                    strokeColor="#FB5724"
                    trailColor="#444"
                  />
                  <p className="text-sm font-medium text-gray-300 max-w-35">
                    Long Term Player Development
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Progress
                    type="circle"
                    percent={92}
                    width={80}
                    strokeColor="#FB5724"
                    trailColor="#444"
                  />
                  <p className="text-sm font-medium text-gray-300 max-w-40">
                    Structured Football Growth Strategy
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src="/images/aboutImg1.jpeg"
                alt="Coach training players"
                className="w-full h-80 sm:h-95 lg:h-105 object-cover"
              />

              {/* EXPERIENCE BADGE */}
              <div className="absolute bg-white h-28 w-28 -left-6 sm:-left-10 top-1/2 -translate-y-1/2 shadow-lg rounded-full flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-orange-600">25+</p>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 text-center">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <section className="w-full bg-[#EFF6FF] py-14 px-4 md:px-10 mt-10">
            <div className="w-full max-w-7xl mx-auto">
              {/* Tabs Header */}
              <Tabs
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
                type="card"
                size={size}
                items={tabItems.map((tab) => ({
                  ...tab,
                  children: null,
                }))}
                className="custom-tabs mb-12"
              />

              {/* Animated Content */}
              <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeKey}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {tabItems.find((tab) => tab.key === activeKey)?.children}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* ================= BOTTOM ================= */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 text-xs uppercase tracking-wide text-[#1C1F42] border border-[#1C1F42]-500/30 px-3 py-1">
                Meet our team
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Meet our team shaping modern football excellence
              </h3>
            </div>
            <div>
              <p className="text-black mb-6 max-w-xl">
                We’ve compiled the most common questions to help you understand
                our process, services, and how we deliver results.
              </p>

              <Button
                type="primary"
                className="bg-[#2141a5]!  rounded-none! px-8 h-11"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COACHES GRID */}
      <div className="mt-20 bg-[url('/images/teamplay-dark.jpeg')] bg-cover bg-center px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => {
            const { name, role, image, experience, bio } = coach;

            return (
              <div
                key={index}
                className="bg-[#1f2124] overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-90 object-cover"
                />

                {/* CONTENT */}
                <div className="p-5 text-white">
                  <h4 className="text-lg font-semibold">{name}</h4>
                  {/* <p className="text-sm text-orange-500">{role}</p> */}
                  {/* <p className="text-xs text-gray-400 mt-1">{experience}</p> */}

                  <p className="text-sm text-gray-300 mt-3 line-clamp-3">
                    {bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= FAQ & STATS ================= */}
      <section className="bg-white py-16 md:py-8">
        <div className="max-w-7xl mx-auto px-10">
          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center border-b pb-4 border-gray-200">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 border-r border-gray-200 last:border-0 pr-4 md:pr-0"
              >
                <div className="text-orange-500 text-2xl">{stat.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h4>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-center">
            <div>
              <span className="inline-block mb-4 text-xs uppercase tracking-wide text-blue-600 border border-blue-200 px-3 py-1">
                Common Questions
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Meet Our Coaches – FAQs
              </h3>
            </div>

            <p className="text-gray-500 max-w-xl">
              We’ve compiled the most common questions to help you understand
              our process, services, and how we deliver results.
            </p>
          </div>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Collapse
              accordion
              items={faqsLeft}
              bordered={false}
              expandIconPosition="end"
            />

            <Collapse
              accordion
              items={faqsRight}
              bordered={false}
              expandIconPosition="end"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
