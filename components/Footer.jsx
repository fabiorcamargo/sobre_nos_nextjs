'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Equipe de Colaboradores
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          aria-label="Junte-se à equipe"
        >
          <img
            src="/arrow.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Faça Parte
          </span>
        </button>
        <br />
        <h5 className="font-bold md:text-[44px] text-[24px] text-white">
          Em breve...
        </h5>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            PROFISSIONALIZA EAD
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2014 - 2024 Profissionaliza EAD. Todos os direitos reservados.
          </p>

          {/* <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>

    {/* Script do Chatwoot carregado corretamente no Next.js */}
    {/* <Script
      strategy="lazyOnload"
      src="https://chat.profissionalizaead.com.br/packs/js/sdk.js"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: '5DmcKF5a6CgjabJNhHsQGYDr',
            baseUrl: 'https://chat.profissionalizaead.com.br',
          });
        }
      }}
    /> */}
  </motion.footer>
);

export default Footer;
