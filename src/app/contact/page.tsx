import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-screen-xl px-6">
          <h1 className="text-4xl font-bold text-title mb-8">Contact Us</h1>
          <p className="text-text-secondary">Get in touch with us.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
