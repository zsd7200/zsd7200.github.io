'use client';

import { useRef, createRef, RefObject, MouseEvent } from 'react';
import { manrope } from "@/components/util/Fonts";
import { AnimatePresence, motion } from 'motion/react';
import { projectData } from '@/components/util/ProjectData';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function Projects() {
  const dialogRefs = useRef(projectData.map(() => createRef()));

  const openDialog = (index: number) => {
    const dialog = dialogRefs.current[index].current as HTMLDialogElement;
    dialog.showModal();
    disableBodyScroll(dialog);
  }

  const closeDialog = (e: MouseEvent<HTMLDialogElement>) => {
    const dialog = e.target as HTMLDialogElement;
    const rect = dialog.getBoundingClientRect();
    if (rect.left > e.clientX ||
      rect.right < e.clientX ||
      rect.top > e.clientY ||
      rect.bottom < e.clientY
    ) {
      dialog.close();
      enableBodyScroll(dialog);
    }
  }

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
        <h1 className={`${manrope.className} text-4xl sm:text-5xl font-[700]`}>projects</h1>
      </motion.div>
      <div className={`${manrope.className} flex justify-around items-stretch flex-col sm:flex-row gap-4 flex-wrap`}>
        {projectData.map((proj, i) => (
          <motion.div 
            key={proj.short} 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.3}
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={
              `relative flex ${(i % 2) ? 'text-right flex-row-reverse' : 'text-left flex-row'} 
              justify-between items-center gap-x-4 sm:text-left sm:flex-row bg-white text-black w-full 
              sm:w-[30%] rounded-lg p-4 border border-white/5`
            }>
            <div>
              <h2 className="font-bold text-xl select-none">{proj.title}</h2>
              <p>{proj.description}</p>
            </div>
            {proj.image &&
              <div className={`w-full min-w-24 sm:max-w-24 ${(proj.screenshot) ? 'hover:cursor-pointer' : ''}`}>
                <Image
                  src={proj.image}
                  alt={`${proj.title} icon`}
                  title={`${(proj.screenshot) ? 'Click for Screenshot' : proj.title + ' icon'}`}
                  width={190}
                  height={100}
                  onClick={(e) => { (proj.screenshot) ? openDialog(i) : undefined }}
                />
                {proj.screenshot && 
                  <AnimatePresence>
                    <motion.dialog 
                      ref={dialogRefs.current[i] as RefObject<HTMLDialogElement>} 
                      onClick={closeDialog}
                      className="border border-white/5 rounded-lg w-[60%] m-auto"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3}
                      }}
                    >
                      <Image
                        src={proj.screenshot}
                        alt={`${proj.title} screenshot`}
                        title={`${proj.title} screenshot`}
                        width={1920}
                        height={1080}
                      />
                    </motion.dialog>
                  </AnimatePresence>
                }
              </div>
            }
            <div className={`absolute bottom-4 ${(i % 2) ? 'left-4' : 'right-4'} sm:left-[unset] sm:right-4 flex gap-x-2`}>
              {proj.github && 
                <a href={proj.github} title="GitHub" className="transition text-lime-600 hover:text-lime-700"><FontAwesomeIcon icon={faGithub} /></a>
              }
              {proj.demo && 
                <a href={proj.demo} title="Demo" className="transition text-lime-600 hover:text-lime-700"><FontAwesomeIcon icon={faDesktop} /></a>
              }
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
