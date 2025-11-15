import React from 'react'
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Intro() {
  const wavingTransition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    delay: 0.8

  };
  
 
  const waveVariants1 = {
    initial: { rotate: 0 },
    animate: { rotate: [-15, 15, -15, 0] }, 
  };


  return (
    <section id="intro" className="py-40 px-6 text-center bg-gradient-to-b from-violet-50 via-white to-violet-100">
      <div 
        className="intro-card max-w-4xl mx-auto p-8 md:p-12 bg-gray-900 bg-opacity-80 shadow-2xl rounded-2xl" 
        style={{ backdropFilter: 'blur(5px)' }} 
      >
        
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
      >
       
        <motion.span
          variants={waveVariants1}
          initial="initial"
          animate="animate"
          transition={wavingTransition}
          style={{ display: 'inline-block', marginRight: '5px' }} 
        >
          👋
        </motion.span>
        
        Hola, Soy <span className="text-violet-600">Kimberlyn M.✌️</span>
        
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
      >
      <span className="text-violet-600 font-semibold"></span>desarrolladora web en formación con una fuerte orientación al diseño visual y la experiencia del usuario. Me motiva crear productos digitales que combinen estética, funcionalidad y usabilidad, aportando soluciones que generen impacto real.
      </motion.p>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
      >
        Cuento con conocimientos en <span className="text-violet-600 font-medium">HTML, CSS, JavaScript, React y SASS</span>, y actualmente profundizo en animaciones con <span className="font-medium">Framer Motion</span> y en la construcción de interfaces modernas y responsivas. Me interesa seguir ampliando mis habilidades en frameworks y herramientas que potencien el desarrollo frontend.
      </motion.p>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
      >
        Tengo una mirada equilibrada entre lo técnico y lo creativo: disfruto diseñar interfaces limpias, intuitivas y bien estructuradas, cuidando cada detalle del proceso. Me considero una persona curiosa, comprometida y en constante aprendizaje, con ganas de integrarme a un equipo donde pueda seguir creciendo, colaborar activamente y contribuir al desarrollo de proyectos innovadores.
      </motion.p>

      {/* BOTONES DE BOOTSTRAP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <Button
          variant="outline-light"
          href="https://www.linkedin.com/in/kimberlyn-mart%C3%ADnez-ba8434235/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-semibold text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all"
        >
          💼 Ver LinkedIn
        </Button>

        <Button
          variant="outline-light"
          href="https://www.canva.com/design/DAG45HsH5WI/QIwfnOZ1UONcUZiTcyB25A/view?utm_content=DAG45HsH5WI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc36c6817e2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-semibold text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all"
        >
          📄 Ver mi CV

         </Button>

        <Button
            variant="outline-light"
            href="https://github.com/yisel35" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-semibold bg-violet-700 border-violet-700 text-white hover:bg-violet-800 transition-all"
          >
            🐙 Ver GitHub
        </Button>
      </motion.div>
    </section>
  )
}