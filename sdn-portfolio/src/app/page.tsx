import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Domain from "@/components/Domain";
import Milestones from "@/components/Milestones";
import Documents from "@/components/Documents";
import Dashboard from "@/components/Dashboard";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="w-full">
        <Hero />
        <Domain />
        <Milestones />
        <Documents />
        <Dashboard />
        <About />
        <Contact />
      </div>
    </main>
  );
}
