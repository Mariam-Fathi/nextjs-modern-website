'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.yPaddings} px-7`} id='About' >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| About us" textStyles="text-left"/>
      <br/>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="font-normal flex lg:text-[30px] text-[15px] text-left text-secondary-white"
      >
        IMPRESSIVE MADNESS is a Digital marketing agency that was founded in 2015,  
        Impressive madness is your go-to integrated digital marketing agency. 
        During short years, we’ve been employing our services to our clients and partners with tailored & creative digital services from digital strategies to 
        social media & successful media buying campaigns. Our team of professionals is driven, focused, and constantly 
        ready for new challenges.
      </motion.p>
    </motion.div>
  </section>
);

export default About;