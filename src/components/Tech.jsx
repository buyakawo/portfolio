import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className='flex flex-col items-center gap-2 w-28'
  >
    <div className='w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer'>
      <img
        src={icon}
        alt={name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
    <p className='text-secondary text-[14px] text-center'>{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <TechCard
          key={technology.name}
          index={index}
          name={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");