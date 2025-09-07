import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function StudioRecordingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-800 text-white py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Studio Recording</h1>
            <p className="text-xl text-orange-100 leading-relaxed mt-4">State-of-the-art recording facilities for pristine audio quality.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Professional Studio</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our studio is equipped with the latest technology to ensure your podcast sounds its best. From high-quality microphones to professional audio interfaces, we have everything you need to record a professional-sounding podcast.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We also offer a comfortable and creative environment to help you feel at ease while you record. Our experienced audio engineers will be on hand to assist you with any technical needs, so you can focus on creating great content.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600" asChild>
                  <a href="#contact">
                    Book a Studio Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div>
                {/* You can add an image of your studio here */}
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
