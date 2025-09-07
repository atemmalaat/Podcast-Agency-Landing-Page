import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function SocialMediaManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-lime-800 text-white py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Social Media Management</h1>
            <p className="text-xl text-green-100 leading-relaxed mt-4">Amplify your reach and engage your community.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Social Media</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We create and manage social media campaigns to promote your podcast and grow your audience. We'll create engaging content, run targeted ads, and interact with your listeners to build a thriving community around your show.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with all the major social media platforms, including Instagram, Facebook, Twitter, and LinkedIn. We'll help you choose the right platforms for your podcast and create a custom strategy to achieve your goals.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700" asChild>
                  <a href="#contact">
                    Get a Social Media Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div>
                {/* You can add an image of social media logos here */}
                <div className="bg-gray-200 h-96 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
