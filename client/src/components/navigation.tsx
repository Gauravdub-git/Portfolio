import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">GD</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-primary focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => scrollToSection('home')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block px-3 py-2 text-slate-700 hover:text-primary w-full text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
