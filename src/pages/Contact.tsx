
import { useState } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    expertise: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. Our agricultural experts will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        expertise: "general"
      });
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-agri-green-500" />,
      title: "Phone Support",
      details: "(123) 456-7890",
      subtext: "Available Mon-Fri, 9AM-5PM"
    },
    {
      icon: <Mail className="h-5 w-5 text-agri-green-500" />,
      title: "Email",
      details: "info@agriinfohub.com",
      subtext: "We'll respond within 24-48 hours"
    },
    {
      icon: <MapPin className="h-5 w-5 text-agri-green-500" />,
      title: "Agricultural Extension Office",
      details: "123 Farming Avenue, Cropville",
      subtext: "Open for in-person consultations"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Contact Our Agricultural Experts" 
        subtitle="Have questions or need personalized advice? Our team of agricultural experts is here to help you with your farming needs."
        imageUrl="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="agri-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="section-title">Get in Touch</h2>
              <p className="mb-8 text-gray-700">
                Fill out the form below with your inquiry, and one of our agricultural specialists will get back to you 
                with personalized advice and guidance.
              </p>

              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise Needed</Label>
                      <select 
                        id="expertise" 
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-agri-green-500 focus:border-transparent"
                      >
                        <option value="general">General Farming Advice</option>
                        <option value="crops">Crop Cultivation</option>
                        <option value="pests">Pest Management</option>
                        <option value="soil">Soil Health</option>
                        <option value="equipment">Farm Equipment</option>
                        <option value="business">Farm Business</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="Brief subject of your inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Describe your question or issue in detail..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] border-gray-300"
                      />
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-agri-green-500 hover:bg-agri-green-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-agri-green-600 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-agri-green-50 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-agri-green-600">{item.title}</h4>
                      <p className="text-gray-700">{item.details}</p>
                      <p className="text-gray-500 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-agri-green-50 rounded-lg border border-agri-green-100">
                <h4 className="font-semibold text-agri-green-600 mb-3">Expert Consultation Hours</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-agri-green-200">
                  <p className="text-gray-600 text-sm">
                    For urgent matters outside of business hours, please email us with "URGENT" in the subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
