'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from 'motion/react';
import { blurbs } from '@/components/util/Blurbs';

export default function Mugshot() {
  const [showBlurb, setShowBlurb] = useState<boolean>(false);
  const [canShowBlurb, setCanShowBlurb] = useState<boolean>(true);
  const [currentTimeout, setCurrentTimeout] = useState<ReturnType<typeof setTimeout>>();
  const blurbTiming: number = 2000;

  useEffect(() => {
    if (!showBlurb) {
      setCanShowBlurb(true);
      clearTimeout(currentTimeout);
      return;
    }

    setCanShowBlurb(false);
    setCurrentTimeout(setTimeout(() => {
      setCanShowBlurb(true);
      setShowBlurb(false);
    }, blurbTiming));
  }, [showBlurb]);

  const waveClickHandler = () => {
    if (canShowBlurb) {
      setShowBlurb(true);
    } else {
      setShowBlurb(false);
    }
  }

  const getRandomBlurb = () => {
    return blurbs[Math.floor(Math.random() * blurbs.length)];
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: -30 }}
        transition={{
          delay: 0.5,
          duration: 0.4,
          ease: 'easeInOut',
          scale: { type: "spring", delay: 0.5, visualDuration: 0.4, bounce: 0.5},
        }}
        whileHover={{
          rotate: [-30, -60, 0, -30],
          transition: {
            times: [0, .2, .8, 1],
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
          }
        }}
        className="absolute top-[40%] -left-6 z-100 select-none origin-bottom hover:cursor-pointer"
        title="Click me!"
      >
        <span className="text-6xl" onClick={waveClickHandler}>✋</span>
      </motion.div>
      <AnimatePresence initial={false}>
        {showBlurb ?
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5}
            }}
            className="absolute z-100 top-42 left-4 w-full"
          >
            <div className="absolute left-10 w-full">
              <div className="
                before:absolute 
                before:z-10
                before:-top-2
                before:left-28
                before:h-4
                before:w-4 
                before:-rotate-45 
                before:bg-white"
              />
              <div className="absolute z-20 w-[80%] bg-white text-black p-2 rounded-xl text-center">
                {getRandomBlurb()}
              </div>
            </div>
          </motion.div>
          : null
        }
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.3}
        }}
      >
        <Image src="/me.png" width={300} height={300} alt="photo of me" priority={true} />
      </motion.div>
    </div>
  );
}
