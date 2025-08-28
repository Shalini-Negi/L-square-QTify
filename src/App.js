import "./App.css"
import Navbar from "../src/components/Navbar"
import HeroSection from "../src/components/HeroSection"
import Section from "../src/components/Section"
import SongsSection from "../src/components/SongsSection"
import FAQSection from "../src/components/FAQSection"
import MusicPlayer from "../src/components/MusicPlayer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" type="album" />
        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" type="album" />
        <SongsSection />
        <FAQSection />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
