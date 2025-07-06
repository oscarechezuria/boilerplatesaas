import CTA from "@/src/components/layout/home/CTA";
import Features from "@/src/components/layout/home/Feature";
import Footer from "@/src/components/layout/home/Footer";
import Hero from "@/src/components/layout/home/Hero";


export default async function Home() {

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <main className="flex flex-col gap-8">
        <Hero/>
        <Features/>
        <CTA/>
      </main>
      <Footer/>
    </div>
  );
}
