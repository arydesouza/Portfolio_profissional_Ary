import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";

import { styles } from '../styles';
import { github, web } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {source_code_link && (
              <div 
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h1/2 object-contain"
                />
              </div>
            )}
            {live_demo_link && (
              <div 
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={web}
                  alt="deploy"
                  className="w-1/2 h1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>


        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
        ))}

        </div>
      </Tilt>
    </motion.div>
  )


}


const Works = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Meu trabalho</p>
        <h2 className={styles.sectionHeadText}>Projetos.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn ("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Os projetos a seguir demonstram minhas habilidades e experiência por meio de
          exemplos práticos do meu trabalho. Cada projeto é descrito brevemente com
          links para repositórios de código e demonstrações ao vivo. Isso reflete minha
          capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias,
          e gerenciar projetos com eficácia.

        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}

          />
        ))}

      </div>
    </div>
    
  )
}

export default SectionWrapper(Works, "");