import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

export default function WorksGallery({ work }) {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollRef = useRef(null)

  return (
    <div className="works-gallery">
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div className="works-gallery-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

      <div className="works-gallery-text">
        <div className="works-gallery-number">05</div>
        <h3 className="works-gallery-title"><BilingualText cn={work.title.cn} en={work.title.en} /></h3>
        <div className="works-gallery-tags">{work.tags.map((tag, i) => <span key={i} className="work-tag">{tag}</span>)}</div>
        <div className="works-gallery-details">
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

      <div className="works-gallery-track" ref={scrollRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`works-gallery-card ${activeVideo === i ? 'active' : ''}`}
            layout
            animate={activeVideo === i ? { position: 'fixed', top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1.6, zIndex: 25 } : { position: 'relative', top: 'auto', left: 'auto', x: 0, y: 0, scale: 1, zIndex: 1 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            onClick={() => setActiveVideo(activeVideo === i ? null : i)}
          >
            <div className="works-gallery-video"><span className="works-gallery-play">▶</span></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
