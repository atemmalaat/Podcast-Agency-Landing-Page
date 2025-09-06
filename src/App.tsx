import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SuccessStories } from "./components/SuccessStories";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";
import { BookNow } from "./components/BookNow";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
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