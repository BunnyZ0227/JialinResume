import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import BilingualText from './BilingualText'

export default function WorksSlider({ work }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(2)
  const videoCount = 4

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const cardW = el.querySelector('.works-slider-card')?.offsetWidth || 420
    const gap = 12
    el.scrollLeft = 2 * cardW + 2 * gap

    function handleScroll() {
      const containerWidth = el.clientWidth
      const scrollLeft = el.scrollLeft
      const cardWidth = containerWidth / 3
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(Math.max(index, 0), videoCount - 1))
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="works-slider-wrapper">
      <div className="works-slider-text">
        <div className="works-slider-project active">
          <div className="works-slider-number">03</div>
          <h3 className="works-slider-title">
            <BilingualText cn={work.title.cn} en={work.title.en} />
          </h3>
          <div className="works-slider-tags">
            {work.tags.map((tag, j) => <span key={j} className="work-tag">{tag}</span>)}
          </div>
          <div className="works-slider-details">
            <div className="work-detail">
              <span className="work-detail-label">CHALLENGE</span>
              <p className="work-detail-text"><BilingualText cn={work.challenge.cn} en={work.challenge.en} as="span" /></p>
            </div>
            <div className="work-detail">
              <span className="work-detail-label">APPROACH</span>
              <p className="work-detail-text"><BilingualText cn={work.approach.cn} en={work.approach.en} as="span" /></p>
            </div>
            <div className="work-detail">
              <span className="work-detail-label">IMPACT</span>
              <p className="work-detail-text work-impact"><BilingualText cn={work.impact.cn} en={work.impact.en} as="span" /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="works-slider-track" ref={scrollRef}>
        {Array.from({ length: videoCount }, (_, i) => (
          <motion.div
            key={i}
            className={`works-slider-card ${activeIndex === i ? 'active' : ''}`}
            animate={{ scale: activeIndex === i ? 1.06 : 0.94, opacity: activeIndex === i ? 1 : 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="works-slider-video"><span className="works-slider-play">▶</span></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
