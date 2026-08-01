import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

const videoSrcs = [
  'hdc06fc7170c4bd047c349101371f191_h',
  'hdc06fc71793a82b37ec1e5741f179f4_h',
]

const polyvSrc = (vid) => `https://go.plvideo.cn/front/video/preview?vid=${vid}`

export default function WorksAIGC({ work }) {
  const [active, setActive] = useState(null)

  return (
    <div className="works-aigc">
      <div className="works-aigc-inner">
        {/* Left video */}
        <div className="works-aigc-video-wrapper works-aigc-left">
          <div className="works-aigc-video">
            <iframe
              src={polyvSrc(videoSrcs[0])}
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title="AIGC 1"
              style={{width:'100%', height:'100%', border:'none'}}
            />
            <button className="works-aigc-expand-btn" onClick={() => setActive(0)} aria-label="播放视频 1">▶</button>
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
          <div className="works-aigc-video">
            <iframe
              src={polyvSrc(videoSrcs[1])}
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title="AIGC 2"
              style={{width:'100%', height:'100%', border:'none'}}
            />
            <button className="works-aigc-expand-btn" onClick={() => setActive(1)} aria-label="播放视频 2">▶</button>
          </div>
        </div>
      </div>

      {/* Expanded center playback */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="works-aigc-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="works-aigc-modal" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={polyvSrc(videoSrcs[active])}
                allowFullScreen
                mozAllowFullScreen
                webkitAllowFullScreen
                title={`AIGC 播放 ${active + 1}`}
                style={{width:'100%', height:'100%', border:'none', borderRadius:12}}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
