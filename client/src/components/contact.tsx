import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}

Message:
${data.message}
      `);
      
      // Open email client
      const mailtoLink = `mailto:dubey.gauravv@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email client opened!",
        description: "Your email client should open with a pre-filled message. Please send the email to complete the process.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error opening email client",
        description: "Please email me directly at dubey.gauravv@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    // Create a link to the PDF resume
    const a = document.createElement('a');
    a.href = '/attached_assets/Gaurav_Dubey_Resume.pdf';
    a.download = 'Gaurav_Dubey_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life. 
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Start a Conversation</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I'm currently seeking opportunities for internships, full-time positions, or freelance projects 
                in web development and AI/ML. Feel free to reach out if you'd like to collaborate!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">dubey.gauravv@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-success text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600">+91-6268796612</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Location</h4>
                  <p className="text-slate-600">Rewa, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-semibold text-slate-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:dubey.gauravv@gmail.com" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <Input
                    {...register("firstName")}
                    placeholder=""
                    className={`border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none ${errors.firstName ? "border-red-500" : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    {...register("lastName")}
                    placeholder=""
                    className={`border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none ${errors.lastName ? "border-red-500" : ""}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder=""
                  className={`border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <Input
                  {...register("subject")}
                  placeholder=""
                  className={`border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  {...register("message")}
                  rows={5}
                  placeholder=""
                  className={`resize-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Email <i className="fas fa-envelope ml-2"></i>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Resume Download Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a detailed overview of my skills, experience, and projects in a comprehensive text format.
            </p>
            <Button 
              onClick={downloadResume}
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
