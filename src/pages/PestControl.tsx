
import { Bug, CheckCheck } from "lucide-react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PestControl = () => {
  // Sample pest data
  const pests = [
    {
      id: 1,
      name: "Aphids",
      description: "Small sap-sucking insects that can cause significant damage to crops by stunting growth and transmitting plant viruses.",
      imageUrl: "https://images.unsplash.com/photo-1626179793906-07bd76b28f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      affectedCrops: ["Vegetables", "Fruits", "Flowers"],
      signs: [
        "Curling or yellowing leaves",
        "Sticky residue on leaves (honeydew)",
        "Stunted or distorted growth",
        "Presence of small insects on the underside of leaves"
      ],
      controls: {
        biological: [
          "Introduce ladybugs or lacewings as natural predators",
          "Plant companion plants like marigolds to repel aphids"
        ],
        chemical: [
          "Insecticidal soaps",
          "Neem oil spray"
        ],
        cultural: [
          "Remove affected plant parts",
          "Ensure proper spacing between plants for good air circulation",
          "Use reflective mulch to deter aphids"
        ]
      }
    },
    {
      id: 2,
      name: "Cutworms",
      description: "The larvae of various moth species that cut down young plants at the soil line, especially seedlings.",
      imageUrl: "https://images.unsplash.com/photo-1555991664-ef765c3d397a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      affectedCrops: ["Vegetables", "Grains", "Seedlings"],
      signs: [
        "Plants cut off at the base",
        "Missing seedlings",
        "Plants wilting and falling over",
        "C-shaped larvae found in soil near damaged plants"
      ],
      controls: {
        biological: [
          "Introduce beneficial nematodes to soil",
          "Attract natural predators like birds"
        ],
        chemical: [
          "Bacillus thuringiensis (Bt) based insecticides",
          "Targeted soil insecticides"
        ],
        cultural: [
          "Use collar barriers around seedlings",
          "Till soil before planting to expose larvae",
          "Remove plant debris where moths might lay eggs"
        ]
      }
    },
    {
      id: 3,
      name: "White Flies",
      description: "Small, white flying insects that feed on plant sap and secrete honeydew, leading to fungal growth and plant weakening.",
      imageUrl: "https://images.unsplash.com/photo-1625179793906-07bd76b28f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      affectedCrops: ["Tomatoes", "Cucumbers", "Ornamentals"],
      signs: [
        "White insects flying up when plants are disturbed",
        "Yellowing or silvering of leaves",
        "Sticky honeydew on leaves",
        "Black sooty mold growth"
      ],
      controls: {
        biological: [
          "Introduce parasitic wasps",
          "Use sticky yellow traps"
        ],
        chemical: [
          "Insecticidal soap spray",
          "Horticultural oil spray"
        ],
        cultural: [
          "Remove heavily infested plants",
          "Avoid over-fertilization with nitrogen",
          "Use reflective mulch to confuse whiteflies"
        ]
      }
    },
    {
      id: 4,
      name: "Japanese Beetles",
      description: "Invasive insects that skeletonize leaves and can cause significant damage to many plants.",
      imageUrl: "https://images.unsplash.com/photo-1597331601478-9d22df246be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      affectedCrops: ["Fruits", "Vegetables", "Ornamentals"],
      signs: [
        "Skeletonized leaves (only veins remaining)",
        "Presence of metallic green beetles with copper-brown wing covers",
        "Clustered feeding on upper parts of plants"
      ],
      controls: {
        biological: [
          "Apply milky spore disease to control larvae in soil",
          "Attract beneficial birds and insects"
        ],
        chemical: [
          "Pyrethrin-based insecticides",
          "Neem oil for moderate infestations"
        ],
        cultural: [
          "Hand-pick beetles and drop in soapy water",
          "Use row covers during peak beetle season",
          "Choose resistant plant varieties"
        ]
      }
    }
  ];

  // Sample IPM strategies
  const ipmStrategies = [
    {
      id: "prevention",
      title: "Prevention",
      description: "Implementing practices to prevent pest problems before they occur.",
      steps: [
        "Select pest-resistant crop varieties",
        "Maintain healthy soil through proper nutrition and drainage",
        "Practice crop rotation to disrupt pest life cycles",
        "Install physical barriers like row covers or netting",
        "Time planting to avoid peak pest pressure periods"
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring and Identification",
      description: "Regularly checking crops for signs of pests and correctly identifying them.",
      steps: [
        "Inspect plants weekly for signs of pest damage or presence",
        "Use sticky traps to monitor flying insect populations",
        "Keep records of pest observations over time",
        "Learn to identify beneficial insects vs. harmful pests",
        "Establish action thresholds for different pests"
      ]
    },
    {
      id: "intervention",
      title: "Intervention",
      description: "Taking measured and appropriate action when pest populations reach damaging levels.",
      steps: [
        "Start with least toxic methods first",
        "Use mechanical controls like hand-picking or water sprays",
        "Introduce biological controls (beneficial insects)",
        "Apply botanical or mineral-based pesticides if necessary",
        "Use synthetic pesticides only as a last resort"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Pest Control Strategies" 
        subtitle="Learn about integrated pest management techniques and effective strategies for controlling common agricultural pests."
        imageUrl="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="agri-container">
          <h2 className="section-title">Integrated Pest Management (IPM)</h2>
          <p className="mb-8 text-gray-700">
            Integrated Pest Management (IPM) is an ecosystem-based strategy that focuses on long-term prevention 
            of pests through a combination of techniques such as biological control, habitat manipulation, 
            modification of cultural practices, and use of resistant varieties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ipmStrategies.map((strategy) => (
              <Card key={strategy.id} className="border-l-4 border-l-agri-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-agri-green-600">{strategy.title}</CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-agri-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-agri-green-600 mb-6">Common Agricultural Pests and Control Methods</h2>
          <p className="mb-8 text-gray-700">
            Identifying common pests and understanding their life cycles is crucial for effective management. 
            Below are some common agricultural pests and various methods to control them.
          </p>

          <div className="space-y-6">
            {pests.map((pest) => (
              <Card key={pest.id} className="overflow-hidden border border-gray-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <img 
                      src={pest.imageUrl} 
                      alt={pest.name}
                      className="h-full w-full object-cover max-h-[300px]"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-semibold text-agri-green-600 mb-2">{pest.name}</h3>
                    <p className="text-gray-700 mb-4">{pest.description}</p>
                    <div className="mb-4">
                      <strong className="text-agri-brown-600">Affected Crops:</strong>{" "}
                      <span className="text-gray-700">{pest.affectedCrops.join(", ")}</span>
                    </div>
                    <div className="mb-4">
                      <strong className="text-agri-brown-600">Signs of Infestation:</strong>
                      <ul className="list-disc pl-5 mt-2 text-gray-700">
                        {pest.signs.map((sign, index) => (
                          <li key={index}>{sign}</li>
                        ))}
                      </ul>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="biological">
                        <AccordionTrigger className="text-base font-medium text-agri-green-600">
                          Biological Control Methods
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-gray-700">
                            {pest.controls.biological.map((method, index) => (
                              <li key={index}>{method}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="chemical">
                        <AccordionTrigger className="text-base font-medium text-agri-green-600">
                          Chemical Control Methods
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-gray-700">
                            {pest.controls.chemical.map((method, index) => (
                              <li key={index}>{method}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cultural">
                        <AccordionTrigger className="text-base font-medium text-agri-green-600">
                          Cultural Control Methods
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-gray-700">
                            {pest.controls.cultural.map((method, index) => (
                              <li key={index}>{method}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestControl;
