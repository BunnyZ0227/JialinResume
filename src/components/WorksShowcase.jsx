import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

// 2x largest overflow top, smallest near text, medium mid/bottom
// Burst: center-small first → medium → 2x edge last
const videoList = ['01.mp4', '1017没有记忆点.mp4', 'Promote Pilot Project-2.mp4', 'Promote Pilot Project-5.mp4', 'TTM M6W4语音房一.mp4', '咖啡机工厂-竖-6951529396331087874.mp4', '电风扇-竖-6951530078991812609.mp4', '豆包-大学综合.mp4', '豆包品宣-竖.mp4', '防晒-竖-6951609476247996418.mp4']

const cardDefs = [
  // Smallest (2) — nearest to center text, burst first
  { top: '54%', left: '22%',  w: '88px', h: '135px', scale: 0.82, delay: 0.00 },
  { top: '54%', right: '24%', w: '85px', h: '132px', scale: 0.80, delay: 0.15 },
  // Medium (2) — mid distance on sides
  { top: '44%', left: '5%',   w: '152px', h: '240px', scale: 1.05, delay: 0.32 },
  { top: '34%', right: '14%', w: '126px', h: '200px', scale: 1.02, delay: 0.72 },
  // Medium-bottom (2) — lower zone
  { bottom: '10%', left: '28%',  w: '102px', h: '155px', scale: 0.90, delay: 0.52 },
  { bottom: '8%', right: '3%',  w: '140px', h: '215px', scale: 0.98, delay: 0.72 },
  // Medium-small above text — top zone, staggered vertically
  { top: '18%', left: '35%',  w: '100px', h: '155px', scale: 0.88, delay: 0.15 },
  { top: '7%', right: '30%', w: '128px', h: '195px', scale: 0.96, delay: 0.12 },
  // 2x Largest (2) — overflow top edge, burst last
  { top: '-8%',  left: '16%', w: '220px', h: '360px', scale: 1.0, delay: 0.72 },
  { top: '-6%',  right: '-4%', w: '215px', h: '350px', scale: 1.0, delay: 0.82 },
]

const pillLabels = ['PROJECT', 'CHALLENGE', 'APPROACH', 'IMPACT']

function VideoCard({ style, naturalScale, delay, videoSrc }) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform =
      `perspective(600px) rotateX(${y * -12}deg) rotateY(${x * 12}deg) scale(${naturalScale * 1.08})`
  }

  function handleMouseLeave() {
    if (!ref.current) return
    ref.current.style.transform =
      `perspective(600px) rotateX(0) rotateY(0) scale(${naturalScale})`
  }

  return (
    <motion.div
      ref={ref}
      className="showcase-video-card"
      style={style}
      initial={{ scale: 0, opacity: 0, filter: 'blur(6px)' }}
      animate={{ scale: naturalScale, opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.65, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={`/videos/bytedance/${videoSrc}`}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
      />
    </motion.div>
  )
}

export default function WorksShowcase({ work }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => { setPhase(p => (p + 1) % 4) }, 8000)
    return () => clearInterval(timer)
  }, [])

  const phaseContent = [
    <div key="project" className="showcase-phase-inner">
      <h2 className="showcase-main-title">
        <BilingualText cn="全球化消费者洞察" en="Global Consumer Insight" />
        <br />
        <BilingualText cn="与内容策略" en="& Content Strategy" />
      </h2>
      <p className="showcase-subtitle">
        <BilingualText cn="字节跳动2018-2026" en="ByteDance 2018-2026" />
      </p>
    </div>,
    <div key="challenge" className="showcase-phase-inner">
      <span className="showcase-phase-label">CHALLENGE</span>
      <p className="showcase-phase-text" style={{ whiteSpace: 'pre-line' }}>
        <BilingualText cn={work.challenge.cn.join('\n')} en={work.challenge.en.join('\n')} as="span" />
      </p>
    </div>,
    <div key="approach" className="showcase-phase-inner">
      <span className="showcase-phase-label">APPROACH</span>
      <p className="showcase-phase-text" style={{ whiteSpace: 'pre-line' }}>
        <BilingualText cn={work.approach.cn.join('\n')} en={work.approach.en.join('\n')} as="span" />
      </p>
    </div>,
    <div key="impact" className="showcase-phase-inner">
      <span className="showcase-phase-label">IMPACT</span>
      <p className="showcase-phase-text" style={{ whiteSpace: 'pre-line' }}>
        <BilingualText cn={work.impact.cn.join('\n')} en={work.impact.en.join('\n')} as="span" />
      </p>
    </div>,
  ]

  return (
    <section className="works-showcase">
      <div className="showcase-cards-layer">
        {cardDefs.map((card, i) => (
          <VideoCard
            key={i}
            delay={card.delay}
            naturalScale={card.scale}
            videoSrc={videoList[i]}
            style={{
              position: 'absolute',
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
              width: card.w,
              height: card.h,
            }}
          />
        ))}
      </div>

      <div className="showcase-text-center">
        <div className="showcase-fixed-number">01</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {phaseContent[phase]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="showcase-pills">
        {pillLabels.map((label, i) => (
          <button
            key={label}
            className={`showcase-pill ${phase === i ? 'showcase-pill-active' : ''}`}
            onClick={() => setPhase(i)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
