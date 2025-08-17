export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Gaurav Dubey
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Computer Science Engineering student passionate about creating innovative web applications 
              and AI solutions that make a difference.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a href="https://github.com/Gauravdub-git" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <i className="fab fa-github text-white"></i>
              </a>
              <a href="mailto:dubey.gauravv@gmail.com" className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <i className="fas fa-envelope text-white"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About', icon: 'fas fa-user' },
                { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
                { id: 'projects', label: 'Projects', icon: 'fas fa-project-diagram' },
                { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
                { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center text-slate-300 hover:text-white transition-all duration-300 group"
                  >
                    <i className={`${item.icon} mr-3 w-4 group-hover:text-blue-400 transition-colors duration-300`}></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">dubey.gauravv@gmail.com</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                  <i className="fas fa-phone text-green-400"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">+91-6268796612</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-purple-400"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">Rewa, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Gaurav Dubey. All rights reserved. Built with 
            <span className="text-red-400 mx-1">❤</span> 
            and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
