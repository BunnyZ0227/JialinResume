import { siteConfig, heroScrollHint } from '../data/content'
import BilingualText from './BilingualText'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: 'url(/images/hero-bg.svg)' }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">{siteConfig.name}</h1>
          <p className="hero-title">
            <BilingualText cn="创意策略总监" en="Creative Strategy Director" />
          </p>
          <p className="hero-tagline">
            <BilingualText cn={siteConfig.tagline.cn} en={siteConfig.tagline.en} />
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item">{siteConfig.contact.phone}</span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-meta-item">{siteConfig.contact.email}</span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-meta-item">
              <BilingualText cn={siteConfig.contact.location} en={siteConfig.contact.locationEn} />
            </span>
          </div>
        </div>
      </div>

      <button className="hero-scroll-hint" onClick={scrollToAbout}>
        <BilingualText cn={heroScrollHint.cn} en={heroScrollHint.en} />
        <span className="scroll-arrow">↓</span>
      </button>
    </section>
  )
}
