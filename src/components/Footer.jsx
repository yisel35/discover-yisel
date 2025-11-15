import React from 'react'

export default function Footer() {
  return (
    
    <footer className="footer-container py-6 text-center mt-10 shadow-2xl"> 
      <p>
        © {new Date().getFullYear()} <span className="font-semibold">Kimberlyn Martínez</span> — 
        Desarrolladora Web en formación 💻
      </p>

      <div className="mt-3 flex justify-center gap-5">
        <a
          href="mailto:kimberlynyisel35@gmail.com"
          className="px-6 py-2 rounded-full border-2 border-violet-600 text-violet-600 font-medium hover:bg-violet-600 hover:text-white transition-all shadow-sm" 
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}