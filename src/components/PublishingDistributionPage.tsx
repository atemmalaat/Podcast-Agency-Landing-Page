import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function PublishingDistributionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Publishing & Distribution</h1>
            <p className="text-xl text-blue-100 leading-relaxed mt-4">Reach your audience on all major podcast platforms.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Distribution</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We handle the technical side of publishing your podcast, so you don't have to. We'll submit your show to all the major podcast directories, including Apple Podcasts, Spotify, Google Podcasts, and more.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We also provide you with detailed analytics to track your podcast's performance. You'll be able to see how many downloads you're getting, where your listeners are coming from, and more.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
                  <a href="#contact">
                    Learn More About Distribution
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div>
                {/* You can add an image of podcast platform logos here */}
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
