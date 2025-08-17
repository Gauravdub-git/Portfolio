export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="gradient-text">Gaurav Dubey</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-600 mb-6 font-medium">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Passionate Computer Science and Engineering graduate with experience in web development and AI applications. 
              Specialized in MERN Stack development and machine learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors duration-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="mailto:dubey.gauravv@gmail.com" className="text-slate-600 hover:text-primary transition-colors duration-300">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          
                    <div className="flex justify-center animate-float">
            <div className="relative">
              {/* Main Profile Photo */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img 
                  src="/attached_assets/profile-photo.jpg" 
                  alt="Gaurav Dubey - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <i className="fab fa-react text-blue-500 text-xl"></i>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <i className="fab fa-python text-green-500 text-xl"></i>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <i className="fab fa-js text-yellow-500 text-lg"></i>
              </div>
              
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s'}}>
                <i className="fas fa-database text-blue-600 text-lg"></i>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-16 -translate-y-px opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent transform translate-x-16 -translate-y-px opacity-30"></div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
