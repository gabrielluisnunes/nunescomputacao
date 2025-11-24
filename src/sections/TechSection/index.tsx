'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { DiJava, DiHtml5, DiCss3, DiDatabase, DiAws } from 'react-icons/di';
import { SiSpring, SiAngular, SiOracle, SiMysql, SiNextdotjs, SiTypescript, SiStyledcomponents, SiFramer } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

import * as S from './styles';


const techStack = [
  
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Front-end', color: '#000000' },
  { name: 'React', icon: <FaReact />, category: 'Front-end', color: '#61DAFB' },
  { name: 'Angular', icon: <SiAngular />, category: 'Front-end', color: '#DD0031' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'Front-end', color: '#3178C6' },
  { name: 'Styled Components', icon: <SiStyledcomponents />, category: 'UI/UX', color: '#DB7093' },
  { name: 'Framer Motion', icon: <SiFramer />, category: 'UI/UX', color: '#0055FF' },
  
  
  { name: 'Java', icon: <DiJava />, category: 'Back-end', color: '#007396' },
  { name: 'Spring Boot', icon: <SiSpring />, category: 'Back-end', color: '#6DB33F' },

  
  { name: 'Oracle DataBase', icon: <SiOracle />, category: 'Database', color: '#F80000' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Database', color: '#4479A1' },
  
  
  { name: 'AWS', icon: <DiAws />, category: 'Cloud', color: '#FF9900' },
  { name: 'Oracle APEX', icon: <SiOracle />, category: 'Low-Code', color: '#FF0000' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 10, delay: 0.2 },
  },
};

const TechSection: React.FC = () => {
  const loopedTechStack = [...techStack, ...techStack];

  return (
    <S.TechWrapper id="tech">
      <S.Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.Title as="h2">
          Tecnologias que <span>Utilizamos</span>
        </S.Title>
        <S.Subtitle>
          Trabalhamos com um stack moderno e robusto para garantir a estabilidade e o futuro das suas soluções.
        </S.Subtitle>

        {}
        <S.CarouselTrack>
          <S.IconsWrapper>
            {}
            {loopedTechStack.map((tech, index) => (
              <S.TechIconItem 
                key={`${tech.name}-${index}`} 
                title={tech.name} 
              >
                <S.TechIcon color={tech.color}>
                  {tech.icon}
                </S.TechIcon>
                <S.TechName>{tech.name}</S.TechName>
              </S.TechIconItem>
            ))}
          </S.IconsWrapper>
        </S.CarouselTrack>
      </S.Container>
    </S.TechWrapper>
  );
};

export default TechSection;