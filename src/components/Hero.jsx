import { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import RotatingText from './RotatingText'

const carouselImages = [
  '/images/wps_doc_12.webp',
  '/images/wps_doc_20.webp',
  '/images/wps_doc_7.webp',
  '/images/wps_doc_8.webp'
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    setTransitioning(true)
    setNext((current + 1) % carouselImages.length)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
      setTransitioning(false)
    }, 600)
  }, [current])

  useEffect(() => {
    const timer = setInterval(goToNext, 3500)
    return () => clearInterval(timer)
  }, [goToNext])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-carousel">
        {carouselImages.map((src, i) => (
          <div
            key={src}
            className={`hero-carousel-img ${i === current ? 'active' : ''} ${i === next && transitioning ? 'next' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-noise">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" seed="7" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.08" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-byname">Jialin Zhang</div>
          <h1 className="hero-name">
            <span className="hero-name-fixed">Creative</span>
            <RotatingText
              texts={['Insights', 'Strategy', 'Content', 'Vibecoding']}
              mainClassName="hero-rotating"
              splitLevelClassName="hero-rotating-word"
              elementLevelClassName="hero-rotating-char"
              staggerFrom="first"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              staggerDuration={0.025}
              splitBy="characters"
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              rotationInterval={2500}
            />
          </h1>
<p className="hero-subtitle">创意 / 策略 / 内容 / AI</p>
          <div className="hero-meta" style={{flexDirection:"column", alignItems:"flex-start", gap:"0.2rem"}}>
            <span className="hero-meta-item">+86 17600010227</span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-meta-item">Jzhang0227@126.com</span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-meta-item">北京</span>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {carouselImages.map((_, i) => (
          <span key={i} className={`hero-dot ${i === current ? 'active' : ''}`} />
        ))}
      </div>

      <button className="hero-scroll-hint" onClick={scrollToAbout}>
        向下探索
        <motion.span
            className="scroll-arrow"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
      </button>
    </section>
  )
}
