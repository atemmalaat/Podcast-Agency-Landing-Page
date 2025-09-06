import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowToStart } from "./components/HowToStart";
import { SuccessStories } from "./components/SuccessStories";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";
import { BookNow } from "./components/BookNow";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowToStart />
        <SuccessStories />
        <About />
        <Pricing />
        <BookNow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
