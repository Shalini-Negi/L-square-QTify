import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Section from "@/components/Section"
import SongsSection from "@/components/SongsSection"
import FAQSection from "@/components/FAQSection"
import MusicPlayer from "@/components/MusicPlayer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black pb-20">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-6 py-8">
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />

        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />

        <SongsSection />
      </main>

      <FAQSection />

      <MusicPlayer />
    </div>
  )
}
