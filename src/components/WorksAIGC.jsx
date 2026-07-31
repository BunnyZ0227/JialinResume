import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

const videoSrcs = ['/videos/bilibili.mp4', '/videos/腾讯游戏.mp4']

export default function WorksAIGC({ work }) {
  const [activeVideo, setActiveVideo] = useState(null)
  const videoRefs = useRef([])

  function handleClick(index) {
    const vid = videoRefs.current[index]
    if (!vid) return
    if (activeVideo === index) {
      vid.pause()
      setActiveVideo(null)
    } else {
      if (activeVideo !== null) videoRefs.current[activeVideo]?.pause()
      vid.currentTime = 0
      vid.play()
      setActiveVideo(index)
    }
  }

  function handleBackdropClick() {
    if (activeVideo !== null) videoRefs.current[activeVideo]?.pause()
    setActiveVideo(null)
  }

  return (
    <div className="works-aigc">
      <div className="works-aigc-inner">
        {/* Left video */}
        <div className="works-aigc-video-wrapper works-aigc-left">
          <div className="works-aigc-video" onClick={() => handleClick(0)}>
            <video
              ref={el => videoRefs.current[0] = el}
              src={videoSrcs[0]}
              playsInline loop muted
              style={{width:'100%', height:'100%', objectFit:'cover'}}
            />
            {activeVideo !== 0 && (
              <span className="works-aigc-play">▶</span>
            )}
          </div>
        </div>

        {/* Center text */}
        <div className="works-aigc-text">
          <div className="works-gallery-number">05</div>
          <p className="showcase-subtitle" style={{marginBottom:'0.25rem', textAlign:'center'}}>
            <BilingualText cn="Bilibili+腾讯游戏  2025-2026" en="Bilibili+Tencent Games  2025-2026" />
          </p>
          <h3 className="work-featured-title" style={{textAlign:'center'}}>
            <BilingualText cn={work.title.cn} en={work.title.en} />
          </h3>
          <div className="works-gallery-tags" style={{justifyContent:'center'}}>
            {work.tags.map((tag, i) => <span key={i} className="work-tag">{tag}</span>)}
          </div>
          <div className="works-aigc-details">
            <div className="work-detail">
              <span className="work-detail-label">CHALLENGE</span>
              <p className="work-detail-text">
                <BilingualText cn={work.challenge.cn} en={work.challenge.en} as="span" />
              </p>
            </div>
            <div className="work-detail">
              <span className="work-detail-label">APPROACH</span>
              <p className="work-detail-text">
                <BilingualText cn={work.approach.cn} en={work.approach.en} as="span" />
              </p>
            </div>
          </div>
        </div>

        {/* Right video */}
        <div className="works-aigc-video-wrapper works-aigc-right">
          <div className="works-aigc-video" onClick={() => handleClick(1)}>
            <video
              ref={el => videoRefs.current[1] = el}
              src={videoSrcs[1]}
              playsInline loop muted
              style={{width:'100%', height:'100%', objectFit:'cover'}}
            />
            {activeVideo !== 1 && (
              <span className="works-aigc-play">▶</span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            className="works-aigc-expanded-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <div className="works-aigc-expanded" onClick={e => e.stopPropagation()}>
              <video
                src={videoSrcs[activeVideo]}
                playsInline loop muted autoPlay
                controls
                style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:12}}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
