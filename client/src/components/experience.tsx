export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My journey through education and professional development in computer science and technology
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          
          <div className="space-y-12">
            {/* Current Internship */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-end mb-3">
                    <span className="bg-success text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Current</span>
                    <h3 className="text-xl font-semibold text-slate-900">TechSaksham - AICTE Internship</h3>
                  </div>
                  <p className="text-slate-600 mb-2 font-medium">AI: Transformative Learning</p>
                  <p className="text-slate-500 text-sm mb-4">Jan 2025 - Feb 2025</p>
                  <p className="text-slate-700 leading-relaxed">
                    Developing Machine Learning-based disease prediction systems for early detection of 
                    Diabetes, Heart Disease, and Parkinson's Disease using multiple ML models and 
                    interactive web applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 justify-end">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Machine Learning</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Streamlit</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Healthcare AI</span>
                  </div>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="flex-1 pl-8">
                {/* Empty space for alternating layout */}
              </div>
            </div>
            
            {/* Education */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8">
                {/* Empty space for alternating layout */}
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Education</span>
                    <h3 className="text-xl font-semibold text-slate-900">B.Tech Computer Science & Engineering</h3>
                  </div>
                  <p className="text-slate-600 mb-2 font-medium">Rewa Engineering College, Rewa</p>
                  <p className="text-slate-500 text-sm mb-4">2021 - 2025 | Madhya Pradesh</p>
                  <p className="text-slate-700 leading-relaxed">
                    Comprehensive computer science education covering programming, data structures, 
                    database management, operating systems, and modern web development technologies. 
                    Active participant in technical clubs and events.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Computer Science</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Software Engineering</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Project Management</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certifications Section */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-end mb-3">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Certifications</span>
                    <h3 className="text-xl font-semibold text-slate-900">Professional Development</h3>
                  </div>
                  <p className="text-slate-600 mb-4 font-medium">Continuous Learning Journey</p>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center justify-end">
                      <span className="mr-2">Mastering Data Structures and Algorithms</span>
                      <i className="fas fa-certificate text-yellow-500"></i>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="mr-2">Full Stack Web Development</span>
                      <i className="fas fa-certificate text-yellow-500"></i>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="mr-2">C++ Programming Foundation</span>
                      <i className="fas fa-certificate text-yellow-500"></i>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="mr-2">Python Pro Bootcamp (100 Days of Code)</span>
                      <i className="fas fa-certificate text-yellow-500"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="flex-1 pl-8">
                {/* Empty space for alternating layout */}
              </div>
            </div>
            
            {/* Extracurricular Activities */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8">
                {/* Empty space for alternating layout */}
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium mr-3">Activities</span>
                    <h3 className="text-xl font-semibold text-slate-900">Leadership & Sports</h3>
                  </div>
                  <p className="text-slate-600 mb-4 font-medium">Extracurricular Involvement</p>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center">
                      <i className="fas fa-volleyball-ball text-accent mr-3"></i>
                      <span>Active volleyball player in college tournaments, promoting teamwork and leadership</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-lightbulb text-accent mr-3"></i>
                      <span>E-Cell Club member, organizing workshops and events to encourage entrepreneurship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
