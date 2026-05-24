import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Products Grid Sections */}
        <ProductsGrid />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

