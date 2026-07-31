import { useState } from 'react'
import { motion } from 'motion/react'
import BilingualText from './BilingualText'
import AnimatedCounter from './AnimatedCounter'

const adidasVideos = [
  'g7c16240b1a49787e2357ac92254dee6_g',
  'g7c16240b1ff901d45aa8e2a256e4649_g',
  'g7c16240b1e8ba83c24d4f9c80f234ce_g',
  'g7c16240b1938a916a1b12847a94c33f_g',
  'g7c16240b1f5fdf198b30f024cb48610_g',
]

const polyvSrc = (vid) => `https://go.plvideo.cn/front/video/preview?vid=${vid}`

export default function WorksGallery({ work }) {
  const [activeIndex, setActiveIndex] = useState(2)

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
      <div style={{position:'relative', width:420, height:600, marginLeft:280, flexShrink:0}}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{
              position:'absolute', width:300, height:533,
              borderRadius:15, left:'50%', top:'50%',
              marginLeft:-150, marginTop:-267,
              background:'#1a1a1a', overflow:'hidden',
              transformOrigin:'bottom center'
            }}
            animate={{
              rotate: [-20, -10, 0, 10, 20][i],
              x: [-120, -60, 0, 60, 120][i],
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
