import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, TrendingUp, Users, Download, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechTalk Podcast",
    avatar: "SM",
    content: "TheSearchersPodcasterNetwork transformed our amateur recordings into professional-grade content. Our downloads increased by 400% in just 3 months!",
    stats: { downloads: "2.5M", growth: "+400%" }
  },
  {
    name: "Marcus Rodriguez",
    role: "Host, Business Insights",
    avatar: "MR",
    content: "The social media management service alone has grown our audience by 250%. Their content strategy is absolutely brilliant.",
    stats: { followers: "150K", growth: "+250%" }
  },
  {
    name: "Dr. Emily Chen",
    role: "Medical Podcast Host",
    avatar: "EC",
    content: "Professional editing and distribution made all the difference. We went from 0 to 50K monthly listeners in our first year.",
    stats: { listeners: "50K", episodes: "52" }
  }
];

const caseStudies = [
  {
    title: "Startup Stories Podcast",
    category: "Business",
    results: "From 0 to 1M downloads in 6 months",
    metrics: [
      { label: "Monthly Downloads", value: "175K", icon: Download },
      { label: "Episode Rating", value: "4.9/5", icon: Star },
      { label: "Social Followers", value: "85K", icon: Users }
    ],
    tags: ["Startup", "Entrepreneurship", "Business"]
  },
  {
    title: "Wellness Wednesday",
    category: "Health & Lifestyle",
    results: "Consistent top 10 in Health category",
    metrics: [
      { label: "Category Ranking", value: "#8", icon: TrendingUp },
      { label: "Subscriber Growth", value: "+300%", icon: Users },
      { label: "Engagement Rate", value: "12.5%", icon: Star }
    ],
    tags: ["Wellness", "Mental Health", "Lifestyle"]
  }
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped podcasters achieve remarkable growth and build engaged communities
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarFallback className="bg-gradient-to-br from-orange-600 to-orange-500 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="font-bold text-orange-600">{testimonial.stats.downloads || testimonial.stats.followers || testimonial.stats.listeners}</div>
                    <div className="text-gray-500">{testimonial.stats.downloads ? 'Downloads' : testimonial.stats.followers ? 'Followers' : 'Listeners'}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{testimonial.stats.growth || testimonial.stats.episodes}</div>
                    <div className="text-gray-500">{testimonial.stats.growth ? 'Growth' : 'Episodes'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Featured Case Studies</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h4>
                      <Badge variant="secondary" className="mb-4">{study.category}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-orange-600 mb-6">{study.results}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <metric.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="font-bold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful podcasters who've transformed their passion into thriving shows
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}