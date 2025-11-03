import React from 'react'

export default function Footer() {
  return (
    
    <footer className="footer-container py-6 text-center mt-10 shadow-2xl"> 
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Kimberlyn Martínez</span> — 
        Desarrolladora Web en formación 💻
      </p>

      <div className="mt-3 flex justify-center gap-5">
        <a
          href="mailto:kimberlynyisel35@gmail.com"
          className="hover:text-white transition-colors" 
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}