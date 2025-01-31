'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Profissionaliza
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className="flex flex-row items-center justify-center">
            <h1 className={styles.heroHeading}> EAD</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
        >
          <img
            src="/Fundo2.webp"
            alt="cover"
            className="w-full sm:h-[500px] pt-10 object-cover z-10 relative object-left-top"
          />
        </motion.div>
      </motion.div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white w-96 rounded-lg shadow-lg p-6"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()} // Impede o clique no conteúdo de fechar o modal
          >
            <div className=" text-center object-center justify-center place-items-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M40,40H8c-0.717,0-1.377-0.383-1.734-1.004c-0.356-0.621-0.354-1.385,0.007-2.004l16-28C22.631,8.378,23.289,8,24,8s1.369,0.378,1.728,0.992l16,28c0.361,0.619,0.363,1.383,0.007,2.004S40.716,40,40,40z" /><path fill="#5D4037" d="M22,34.142c0-0.269,0.047-0.515,0.143-0.746c0.094-0.228,0.229-0.426,0.403-0.592c0.171-0.168,0.382-0.299,0.624-0.393c0.244-0.092,0.518-0.141,0.824-0.141c0.306,0,0.582,0.049,0.828,0.141c0.25,0.094,0.461,0.225,0.632,0.393c0.175,0.166,0.31,0.364,0.403,0.592C25.953,33.627,26,33.873,26,34.142c0,0.27-0.047,0.516-0.143,0.74c-0.094,0.225-0.229,0.419-0.403,0.588c-0.171,0.166-0.382,0.296-0.632,0.392C24.576,35.954,24.3,36,23.994,36c-0.307,0-0.58-0.046-0.824-0.139c-0.242-0.096-0.453-0.226-0.624-0.392c-0.175-0.169-0.31-0.363-0.403-0.588C22.047,34.657,22,34.411,22,34.142 M25.48,30h-2.973l-0.421-12H25.9L25.48,30z" /></svg>
              <h2 className="text-xl font-semibold mb-4">Aviso Importante</h2>
              <p className="text-gray-600 mb-4">
                Estão usando nossa marca para aplicar golpes!!!
              </p>
              <p className="text-red mb-4 text-lg font-bold ">
                +55 11 98238-7546
              </p>
              <p className="text-red mb-4 text-lg font-bold ">
                Esse número não é nosso
              </p>
              <p className="text-gray-600 mb-4">
                Caso precise de ajuda clique em AJUDA ou clique em CONTINUAR.
              </p>
              <div className="flex justify-end gap-2">
                <a
                  href="https://nwdsk.co/c17SA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  AJUDA
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-lightgrey hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  CONTINUAR
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
