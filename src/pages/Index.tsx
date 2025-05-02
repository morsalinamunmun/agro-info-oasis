
import { Leaf, BookOpen, Search, Bug } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Farming Guides",
      description: "Comprehensive guides on farming practices, techniques, and methodologies",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/farming-guides",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Crop Details",
      description: "Detailed information on different crops including varieties and cultivation methods",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/crop-details",
      icon: <Leaf className="h-5 w-5" />
    },
    {
      title: "Pest Control",
      description: "Integrated pest management strategies for effective pest control",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/pest-control",
      icon: <Bug className="h-5 w-5" />
    },
    {
      title: "Expert Assistance",
      description: "Connect with agricultural experts for personalized advice and guidance",
      imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/contact",
      icon: <Search className="h-5 w-5" />
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Your Agricultural Information Hub" 
        subtitle="A comprehensive resource for farmers and agricultural enthusiasts providing farming guides, crop information, pest control strategies, and expert assistance."
        imageUrl="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        primaryButtonText="Explore Guides"
        primaryButtonLink="/farming-guides"
        secondaryButtonText="Contact Experts"
        secondaryButtonLink="/contact"
      />

      <section className="py-16 bg-white">
        <div className="agri-container">
          <h2 className="section-title text-center">What We Offer</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Our platform provides resources and information to help you succeed in your agricultural endeavors
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                link={feature.link}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-agri-green-50">
        <div className="agri-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title">Why Choose Our Agricultural Hub?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-agri-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agri-green-600">Expert Knowledge</h3>
                    <p className="text-gray-700">All our information is verified by agricultural experts with years of experience in the field.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-agri-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agri-green-600">Comprehensive Resources</h3>
                    <p className="text-gray-700">From novice gardeners to seasoned farmers, our guides cater to all experience levels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-agri-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agri-green-600">Seasonal Updates</h3>
                    <p className="text-gray-700">Our content is updated regularly to reflect seasonal changes and new agricultural techniques.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-agri-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agri-green-600">Direct Expert Access</h3>
                    <p className="text-gray-700">Connect directly with agricultural experts for personalized advice and problem-solving.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Farmer examining crops" 
                className="rounded-lg shadow-lg max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
