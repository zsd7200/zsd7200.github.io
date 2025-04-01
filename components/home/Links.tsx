'use client';

import { manrope } from "@/components/util/Fonts";
import { motion } from 'motion/react';
import { linksData } from '@/components/util/LinksData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Links() {
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
        className="mb-8"
      >
        <h1 className={`${manrope.className} text-4xl sm:text-5xl font-[700]`}>links</h1>
      </motion.div>
      <div className={`${manrope.className} flex justify-center items-center flex-wrap lg:flex-nowrap w-[95vw] h-[88vh]`}>
        <div className="flex justify-center items-center gap-8 flex-wrap lg:flex-nowrap">
          {linksData.map((link, i) => (
            <motion.div 
              key={link.short} 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + (0.2 * i),
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.3}
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-center w-[40%]"
            >
              <a href={link.link} title={link.name} className="flex flex-col justify-center items-center group bg-white rounded-lg w-30 h-30">
                <span className="text-6xl pb-2">
                  <FontAwesomeIcon icon={link.icon ?? faLink} className="transition text-lime-600 group-hover:text-lime-700 w-full h-full" />
                </span>
                <span className="text-xs italic text-black lowercase">{link.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
