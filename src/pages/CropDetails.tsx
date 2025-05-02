
import { Wheat, Search } from "lucide-react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const CropDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample crop data
  const grains = [
    {
      id: 1,
      name: "Wheat",
      scientificName: "Triticum",
      description: "A cereal grain that is a worldwide staple food. It is grown on more land area than any other food crop.",
      imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ed40c17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 6.0-7.0",
      growingPeriod: "90-120 days",
      waterRequirements: "Medium",
      category: "Grain"
    },
    {
      id: 2,
      name: "Rice",
      scientificName: "Oryza sativa",
      description: "A staple food for over half of the world's population. It's grown in flooded fields or 'paddies'.",
      imageUrl: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Heavy clay soil with pH 6.0-7.0",
      growingPeriod: "120-180 days",
      waterRequirements: "High",
      category: "Grain"
    },
    {
      id: 3,
      name: "Corn (Maize)",
      scientificName: "Zea mays",
      description: "A cereal grain first domesticated by indigenous peoples in Mexico. It's used for food, feed, and biofuel.",
      imageUrl: "https://images.unsplash.com/photo-1601472543446-77cad55ba456?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 5.8-7.0",
      growingPeriod: "90-120 days",
      waterRequirements: "Medium to High",
      category: "Grain"
    },
    {
      id: 4,
      name: "Barley",
      scientificName: "Hordeum vulgare",
      description: "A major cereal grain used in bread, beer, and various foods. It's also used as animal fodder.",
      imageUrl: "https://images.unsplash.com/photo-1597138798970-9665438259c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 6.0-7.0",
      growingPeriod: "70-90 days",
      waterRequirements: "Low to Medium",
      category: "Grain"
    }
  ];

  const vegetables = [
    {
      id: 5,
      name: "Tomatoes",
      scientificName: "Solanum lycopersicum",
      description: "A fruit that's commonly used as a vegetable in cooking. They're rich in lycopene, a powerful antioxidant.",
      imageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 6.0-6.8",
      growingPeriod: "60-80 days",
      waterRequirements: "Medium",
      category: "Vegetable"
    },
    {
      id: 6,
      name: "Carrots",
      scientificName: "Daucus carota subsp. sativus",
      description: "A root vegetable, usually orange in color. They're a good source of beta carotene, fiber, and antioxidants.",
      imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Deep, loose, well-drained soil with pH 6.0-6.8",
      growingPeriod: "70-80 days",
      waterRequirements: "Medium",
      category: "Vegetable"
    },
    {
      id: 7,
      name: "Potatoes",
      scientificName: "Solanum tuberosum",
      description: "A starchy root vegetable native to the Americas. It's the world's fourth-largest food crop.",
      imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Loose, well-drained soil with pH 5.0-6.5",
      growingPeriod: "70-120 days",
      waterRequirements: "Medium",
      category: "Vegetable"
    },
    {
      id: 8,
      name: "Broccoli",
      scientificName: "Brassica oleracea var. italica",
      description: "An edible green plant in the cabbage family. It's high in vitamins C and K, and dietary fiber.",
      imageUrl: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Fertile, well-drained soil with pH 6.0-7.0",
      growingPeriod: "80-100 days",
      waterRequirements: "High",
      category: "Vegetable"
    }
  ];

  const fruits = [
    {
      id: 9,
      name: "Apples",
      scientificName: "Malus domestica",
      description: "A sweet fruit that grows on trees. They're one of the most widely cultivated tree fruits.",
      imageUrl: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 6.0-7.0",
      growingPeriod: "100-200 days (fruit development)",
      waterRequirements: "Medium",
      category: "Fruit"
    },
    {
      id: 10,
      name: "Strawberries",
      scientificName: "Fragaria × ananassa",
      description: "A widely grown hybrid species of the genus Fragaria. They're prized for their sweet flavor and aroma.",
      imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained soil with pH 5.5-6.5",
      growingPeriod: "60-80 days (fruit development)",
      waterRequirements: "Medium",
      category: "Fruit"
    },
    {
      id: 11,
      name: "Oranges",
      scientificName: "Citrus × sinensis",
      description: "A citrus fruit known for its high vitamin C content. They're one of the most popular fruits worldwide.",
      imageUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained loamy soil with pH 6.0-7.5",
      growingPeriod: "6-18 months (fruit development)",
      waterRequirements: "Medium",
      category: "Fruit"
    },
    {
      id: 12,
      name: "Grapes",
      scientificName: "Vitis vinifera",
      description: "A fruit growing in clusters on a perennial and deciduous woody vine. They're used for wine, juice, and as a table fruit.",
      imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      soilRequirements: "Well-drained soil with pH 5.5-7.0",
      growingPeriod: "150-170 days (fruit development)",
      waterRequirements: "Low to Medium",
      category: "Fruit"
    }
  ];

  // Filter crops based on search term
  const filterCrops = (crops) => {
    if (!searchTerm) return crops;
    return crops.filter(crop => 
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Render crop cards
  const renderCropCards = (crops) => {
    const filteredCrops = filterCrops(crops);
    
    if (filteredCrops.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">No crops found matching your search term.</p>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {filteredCrops.map((crop) => (
          <Card key={crop.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={crop.imageUrl} 
                alt={crop.name}
                className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-agri-green-600">{crop.name}</CardTitle>
              <CardDescription className="text-gray-500 italic">{crop.scientificName}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{crop.description}</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="font-medium text-agri-brown-600 w-1/3">Soil:</span>
                  <span className="text-gray-700">{crop.soilRequirements}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-agri-brown-600 w-1/3">Growing Period:</span>
                  <span className="text-gray-700">{crop.growingPeriod}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-agri-brown-600 w-1/3">Water Needs:</span>
                  <span className="text-gray-700">{crop.waterRequirements}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Crop Details" 
        subtitle="Comprehensive information on different crops including varieties, cultivation methods, soil requirements, and harvesting techniques."
        imageUrl="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="agri-container">
          <h2 className="section-title">Explore Crop Information</h2>
          <p className="mb-8 text-gray-700">
            Browse our comprehensive database of crop information to find detailed growing requirements, 
            characteristics, and best practices for cultivation.
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search for crops by name or scientific name..." 
              className="pl-10 border-agri-green-200 focus:border-agri-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="grains" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="grains" className="text-base">
                <Wheat className="h-4 w-4 mr-2" />
                Grains
              </TabsTrigger>
              <TabsTrigger value="vegetables" className="text-base">Vegetables</TabsTrigger>
              <TabsTrigger value="fruits" className="text-base">Fruits</TabsTrigger>
            </TabsList>
            <TabsContent value="grains">
              <h3 className="text-2xl font-semibold text-agri-green-600 mb-4">Grain Crops</h3>
              <p className="mb-6 text-gray-700">
                Grains are small, hard, dry seeds harvested for human or animal consumption.
                Here are some common grain crops and their cultivation requirements.
              </p>
              {renderCropCards(grains)}
            </TabsContent>
            <TabsContent value="vegetables">
              <h3 className="text-2xl font-semibold text-agri-green-600 mb-4">Vegetable Crops</h3>
              <p className="mb-6 text-gray-700">
                Vegetables are parts of plants that are consumed as food. They're often classified 
                based on the part of the plant that is eaten.
              </p>
              {renderCropCards(vegetables)}
            </TabsContent>
            <TabsContent value="fruits">
              <h3 className="text-2xl font-semibold text-agri-green-600 mb-4">Fruit Crops</h3>
              <p className="mb-6 text-gray-700">
                Fruits are the sweet and fleshy product of a plant that contains seeds and can be 
                eaten as food. Here are some common fruit crops.
              </p>
              {renderCropCards(fruits)}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default CropDetails;
