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
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
