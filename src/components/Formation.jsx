import React from 'react'
import { motion } from 'framer-motion'

export default function Formation() {
  const cursos = [
    {
      title: 'Desarrollo Web - Coderhouse',
      date: 'Sep 2024 - Nov 2024',
      desc: 'Maquetación, responsive design, HTML5, CSS3, y Bootstrap.',
      link: 'https://pub.coderhouse.com/legacy-certificates/67575e559f7020f0171957c3?lang=es'
    },
    {
      title: 'JavaScript Avanzado - Coderhouse',
      date: 'Nov 2024 - Feb 2025',
      desc: 'Asincronía, promesas, patrones de diseño y optimización del DOM.',
      link: 'https://pub.coderhouse.com/legacy-certificates/66e5f77d3999254fea9489b6?lang=es'
    },
    {
      title: 'Python/Django - Coderhouse',
      date: 'May 2024 - Ago 2024',
      desc: 'Desarrollo backend, APIs REST, autenticación y bases de datos PostgreSQL.',
      link: 'https://pub.coderhouse.com/certificates/a9ba38be-5d21-4381-90bd-617077f8c392?v=1'
    },
    {
      title: 'React JS - Coderhouse',
      date: 'Mar 2025 - Jun 2025',
      desc: 'Hooks, Context API, rutas y optimización de componentes.',
      link: null 
    }
  ]

  return (
    <section id="formation">

      <h2>Formación</h2>

      <div className="space-y-10 max-w-4xl mx-auto px-6">
        {cursos.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative md:w-1/2 p-5 bg-white rounded-xl shadow-sm border border-violet-100 hover:shadow-md transition-transform 
              ${i % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'}`}
          >
            {/* Punto del timeline */}
            <div
              className={`hidden md:block absolute top-6 ${
                i % 2 === 0 ? '-left-[7px]' : '-right-[7px]'
              } w-3 h-3 bg-violet-500 rounded-full border-2 border-white shadow-md`}
            ></div>

            <div className="flex justify-between items-center flex-wrap gap-2">
              <strong
                className={`text-lg ${
                  c.link ? 'text-violet-700' : 'text-violet-400 italic'
                }`}
              >
                {c.title}
              </strong>
              <span className="text-sm text-gray-500">{c.date}</span>
            </div>

            <p className="text-gray-600 mt-1">{c.desc}</p>

            {c.link ? (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-violet-600 font-medium hover:underline text-sm"
              >
                Ver certificado →
              </a>
            ) : (
              <p className="text-sm text-gray-400 mt-2 italic">Certificado en curso</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
