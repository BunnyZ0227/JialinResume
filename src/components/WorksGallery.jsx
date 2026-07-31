import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'
import AnimatedCounter from './AnimatedCounter'

const adidasVideos = [
  '/videos/adidas/229.MP4',
  '/videos/adidas/340.MP4',
  '/videos/adidas/%E5%A7%9A%E7%90%9B%E5%BC%80%E7%AE%B1MP4100MB.mp4',
  '/videos/adidas/385.MP4',
  '/videos/adidas/440.MP4',
]

export default function WorksGallery({ work }) {
  const [activeIndex, setActiveIndex] = useState(2)
  const [playingIndex, setPlayingIndex] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const t = setTimeout(() => {
      const v = videoRefs.current[2]
      if (v) { v.play(); setPlayingIndex(2) }
    }, 800)
    return () => clearTimeout(t)
  }, [])

  function handleClick(index) {
    if (activeIndex === index) {
      const vid = videoRefs.current[index]
      if (vid) {
        if (vid.paused) { vid.play(); setPlayingIndex(index) }
        else { vid.pause(); setPlayingIndex(null) }
      }
    } else {
      if (playingIndex !== null) { videoRefs.current[playingIndex]?.pause(); setPlayingIndex(null) }
      setActiveIndex(index)
      setTimeout(() => {
        const v = videoRefs.current[index]
        if (v) { v.play(); setPlayingIndex(index) }
      }, 350)
    }
  }

  function closePlayback() {
    if (playingIndex !== null) {
      videoRefs.current[playingIndex]?.pause()
      setPlayingIndex(null)
    }
  }

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
              <span className="work-metric-value" style={{fontSize:"1.8rem"}}><AnimatedCounter value={m.value} /></span>
              <span className="work-metric-label" style={{fontSize:"0.8rem"}}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5-card symmetric fan spread */}
      <div style={{position:'relative', width:420, height:600, marginLeft:280, flexShrink:0}}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{
              position:'absolute', width:300, height:533,
              borderRadius:15, left:'50%', top:'50%',
              marginLeft:-150, marginTop:-267,
              background:'#1a1a1a', overflow:'hidden',
              cursor: playingIndex !== null ? 'default' : 'pointer',
              transformOrigin:'bottom center'
            }}
            animate={{
              rotate: [-20, -10, 0, 10, 20][i],
              x: [-120, -60, 0, 60, 120][i],
              scale: activeIndex === i ? 0.95 : [0.78, 0.88, 0.88, 0.88, 0.78][i],
              y: activeIndex === i ? -12 : 0,
              zIndex: activeIndex === i ? 10 : i,
            }}
            transition={playingIndex !== null ? { duration: 0 } : { type: 'spring', stiffness: 250, damping: 25 }}
            onClick={() => handleClick(i)}
          >
            <video
              ref={el => videoRefs.current[i] = el}
              src={adidasVideos[i]}
              playsInline loop muted
              style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
            />
            {playingIndex !== i && (
              <div style={{position:"absolute", inset:0, background:"rgba(0,0,0,0.45)", borderRadius:15, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span style={{fontSize:"2.5rem", color:"#fff", opacity:0.5}}>▶</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
  )
}
