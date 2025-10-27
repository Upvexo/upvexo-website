import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8 md:mb-12"></div>
        
        <p className="text-lg md:text-xl text-cyan-100 mb-8 md:mb-12 px-4">
          Ready to elevate your business? Let's start a conversation.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <a 
            href="mailto:info@upvexo.com" 
            className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 md:p-8 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
            
            <Mail className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-cyan-200 text-sm md:text-base break-all">info@upvexo.com</p>
          </a>
          <a 
            href="tel:+1234567890" 
            className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 md:p-8 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
            
            <Phone className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-cyan-200 text-sm md:text-base">+94 76 031 5800</p>
          </a>
        </div>
        
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
            <Linkedin className="w-6 h-6 text-cyan-400" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            aria-label="Facebook"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
            <Facebook className="w-6 h-6 text-cyan-400" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            aria-label="Instagram"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
            <Instagram className="w-6 h-6 text-cyan-400" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            aria-label="Twitter"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
            <Twitter className="w-6 h-6 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  )
}