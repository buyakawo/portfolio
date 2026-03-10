import {motion} from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, isZh } = useLanguage();
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e75eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {isZh ? t("hero.greeting") : "Hi, I'm"}{" "}
            <span className='text-[#e75eff]'>Wissal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {isZh ? t("hero.subtitle") : "A Full stack engineer"}
            <br className='sm:block hidden' />
            {isZh ? t("hero.subtitle2") : "who likes studying and working along the stack"}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* The scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{y: [0,24,0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero