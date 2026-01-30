import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/app/homepage/page";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background - only on home page */}
      <div className="relative overflow-hidden">
        {/* Background Dot Pattern */}

        <Header />
        <main>
          <Home />
        </main>
      </div>
      <Footer />
    </>
  );
}
