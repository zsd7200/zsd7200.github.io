import { manrope } from "@/components/util/Fonts";
import * as motion from "motion/react-client"

export default function About() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
        whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
        transition={{
          duration: 0.4,
        }}
        viewport={{ once: true }}
      >
        <h1 className={`${manrope.className} text-5xl font-[700]`}>about me</h1>
      </motion.div>
    </div>
  );
}
