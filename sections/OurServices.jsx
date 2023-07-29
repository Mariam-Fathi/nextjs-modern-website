'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { servicesData } from '../constants';
import { staggerContainer } from '../utils/motion';
import { Service, TitleText, TypingText } from '../components';

const OurServices = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.yPaddings} px-7`} id="Services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <br />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
        >
          {servicesData.map((world, index) => (
            <Service
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;