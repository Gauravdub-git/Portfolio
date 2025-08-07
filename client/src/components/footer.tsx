export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Gaurav Dubey</h3>
            <p className="text-slate-300 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative web applications 
              and AI solutions that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p><i className="fas fa-envelope mr-2"></i> dubey.gauravv@gmail.com</p>
              <p><i className="fas fa-phone mr-2"></i> +91-6268796612</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> Rewa, Madhya Pradesh</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:dubey.gauravv@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-300">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2025 Gaurav Dubey. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
