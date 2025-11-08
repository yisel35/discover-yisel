import React from 'react'
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Intro() {
  return (
    <section
      id="intro"
      className="py-40 px-6 text-center bg-gradient-to-b from-violet-50 via-white to-violet-100"
    >
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
      >
        Hola, soy <span className="text-violet-700">Kimberlyn Martínez</span>
      </motion.h1>

      {/* Nueva presentación */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
      >
        Soy <span className="text-violet-600 font-semibold">Kimberlyn Martínez</span>, desarrolladora web en formación con una fuerte orientación al diseño visual y la experiencia del usuario. Me motiva crear productos digitales que combinen estética, funcionalidad y usabilidad, aportando soluciones que generen impacto real.
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
        {/* Botón LinkedIn */}
        <Button
          variant="outline-light"
          href="https://www.linkedin.com/in/kimberlyn-mart%C3%ADnez-ba8434235/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-semibold text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all"
        >
          💼 Ver LinkedIn
        </Button>

        {/* Botón CV */}
        <Button
          variant="outline-light"
          href="https://www.canva.com/design/DAGwbsrKARI/Fh34H8D0Uvo493Tua3nT4Q/view?utm_content=DAGwbsrKARI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8bb8f6b2d2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-semibold text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all"
        >
          📄 Ver mi CV
        </Button>
      </motion.div>
    </section>
  )
}

