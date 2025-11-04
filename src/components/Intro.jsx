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

      {/* Introducción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
      >
        Soy una <span className="text-violet-600 font-semibold">desarrolladora web en formación</span> apasionada por el diseño visual y la experiencia del usuario. Me encanta convertir ideas en proyectos interactivos que mezclan estética, funcionalidad y una identidad propia.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
      >
        Actualmente estoy perfeccionando mis habilidades en 
        <span className="text-violet-600 font-medium"> HTML, CSS, JavaScript, React y SASS</span>, explorando también el mundo de la animación con <span className="font-medium">Framer Motion</span> y la creación de interfaces responsivas modernas.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
      >
        Mi objetivo es seguir creciendo como profesional, trabajar en proyectos que me desafíen y aporten valor real, y seguir disfrutando del proceso creativo detrás de cada línea de código.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-violet-700">Sobre mí</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Soy <span className="font-semibold text-violet-600">Kimberlyn Martínez</span>, una <span className="font-medium">desarrolladora web en formación</span> con gran curiosidad por entender cómo funcionan las cosas y cómo hacer que se vean hermosas. Desde que descubrí el mundo del desarrollo, me cautivó la idea de crear experiencias digitales que inspiren y conecten a las personas.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Disfruto transformar ideas en proyectos funcionales y visualmente cuidados. Me gusta experimentar con colores, animaciones y estructuras limpias, buscando siempre el equilibrio entre la parte técnica y la artística. Programar es para mí una forma de expresar creatividad.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Actualmente sigo aprendiendo y perfeccionando mis conocimientos en <span className="text-violet-600 font-medium">HTML, CSS, JavaScript, React y SASS</span>, con el objetivo de convertirme en una profesional sólida y versátil. Mi meta es formar parte de un equipo donde pueda seguir creciendo, compartir ideas y aportar mi energía y compromiso en cada proyecto.
        </p>

        {/* BOTONES DE BOOTSTRAP */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Botón LinkedIn */}
          <Button
            variant="outline-light"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
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
        </div>
      </motion.div>
    </section>
  )
}
