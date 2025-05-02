
import { Calendar, Tractor } from "lucide-react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const FarmingGuides = () => {
  // Sample data for guides
  const seasonalGuides = [
    {
      id: 1,
      title: "Spring Planting Guide",
      description: "Essential tips for successful spring planting including soil preparation, seed selection, and timing.",
      imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Seasonal",
      tags: ["Spring", "Planting", "Seeds"]
    },
    {
      id: 2,
      title: "Summer Crop Maintenance",
      description: "How to maintain healthy crops during hot summer months with proper irrigation and care techniques.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Seasonal",
      tags: ["Summer", "Irrigation", "Maintenance"]
    },
    {
      id: 3,
      title: "Fall Harvest Best Practices",
      description: "Maximize your harvest with these techniques for timing, storage and preservation of autumn crops.",
      imageUrl: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Seasonal",
      tags: ["Fall", "Harvest", "Storage"]
    },
    {
      id: 4,
      title: "Winter Planning and Preparation",
      description: "Prepare your farm for the next growing season with these winter planning and soil maintenance tips.",
      imageUrl: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Seasonal",
      tags: ["Winter", "Planning", "Soil"]
    }
  ];

  const techniqueGuides = [
    {
      id: 5,
      title: "Introduction to No-Till Farming",
      description: "Learn about the benefits and implementation of no-till farming methods for soil health and sustainability.",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Techniques",
      tags: ["No-Till", "Sustainable", "Soil Health"]
    },
    {
      id: 6,
      title: "Crop Rotation Strategies",
      description: "Effective crop rotation plans to improve soil fertility, reduce pests, and maximize yields over time.",
      imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Techniques",
      tags: ["Rotation", "Planning", "Fertility"]
    },
    {
      id: 7,
      title: "Organic Farming Fundamentals",
      description: "Core principles and practices for successful organic farming without synthetic chemicals.",
      imageUrl: "https://images.unsplash.com/photo-1589923188651-268a9765eb53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Techniques",
      tags: ["Organic", "Chemical-Free", "Certification"]
    },
    {
      id: 8,
      title: "Precision Agriculture Technologies",
      description: "Introduction to modern precision farming technologies to optimize resource use and crop yields.",
      imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Techniques",
      tags: ["Technology", "Precision", "Efficiency"]
    }
  ];

  const renderGuideCards = (guides) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {guides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={guide.imageUrl} 
                alt={guide.title}
                className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {guide.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-agri-green-50 text-agri-green-700 border-agri-green-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-xl text-agri-green-600">{guide.title}</CardTitle>
              <CardDescription className="text-gray-600">{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="text-agri-green-600 font-medium hover:text-agri-green-700 transition-colors flex items-center gap-1">
                Read full guide
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Farming Guides" 
        subtitle="Comprehensive resources covering various aspects of farming practices, techniques, and methodologies to help you succeed in your agricultural endeavors."
        imageUrl="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="agri-container">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/4">
              <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-agri-green-600 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Guide Categories
                </h3>
                <div className="space-y-2">
                  <a href="#seasonal" className="block p-2 rounded hover:bg-agri-green-50 text-gray-700 hover:text-agri-green-600 transition-colors flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Seasonal Guides
                  </a>
                  <a href="#techniques" className="block p-2 rounded hover:bg-agri-green-50 text-gray-700 hover:text-agri-green-600 transition-colors flex items-center gap-2">
                    <Tractor className="h-4 w-4" />
                    Farming Techniques
                  </a>
                  <a href="#" className="block p-2 rounded hover:bg-agri-green-50 text-gray-700 hover:text-agri-green-600 transition-colors flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    Crop-Specific Guides
                  </a>
                  <a href="#" className="block p-2 rounded hover:bg-agri-green-50 text-gray-700 hover:text-agri-green-600 transition-colors flex items-center gap-2">
                    <Bug className="h-4 w-4" />
                    Pest Management
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <h2 className="section-title">Explore Farming Guides</h2>
              <p className="mb-8 text-gray-700">
                Our comprehensive collection of farming guides covers everything from seasonal planning to advanced agricultural techniques. 
                Browse through the categories below to find the information you need for successful farming.
              </p>

              <Tabs defaultValue="seasonal" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="seasonal" className="text-base">Seasonal Guides</TabsTrigger>
                  <TabsTrigger value="techniques" className="text-base">Farming Techniques</TabsTrigger>
                </TabsList>
                <TabsContent value="seasonal" id="seasonal">
                  <h3 className="text-2xl font-semibold text-agri-green-600 mb-4">Seasonal Farming Guides</h3>
                  <p className="mb-6 text-gray-700">
                    Navigate the changing seasons with our detailed guides tailored to each part of the growing year.
                  </p>
                  {renderGuideCards(seasonalGuides)}
                </TabsContent>
                <TabsContent value="techniques" id="techniques">
                  <h3 className="text-2xl font-semibold text-agri-green-600 mb-4">Farming Techniques</h3>
                  <p className="mb-6 text-gray-700">
                    Learn about various farming methodologies and techniques to optimize your agricultural practices.
                  </p>
                  {renderGuideCards(techniqueGuides)}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Additional import needed at the top
import { BookOpen, Leaf, Bug } from "lucide-react";

export default FarmingGuides;
