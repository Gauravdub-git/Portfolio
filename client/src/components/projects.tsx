export default function Projects() {
  const projects = [
    {
      title: "Potato Disease Classification",
      description: "CNN-based image classification model detecting potato leaf diseases (Early Blight, Late Blight, Healthy) with 95%+ accuracy using TensorFlow and deployed with FastAPI.",
      summary: "Developed a deep learning model that can identify potato plant diseases from images with high accuracy. The system helps farmers detect early signs of disease to prevent crop loss.",
      technologies: ["CNN", "TensorFlow", "FastAPI", "Streamlit"],
      category: "ML Project",
      metrics: "95%+ Accuracy",
      categoryColor: "green-500",
      gradient: "from-emerald-400 to-teal-500",
      githubUrl: "https://github.com/Gauravdub-git/Potato-disease-classification.git"
    },
    {
      title: "Doctor Appointment System",
      description: "Full-stack healthcare web application using MERN stack with role-based dashboards for patients and doctors, featuring secure authentication and appointment management.",
      summary: "Built a comprehensive healthcare platform where patients can book appointments and doctors can manage their schedules. Features secure authentication and real-time updates.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Full Stack",
      metrics: "Multi-role System",
      categoryColor: "blue-500",
      gradient: "from-blue-400 to-indigo-500",
      githubUrl: "https://github.com/Gauravdub-git/Doctor_Appointment_System.git"
    },
    {
      title: "StudyNotion - EdTech Platform",
      description: "Interactive educational technology platform with dynamic course management, cloud storage integration, and real-time notifications using WebSockets.",
      summary: "Created an educational platform for online learning with course management, video streaming, and interactive features. Includes cloud storage and real-time notifications.",
      technologies: ["React.js", "WebSockets", "Cloud Storage", "Real-time"],
      category: "EdTech",
      metrics: "30% Performance Boost",
      categoryColor: "purple-500",
      gradient: "from-purple-400 to-pink-500",
      githubUrl: "https://github.com/your-username/studynotion-platform"
    },
    {
      title: "Disease Outbreak Prediction System",
      description: "Machine Learning-based health prediction system for early detection of Diabetes, Heart Disease, and Parkinson's Disease using multiple ML models and interactive Streamlit interface.",
      summary: "Developed a healthcare AI system that predicts multiple diseases using machine learning algorithms. Provides early detection capabilities for better health outcomes.",
      technologies: ["Scikit-learn", "Streamlit", "Logistic Regression", "SVM"],
      category: "Healthcare AI",
      metrics: "Multi-Disease Detection",
      categoryColor: "red-500",
      gradient: "from-red-400 to-orange-500",
      githubUrl: "https://github.com/Gauravdub-git/Prediction-of-Disease-Outbreaks-.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in web development, machine learning, and full-stack applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 cursor-pointer block"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Header with Category and Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`bg-${project.categoryColor} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm`}>
                    {project.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
                    <i className="fas fa-eye mr-1.5 text-blue-500"></i>
                    {project.metrics}
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Summary Box with Modern Styling */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl opacity-60"></div>
                  <div className="relative p-4 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {project.summary}
                    </p>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <div className="flex items-center text-xs text-slate-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">{project.technologies.length} Technologies</span>
                  </div>
                  <div className="flex items-center text-xs text-blue-600 font-medium">
                    <i className="fab fa-github mr-1.5"></i>
                    View on GitHub
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
