'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Profissionaliza
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}> EAD</h1>
          {/* <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}> D</h1> */}
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
      >

        <img
          src="/Fundo2.webp"
          alt="cover"
          className="w-full sm:h-[500px] pt-10 object-cover z-10 relative object-left-top"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
