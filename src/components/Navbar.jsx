import { useState, useEffect } from 'react'
import { navItems, siteConfig } from '../data/content'
import BilingualText from './BilingualText'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {siteConfig.name}
        </button>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-links ${menuOpen ? 'visible' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavClick(item.id)}
            >
              <BilingualText cn={item.label.cn} en={item.label.en} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
