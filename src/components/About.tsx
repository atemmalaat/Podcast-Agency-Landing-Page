import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Award, Clock, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 10 years of combined experience in audio production and digital marketing"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "48-hour editing turnaround with express options available for urgent projects"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 support for all your podcast needs"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Latest audio equipment and software for professional-grade production"
  }
];

const achievements = [
  "500+ successful podcast launches",
  "10M+ total downloads generated",
  "98% client retention rate",
  "Award-winning production team",
  "Featured in Podcast Magazine",
  "Trusted by Fortune 500 companies"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our Brisbane Podcast Studio
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TheSearchersPodcasterNetwork was founded by a team of audio engineers, 
              content strategists, and digital marketers who recognized the need for 
              comprehensive podcast production services in the greater Brisbane and Ipswich area. We believe every voice deserves 
              to be heard with crystal-clear quality and maximum reach.
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600" asChild>
              <a href="#about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668606143326-4d53db523e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwcmVjb3JkaW5nfGVufDF8fHx8MTc1Njk3Nzc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our professional podcast studio"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}