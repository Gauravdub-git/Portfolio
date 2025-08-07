export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">C++</span>
                <div className="w-24 h-2 bg-slate-200 rounded-full">
                  <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Python</span>
                <div className="w-24 h-2 bg-slate-200 rounded-full">
                  <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">C</span>
                <div className="w-24 h-2 bg-slate-200 rounded-full">
                  <div className="w-16 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Web Development */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Express.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">RESTful APIs</span>
            </div>
          </div>
          
          {/* Core CS Concepts */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Core CS Concepts</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center"><i className="fas fa-check text-success mr-2"></i> Data Structures</li>
              <li className="flex items-center"><i className="fas fa-check text-success mr-2"></i> Database Management</li>
              <li className="flex items-center"><i className="fas fa-check text-success mr-2"></i> Object Oriented Programming</li>
              <li className="flex items-center"><i className="fas fa-check text-success mr-2"></i> Operating Systems</li>
            </ul>
          </div>
          
          {/* AI/ML Technologies */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-robot text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">AI/ML Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">CNN</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Streamlit</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">FastAPI</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Scikit-learn</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Logistic Regression</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Decision Trees</span>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">GitHub</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">VS Code</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Agile</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">JWT</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">bcrypt</span>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Certifications</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start"><i className="fas fa-medal text-yellow-500 mr-2 mt-1"></i> Data Structures & Algorithms (Udemy)</li>
              <li className="flex items-start"><i className="fas fa-medal text-yellow-500 mr-2 mt-1"></i> Full Stack Web Development (CodeHelp)</li>
              <li className="flex items-start"><i className="fas fa-medal text-yellow-500 mr-2 mt-1"></i> C++ Programming (GeeksforGeeks)</li>
              <li className="flex items-start"><i className="fas fa-medal text-yellow-500 mr-2 mt-1"></i> Python Pro Bootcamp (Udemy)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
