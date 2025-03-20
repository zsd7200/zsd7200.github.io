import { manrope } from "@/components/util/Fonts";
import * as motion from "motion/react-client"

export default function Title() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
        animate={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
        transition={{
          duration: 0.4,
        }}
      >
        <h1 className={`${manrope.className} text-5xl font-[200]`}>zack dunham</h1>
      </motion.div>
      <motion.div
        initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
        animate={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
      >
        <h2 className={`${manrope.className} text-4xl font-[500]`}>web developer</h2>
      </motion.div>
    </div>
  );
}
