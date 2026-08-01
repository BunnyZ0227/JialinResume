import { useRef, useState, useLayoutEffect } from 'react'
import { motion } from 'motion/react'
import BilingualText from './BilingualText'
import AnimatedCounter from './AnimatedCounter'

const adidasVideos = [
  'hdc06fc71750814018fc95f468d68b89_h',
  'hdc06fc717dc838969a2bf124e5a82d9_h',
  'hdc06fc7176774aa037b4a2fd9ee8e9a_h',
  'hdc06fc7174f96d6c5e13e6cb68dd9ec_h',
  'hdc06fc7170f0a1d9f5ae94fe80114b3_h',
]

const polyvSrc = (vid) => `https://go.plvideo.cn/front/video/preview?vid=${vid}`

export default function WorksGallery({ work }) {
  const [activeIndex, setActiveIndex] = useState(2)
  const fanRef = useRef(null)
  const [fanW, setFanW] = useState(420)

  useLayoutEffect(() => {
    const el = fanRef.current
    if (!el) return
    const update = () => setFanW(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const spread = Math.min(1, Math.max(0.4, fanW / 720))
  const xOffsets = [-120, -60, 0, 60, 120].map(o => Math.round(o * spread))
  const rotates = [-20, -10, 0, 10, 20].map(r => Math.round(r * spread))

  return (
    <div className="works-gallery">
      <div className="works-gallery-text">
        <div className="works-gallery-number" style={{textAlign:"left"}}>04</div>
        <p className="showcase-subtitle" style={{marginBottom:'0.25rem'}}>
          <BilingualText cn="阿迪达斯  2025-2026" en="adidas  2025-2026" />
        </p>
        <h3 className="work-featured-title" style={{textAlign:"left"}}>
          <BilingualText cn={work.title.cn} en={work.title.en} />
        </h3>
        <div className="works-gallery-tags" style={{justifyContent:"flex-start"}}>
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
              <span className="work-metric-value" style={{fontSize:"2.4rem", fontWeight:700}}><AnimatedCounter value={m.value} /></span>
              <span className="work-metric-label" style={{fontSize:"0.8rem"}}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5-card symmetric fan spread */}
      <div className="works-gallery-fan" ref={fanRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="works-gallery-fan-card"
            animate={{
              rotate: rotates[i],
              x: xOffsets[i],
              scale: activeIndex === i ? 0.95 : [0.78, 0.88, 0.88, 0.88, 0.78][i],
              y: activeIndex === i ? -12 : 0,
              zIndex: activeIndex === i ? 10 : i,
            }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <iframe
              src={polyvSrc(adidasVideos[i])}
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title={`adidas ${i + 1}`}
              style={{width:'100%', height:'100%', border:'none', display:'block'}}
            />
            {activeIndex !== i && (
              <div
                style={{position:'absolute', inset:0, cursor:'pointer'}}
                onClick={() => setActiveIndex(i)}
              />
            )}
          </motion.div>
        ))}
      </div>

    </div>
  )
}
