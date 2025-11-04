import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt  className="xs:w-[250px] w-full">
      <motion.div 
      variants={faceIn("right","spring", 0.5 * index)}>

      </motion.div>
    

    </Tilt>
  )
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sou um desenvolvedor Front-end com 3 anos de
        experiência, entregando resultados reais por meio da
        criação de interfaces modernas e responsivas, focadas
        na melhor experiência do usuário. Atualmente trabalho
        como freelancer, aprimorando minhas habilidades em
        React, TypeScript, Angular, Next.js, Tailwind e
        Redux, além de expandir meus conhecimentos em
        Back-end com Node.js, Spring Boot, Java,
        JavaScript e Python, aplicando essas tecnologias em
        meus projetos.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index= {index} {...service} />
        
        ))}
      </div>
    </>
  )
}

export default About