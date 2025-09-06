import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Define Your Podcast's Niche and Audience",
    description: "Before you hit record, it's important to have a clear understanding of who your podcast is for and what it's about. This will guide your content and help you attract loyal listeners."
  },
  {
    step: 2,
    title: "Choose Your Equipment and Software",
    description: "You don't need a professional studio to get started, but good audio quality is key. We can help you choose the right microphone, headphones, and recording software for your budget."
  },
  {
    step: 3,
    title: "Plan and Record Your First Episodes",
    description: "Once you have your equipment, it's time to start recording. We recommend planning out your first few episodes in advance. We can help with scripting, recording techniques, and more."
  },
  {
    step: 4,
    title: "Edit and Produce Your Podcast",
    description: "This is where the magic happens. Our team of audio engineers can help you edit your podcast to remove mistakes, add music and sound effects, and make it sound professional."
  },
  {
    step: 5,
    title: "Launch and Promote Your Podcast",
    description: "Once your podcast is ready, it's time to share it with the world. We can help you submit your podcast to all the major platforms and create a social media strategy to promote it."
  }
];

export function HowToStart() {
  return (
    <section id="how-to-start" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Start a Podcast in Brisbane
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A step-by-step guide to launching your own successful podcast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.step} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600" asChild>
            <a href="#contact">
              Get a Free Consultation to Start Your Podcast
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
