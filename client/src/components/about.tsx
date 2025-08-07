export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Passionate Developer & Problem Solver</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a Computer Science and Engineering student at Rewa Engineering College, passionate about creating 
              innovative web applications and AI solutions. My journey in technology is driven by curiosity and 
              the desire to solve real-world problems through code.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With hands-on experience in the MERN stack and machine learning frameworks, I enjoy building 
              full-stack applications that make a difference. I'm always eager to learn new technologies 
              and contribute to meaningful projects.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                <div className="text-slate-600">ML Model Accuracy</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                Education
              </h4>
              <p className="text-slate-700">
                <strong>B.Tech in Computer Science and Engineering</strong><br />
                Rewa Engineering College, Rewa<br />
                2021 - 2025 | Madhya Pradesh
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-map-marker-alt text-success mr-3"></i>
                Location
              </h4>
              <p className="text-slate-700">
                Rewa, Madhya Pradesh, India<br />
                <span className="text-slate-600">Available for remote work</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-heart text-red-500 mr-3"></i>
                Interests
              </h4>
              <p className="text-slate-700">
                Volleyball, Entrepreneurship (E-Cell Club), Open Source Contribution, 
                AI/ML Research, Web Development Trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
