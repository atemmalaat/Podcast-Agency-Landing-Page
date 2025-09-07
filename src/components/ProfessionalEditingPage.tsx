import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function ProfessionalEditingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Professional Editing</h1>
            <p className="text-xl text-purple-100 leading-relaxed mt-4">Polished, professional, and ready for your audience.</p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Audio Editing</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of audio engineers will take your raw audio and transform it into a polished, professional podcast. We'll remove mistakes, balance levels, reduce noise, and add your intro, outro, and any other audio elements.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We use industry-standard software and techniques to ensure your podcast meets the highest quality standards. Your listeners will appreciate the clean, crisp sound of your show.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                  <a href="#contact">
                    Get a Free Editing Sample
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div>
                {/* You can add an image of your editing process here */}
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
