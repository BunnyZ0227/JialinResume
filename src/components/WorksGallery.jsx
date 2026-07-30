import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'
import AnimatedCounter from './AnimatedCounter'

export default function WorksGallery({ work }) {
  const [activeIndex, setActiveIndex] = useState(2)
  const [playing, setPlaying] = useState(false)

  function handleClick(index) {
    if (activeIndex === index) {
      setPlaying(true)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="works-gallery">
      <AnimatePresence>
        {playing && (
          <motion.div
            className="works-gallery-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(false)}
          >
            <div className="works-gallery-expanded" onClick={e => e.stopPropagation()}>
              <div className="works-gallery-video">
                <span className="works-gallery-play">▶</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="works-gallery-text">
        <div className="works-gallery-number">04</div>
        <p className="showcase-subtitle" style={{marginBottom:'0.25rem'}}>
          <BilingualText cn="阿迪达斯  2025-2026" en="adidas  2025-2026" />
        </p>
        <h3 className="work-featured-title">
          <BilingualText cn={work.title.cn} en={work.title.en} />
        </h3>
        <div className="works-gallery-tags">
          {work.tags.map((tag, i) => <span key={i} className="work-tag">{tag}</span>)}
        </div>

        <div className="works-gallery-details">
          <div className="work-detail">
            <span className="work-detail-label">CHALLENGE</span>
            <p className="work-detail-text"><BilingualText cn={work.challenge.cn} en={work.challenge.en} as="span" /></p>
          </div>
          <div className="work-detail">
            <span className="work-detail-label">APPROACH</span>
            <p className="work-detail-text"><BilingualText cn={work.approach.cn} en={work.approach.en} as="span" /></p>
          </div>
        </div>

        <div className="work-featured-metrics">
          {work.metrics.cn.map((m, i) => (
            <div key={i} className="work-metric-block">
              <span className="work-metric-value" style={{fontSize:"1.8rem"}}><AnimatedCounter value={m.value} /></span>
              <span className="work-metric-label" style={{fontSize:"0.8rem"}}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5-card symmetric fan spread */}
      <div style={{position:'relative', width:420, height:600, marginLeft:80, flexShrink:0}}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{
              position:'absolute', width:300, height:533,
              borderRadius:15, left:'50%', top:'50%',
              marginLeft:-150, marginTop:-267,
              background:'linear-gradient(135deg, #ccc 0%, #ddd 100%)',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', transformOrigin:'bottom center'
            }}
            animate={{
              rotate: [-20, -10, 0, 10, 20][i],
              scale: 1,
              zIndex: activeIndex === i ? 10 : i,
              opacity: activeIndex === i ? 1 : 0.45,
            }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            onClick={() => handleClick(i)}
          >
            <span style={{fontSize:'1.8rem', color:'#b5a898', opacity:0.5}}>▶</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
