import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mic, Scissors, Upload, Share2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Mic,
    title: "Studio Recording",
    description: "Professional-grade recording in our state-of-the-art studios with premium equipment and acoustic treatment.",
    features: ["Professional microphones", "Acoustic treatment", "Multi-track recording", "Live monitoring"],
    image: "https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWNyb3Bob25lfGVufDF8fHx8MTc1Njk3Nzc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Scissors,
    title: "Professional Editing",
    description: "Expert audio editing and post-production to make your podcast sound crisp, clear, and engaging.",
    features: ["Noise reduction", "Audio enhancement", "Music & effects", "Chapter markers"],
    image: "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVkaXRpbmd8ZW58MXx8fHwxNzU2OTc3NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Upload,
    title: "Publishing & Distribution",
    description: "Seamless publishing across all major podcast platforms with optimized metadata and scheduling.",
    features: ["Multi-platform distribution", "SEO optimization", "Automated scheduling", "Analytics tracking"],
    image: "https://images.unsplash.com/photo-1655947714553-77bfe6a4b9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NTY5MjI3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media campaigns to amplify your podcast reach and build engaged communities.",
    features: ["Content creation", "Platform management", "Audience engagement", "Growth strategies"],
    image: "https://images.unsplash.com/photo-1668606143326-4d53db523e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwcmVjb3JkaW5nfGVufDF8fHx8MTc1Njk3Nzc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Podcast Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we handle every aspect of your podcast production 
            so you can focus on creating amazing content.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-orange-600 group-hover:text-white transition-colors" asChild>
                  <a href="#solutions">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
            <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
            asChild
            >
            <a href="#contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            </Button>
        </div>
      </div>
    </section>
  );
}