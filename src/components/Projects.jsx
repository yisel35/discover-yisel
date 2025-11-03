import { motion } from "framer-motion";

const proyectos = [
  {
    title: "Mundo Arcane",
    tech: "HTML, CSS, JS",
    desc: "Sitio interactivo para comunidad gamer.",
    image: "/images/arcane.png",
    link: "https://mundoarcane.netlify.app/"
  },
  {
    title: "Turismo Venezuela",
    tech: "Bootstrap, JS, SASS",
    desc: "Plataforma informativa responsive.",
    image: "/images/venezuela.png",
    link: "https://turismovenezuela.netlify.app/"
  },
  {
    title: "Simulador de Banco",
    tech: "JavaScript, LocalStorage",
    desc: "Simulador simple para transacciones locales.",
    image: "/images/banco.png"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>
        Proyectos destacados
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6¿">
        {proyectos.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-lg transition-shadow duration-300"
          >
            {p.link ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              </a>
            ) : (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-xl font-semibold text-violet-600">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500">{p.tech}</p>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
