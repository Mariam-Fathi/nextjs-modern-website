'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { workData } from '../constants';
import { staggerContainer } from '../utils/motion';
import { Work, TitleText, TypingText } from '../components';

const OurWork = () => (
  <section className={`${styles.yPaddings} px-7`} id="Our Work">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Our Work" textStyles="text-center"  />
      <br/>
      <br/>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {workData.map((item, index) => (
          <Work key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default OurWork;