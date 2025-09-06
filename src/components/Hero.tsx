import { Button } from "./ui/button";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Professional Podcast Production in Brisbane: 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Transform Your Voice </span>
                Into Success
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                Full-service podcast agency delivering studio recording, professional editing, 
                seamless publishing, and strategic social media management to amplify your reach.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-orange-200">Podcasts Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10M+</div>
                <div className="text-sm text-orange-200">Downloads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-orange-200">Client Satisfaction</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold" asChild>
                <a href="#contact">
                  Start Your Podcast Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                </Button>
                {/* 
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
                </Button>
                */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668606143326-4d53db523e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwcmVjb3JkaW5nfGVufDF8fHx8MTc1Njk3Nzc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional podcast studio setup"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}