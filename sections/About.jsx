'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Sobre nós"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Nós somos uma equipe{' '}
        <span className="font-extrabold">apaixonada por educação </span> a
        Profissionaliza EAD iniciou seus trabalhos em 2010, com o desejo de
        Preparar Jovens para um Futuro Promissor. Em 2019 a pandemia nos
        trouxe um desafio, desenvolver Ensino EAD Atrativo, Dinâmico e
        Dinâmico e Divertido,{' '}
        <span className="text-primary-400">
          onde os Jovens tivessem interesse em Estudar,
        </span>
        para isso foi necessário desenvolver metodologias, recursos e
        tecnologias exclusivas e hoje os números falam por si só, são mais
        de 40 Mil Jovens.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
