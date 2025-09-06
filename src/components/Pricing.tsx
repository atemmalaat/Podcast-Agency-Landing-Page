import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const packages = [
    {
      name: "Basic Package",
      price: "$199",
      description: "Perfect for those interested in seeing how a podcast can benefit their business or personal brand.",
      features: [
        "1 Fully Produced Episode",
        "3 Engaging Short Clips (90 seconds or less",
        "Professional editing",
        "Basic distribution",
        "Email support"
      ],
      popular: false
    }, {
      name: "Podder Starter Package",
      price: "$399/month",
      description: "Perfect for new podcasters",
      features: [
        "4 episodes per month",
        "2 Clips per episode",
        "Professional editing",
        "Basic distribution",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "$999/month",
      description: "Most popular choice",
      features: [
        "8 episodes per month",
        "5 Clips per episode",
        "Studio recording access",
        "Advanced editing & mastering",
        "Full distribution network",
        "Social media content",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Custom",
      description: "For serious podcasters",
      features: [
        "Unlimited episodes",
        "Dedicated studio time",
        "Full-service production",
        "Complete social media management",
        "Analytics & reporting",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Launch Your Podcast?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a package that fits your needs or get in touch for a custom solution
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 hover:shadow-xl transition-all flex flex-col h-full ${
                pkg.popular ? 'border-orange-600 shadow-lg' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-orange-600 mt-2">{pkg.price}</div>
                <p className="text-gray-600">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-auto ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600'
                      : 'variant-outline'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href={pkg.price === 'Custom' ? '#contact' : '#'}>
                    {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
