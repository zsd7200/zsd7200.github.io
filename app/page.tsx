'use client';

import { useState, useRef, RefObject, useEffect } from 'react';
import Mugshot from "@/components/home/Mugshot";
import Title from "@/components/home/Title";
import About from "@/components/home/About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "motion/react";

type SectionType = {
  id: string,
  ref: RefObject<HTMLDivElement | null>,
  inView: boolean,
}

export default function Home() {
  const [section, setSection] = useState<number>(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const homeInView = useInView(homeRef, { amount: .5 });
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { amount: .5 });

  const sections: Array<SectionType> = [
    {
      id: 'home',
      ref: homeRef,
      inView: homeInView,
    },
    {
      id: 'about',
      ref: aboutRef,
      inView: aboutInView,
    },
  ];

  for (let i = 0; i < sections.length; i++) {
    useEffect(() => {
      console.log(`${sections[i].id} status: ${sections[i].inView}`);
      if (sections[i].inView) window.location.hash = `#${sections[i].id}`;
    }, [sections[i].inView]);
  }

  const handleNextSession = () => {
    const nextSection = (section + 1 !== sections.length) ? section + 1 : 0;
    const nextHash = `#${sections[nextSection].id}`;
    setSection(nextSection);
    sections[nextSection].ref.current?.scrollIntoView({ behavior: 'smooth' });
    window.location.hash = nextHash;
  }

  return (
    <>
      <button onClick={handleNextSession} className="fixed z-100 w-[30px] h-[30px] p-2 flex items-center justify-center bottom-4 right-4 border rounded-full text-md hover:cursor-pointer transition hover:bg-gray-100 hover:text-black">
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
      <div id="home" ref={homeRef} className="relative w-full h-screen flex items-center justify-center gap-x-16 gap-y-10 text-center sm:text-right flex-col sm:flex-row">
        <Title />
        <Mugshot />
      </div>
      <div id="about" ref={aboutRef} className="relative w-full h-screen flex items-center justify-center gap-x-16 gap-y-10 text-center sm:text-right flex-col sm:flex-row">
        <About />
      </div>
    </>
  );
}
