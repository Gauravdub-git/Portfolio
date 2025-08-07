export default function Projects() {
  const projects = [
    {
      title: "Potato Disease Classification",
      description: "CNN-based image classification model detecting potato leaf diseases (Early Blight, Late Blight, Healthy) with 95%+ accuracy using TensorFlow and deployed with FastAPI.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["CNN", "TensorFlow", "FastAPI", "Streamlit"],
      category: "ML Project",
      metrics: "95%+ Accuracy",
      categoryColor: "green-500"
    },
    {
      title: "Doctor Appointment System",
      description: "Full-stack healthcare web application using MERN stack with role-based dashboards for patients and doctors, featuring secure authentication and appointment management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Full Stack",
      metrics: "Multi-role System",
      categoryColor: "blue-500"
    },
    {
      title: "StudyNotion - EdTech Platform",
      description: "Interactive educational technology platform with dynamic course management, cloud storage integration, and real-time notifications using WebSockets.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "WebSockets", "Cloud Storage", "Real-time"],
      category: "EdTech",
      metrics: "30% Performance Boost",
      categoryColor: "purple-500"
    },
    {
      title: "Disease Outbreak Prediction System",
      description: "Machine Learning-based health prediction system for early detection of Diabetes, Heart Disease, and Parkinson's Disease using multiple ML models and interactive Streamlit interface.",
      image: "https://images.unsplash.com/photo-1559757175-0eb7c8371d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Scikit-learn", "Streamlit", "Logistic Regression", "SVM"],
      category: "Healthcare AI",
      metrics: "Multi-Disease Detection",
      categoryColor: "red-500"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`bg-${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    <i className="fas fa-eye mr-1"></i> {project.metrics}
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
