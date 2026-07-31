import { useState, useEffect } from 'react'
import GlassSurface from './GlassSurface'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onLightBg, setOnLightBg] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 60)

      const navH = 80
      const parseRGBA = (color) => {
        const match = color.match(/rgba?\(([^)]+)\)/)
        if (!match) return null
        return match[1].split(',').map((part) => parseFloat(part))
      }

      const hits = document.elementsFromPoint(window.innerWidth / 2, navH + 2)
      let onLight = false
      for (const el of hits) {
        if (el.closest && el.closest('.navbar')) continue
        const rgba = parseRGBA(getComputedStyle(el).backgroundColor)
        const alpha = rgba && rgba.length > 3 ? rgba[3] : 1
        if (rgba && alpha > 0) {
          const luminance = (0.2126 * rgba[0] + 0.7152 * rgba[1] + 0.0722 * rgba[2]) / 255
          onLight = luminance > 0.55
          break
        }
      }
      setOnLightBg(onLight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const items = [
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${onLightBg ? 'navbar-on-light' : ''}`}>
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={0}
        blur={22}
        opacity={0.15}
        backgroundOpacity={0.12}
        saturation={1.0}
        displace={0.15}
        distortionScale={-20}
        brightness={60}
        redOffset={0}
        greenOffset={1}
        blueOffset={2}
        mixBlendMode="screen"
        className="navbar-glass"
      >
        <div className="navbar-inner">
          <button
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>

          <div className={`navbar-links ${menuOpen ? 'visible' : ''}`}>
            {items.map((item, i) => (
              <span key={item.id} className="nav-item-group">
                {i > 0 && <span className="nav-sep">|</span>}
                <button
                  className="nav-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </span>
            ))}
          </div>
        </div>
      </GlassSurface>
    </nav>
  )
}
