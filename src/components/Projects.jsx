import React from 'react';
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import MundoArcaneImg from '/images/arcane.png';
import TurismoVenezuelaImg from '/images/venezuela.png';
import BancoShot1 from '/images/banco.png';
import BancoShot2 from '/images/banco1.png';
import BancoShot3 from '/images/banco2.png';
import BancoShot4 from '/images/banco3.png';

const proyectos = [
  {
    title: "Mundo Arcane",
    tech: "HTML, CSS, JS",
    desc:"Sitio interactivo para una comunidad gamer inspirado en la serie Arcane. Desarrollado con un enfoque mobile-first, integra animaciones personalizadas con JavaScript y una estructura visual dinámica. El diseño equilibra una estética oscura con detalles vibrantes, ofreciendo una experiencia inmersiva tanto en desktop como en móvil.",
    image: MundoArcaneImg,
    demoLink: "https://mundoarcane.netlify.app/",
  },
  {
    title: "Turismo Venezuela",
    tech: "Bootstrap, JS, SASS",
    desc: "Plataforma informativa y visualmente atractiva que promueve los principales destinos turísticos de Venezuela. Incluye carruseles dinámicos, secciones de recomendaciones y un diseño completamente responsive. Desarrollado con Bootstrap y SASS para lograr una navegación fluida, moderna y optimizada para todos los dispositivos.",
    image: TurismoVenezuelaImg,
    demoLink: "https://turismovenezuela.netlify.app/",
  },
  {
    title: "Simulador de Banco",
    tech: "JavaScript, LocalStorage",
    desc: "Aplicación web funcional que simula operaciones bancarias básicas como depósitos, retiros y consultas de saldo. Utiliza almacenamiento local para mantener los datos del usuario y validación en tiempo real de las operaciones. Incluye una interfaz limpia y educativa orientada a practicar lógica de programación y gestión de datos.",
    demoLink: null,
    captures: [BancoShot1, BancoShot2, BancoShot3, BancoShot4],
  },
];


const BootstrapProjectCarousel = ({ images }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl flex items-center justify-center bg-transparent h-[22rem]">
      <Carousel data-bs-theme="dark" interval={null} controls={images.length > 1} indicators={false}>
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <img
              
              src={imgSrc} 
              className="d-block w-100" 
              alt={`Captura ${index + 1}`}
              style={{
               
                height: "100%", 
                objectFit: "contain", 
                backgroundColor: "transparent",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


export default function Projects() {
  return (
    <section id="projects">
      <h1>
        Proyectos Destacados
      </h1>
      <h2>
        💡 Donde la idea se transforma en código funcional 🎨<br />
        ¡Explora, haz clic y deja que la magia del desarrollo te sorprenda! 🚀<br />
        Si el proyecto no está desplegado, disfruta recorriendo sus pantallas interactivas. 🖱️✨
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {proyectos.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            
            {p.demoLink ? (
              <a
                href={p.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${p.title}`}
                className="block flex justify-center items-center bg-transparent"
                
                style={{ minHeight: "22rem", maxHeight: "22rem" }} 
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="max-h-full max-w-full transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </a>
            ) : p.captures ? (
              <BootstrapProjectCarousel images={p.captures} />
            ) : (
              <div 
                className="flex justify-center items-center bg-transparent" 
                
                style={{ minHeight: "22rem", maxHeight: "22rem" }}
              >
                <img
                  src={p.image}
                  className="max-h-full max-w-full"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-violet-600 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{p.tech}</p>
              <p className="mt-2 text-gray-600 text-sm flex-grow">{p.desc}</p>

              <div className="mt-4 flex justify-center">
                {p.demoLink && (
                  <Button
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="bg-violet-600 hover:bg-violet-700 border-none px-6 py-2 rounded-full shadow-md text-white font-bold"
                  >
                    🚀 Visitar Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}