'use client';

import { useState, useRef, RefObject, useEffect } from 'react';
import Mugshot from "@/components/home/Mugshot";
import Title from "@/components/home/Title";
import About from "@/components/home/About";
import Projects from '@/components/home/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "motion/react";
import Links from '@/components/home/Links';

type SectionType = {
  id: string,
  ref: RefObject<HTMLDivElement | null>,
  inView: boolean,
}

export default function Home() {
  const [section, setSection] = useState<number>(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const sections: Array<SectionType> = [
    {
      id: 'home',
      ref: homeRef,
      inView: useInView(homeRef, { amount: .8 }),
    },
    {
      id: 'about',
      ref: aboutRef,
      inView: useInView(aboutRef, { amount: .8 }),
    },
    {
      id: 'projects',
      ref: projRef,
      inView: useInView(projRef, { amount: .8 }),
    },
    {
      id: 'links',
      ref: linksRef,
      inView: useInView(linksRef, { amount: .8 }),
    },
  ];

  for (let i = 0; i < sections.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (sections[i].inView) {
        window.location.hash = `#${sections[i].id}`;
        setSection(i);
      }
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
    <div className="relative">
      <button onClick={handleNextSession} className="fixed z-100 w-[30px] h-[30px] p-2 flex items-center justify-center bottom-4 right-4 border rounded-full text-md hover:cursor-pointer transition hover:bg-gray-100 hover:text-black">
        <FontAwesomeIcon icon={faArrowDown} className={`${((section + 1 === sections.length)) ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <div id="home" ref={homeRef} className="relative w-full h-screen flex items-center justify-center gap-x-16 gap-y-10 text-center sm:text-right flex-col sm:flex-row">
        <Title />
        <Mugshot />
      </div>
      <div id="about" ref={aboutRef} className="relative w-full lg:h-screen flex p-4 sm:p-16">
        <About />
      </div>
      <div id="projects" ref={projRef} className="relative w-full h-full flex p-4 sm:p-16">
        <Projects />
      </div>
      <div id="links" ref={linksRef} className="relative w-full lg:h-screen flex p-4 sm:p-16">
        <Links />
      </div>
    </div>
  );
}
