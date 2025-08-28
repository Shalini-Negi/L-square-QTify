export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
            100 Thousand Songs, ad-free
          </h1>
          <h2 className="hero-subtitle" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Over thousands podcast episodes
          </h2>
        </div>
        <div className="hero-image">
          <img src="/assets/headphones.png" alt="Headphones" className="headphones-img" />
        </div>
      </div>
    </section>
  )
}
