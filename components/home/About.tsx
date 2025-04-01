'use client';

import { useRef, useState } from 'react';
import { manrope } from "@/components/util/Fonts";
import { useScroll, useMotionValueEvent, motion } from 'motion/react';
import { aboutData } from '@/components/util/AboutData';

export default function About() {
  const containerRef = useRef(null);
  const [circleState, setCircleState] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > circleState) setCircleState((latest > 0.75) ? 1 : latest);
  });

  return (
    <div className="relative flex flex-col w-full">
      <motion.div
        initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
        whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-16"
      >
        <h1 className={`${manrope.className} text-4xl sm:text-5xl font-[700]`}>about me</h1>
      </motion.div>
      <div className="flex justify-around items-center flex-col lg:flex-row lowercase" ref={containerRef}>
        {aboutData.map((about) => 
          <div key={about.short} className={about.className}>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: circleState }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
            >
            {circleState === 1 &&
              <div className={`
                ${manrope.className} rounded-full bg-white text-black 
                w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] lg:w-[25vw] lg:h-[25vw] 
                flex flex-col items-center justify-center
              `}>
                <motion.div
                  initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                  animate={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-8 w-fit mx-auto bg-white rounded-lg p-1"
                >
                  <h1 className="text-xl sm:text-3xl font-[600]">{about.title}</h1>
                  <hr className="w-[70%] mx-auto border-gray-200" />
                </motion.div>
                <div className="flex flex-col gap-y-3">
                  {about.data.map((data) => 
                    <motion.div
                      initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                      animate={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                      whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                      transition={{
                        delay: 0.4,
                        duration: 0.7,
                      }}
                      viewport={{ once: true }}
                      className="flex gap-x-4 justify-between w-[80%] mx-auto"
                    >
                      <p className="text-sm sm:text-base font-bold">{data.title}:</p>
                      <div className="flex flex-col text-right text-pretty bg-white rounded-lg p-1">
                        <span className="text-sm sm:text-base">{data.data.join(', ')}</span>
                        {data.subdata && 
                          <span className="text-xs italic">{data.subdata}</span>
                        }
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            }
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
