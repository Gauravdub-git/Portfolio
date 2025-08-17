import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GD
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="px-4 py-3 space-y-1">
          {[
            { id: 'home', label: 'Home', icon: 'fas fa-home' },
            { id: 'about', label: 'About', icon: 'fas fa-user' },
            { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
            { id: 'projects', label: 'Projects', icon: 'fas fa-project-diagram' },
            { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
            { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50 shadow-sm'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <i className={`${item.icon} mr-3 w-4`}></i>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
