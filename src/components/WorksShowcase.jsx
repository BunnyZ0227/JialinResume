import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

// 2x largest overflow top, smallest near text, medium mid/bottom
// Burst: center-small first → medium → 2x edge last
const showcaseVideos = [
  { preview: '/videos/bytedance/preview/0.mp4', polyv: 'hdc06fc717122ec0112903b1bc88036d_h' },
  { preview: '/videos/bytedance/preview/1.mp4', polyv: 'hdc06fc717f28015c13415363ed137a0_h' },
  { preview: '/videos/bytedance/preview/2.mp4', polyv: 'hdc06fc71763a0db952e796f7eddff65_h' },
  { preview: '/videos/bytedance/preview/3.mp4', polyv: 'hdc06fc7172a1f32bdc1156d0bd6179c_h' },
  { preview: '/videos/bytedance/preview/4.mp4', polyv: 'hdc06fc717ed3a7316327e928cc88d86_h' },
  { preview: '/videos/bytedance/preview/5.mp4', polyv: 'hdc06fc717e571f014a162b8e813297c_h' },
  { preview: '/videos/bytedance/preview/6.mp4', polyv: 'hdc06fc717917fa0c17076b64c9973c4_h' },
  { preview: '/videos/bytedance/preview/7.mp4', polyv: 'hdc06fc717c393aafeba55fe3c5808c4_h' },
  { preview: '/videos/bytedance/preview/8.mp4', polyv: 'hdc06fc717d5b6db0ff6ca8f1042cf8c_h' },
  { preview: '/videos/bytedance/preview/9.mp4', polyv: 'hdc06fc717e1aa8fe3b284ce7a5af860_h' },
]

const cardDefs = [
  { top: '0%',  left: '12%', w: '220px', h: '360px', scale: 1.0, delay: 0.72 },
  { bottom: '8%', right: '7%',  w: '155px', h: '235px', scale: 1.05, delay: 0.72 },
  { top: '28%', right: '18%', w: '140px', h: '220px', scale: 1.08, delay: 0.72 },
  { top: '7%', right: '34%', w: '128px', h: '195px', scale: 0.96, delay: 0.12 },
  { bottom: '10%', left: '27%',  w: '115px', h: '175px', scale: 0.95, delay: 0.52 },
  { top: '26%', left: '31%',  w: '115px', h: '175px', scale: 0.95, delay: 0.15 },
  { top: '2%',  right: '-4%', w: '215px', h: '350px', scale: 1.0, delay: 0.82 },
  { top: '54%', right: '28%', w: '100px', h: '150px', scale: 0.90, delay: 0.15 },
  { top: '54%', left: '15%',  w: '110px', h: '165px', scale: 0.98, delay: 0.00 },
  { top: '50%', left: '1%',   w: '152px', h: '240px', scale: 1.05, delay: 0.32 },
]

const pillLabels = ['PROJECT', 'CHALLENGE', 'APPROACH', 'IMPACT']

const projectTitleBlock = (
  <div className="showcase-project-title">
    <p className="showcase-subtitle">
      <BilingualText cn="字节跳动2019-2026" en="ByteDance 2019-2026" />
    </p>
    <h2 className="showcase-main-title">
      <BilingualText cn="全球化用户洞察" en="Global Consumer Insight" />
      <br />
      <BilingualText cn="与内容策略" en="& Content Strategy" />
    </h2>
  </div>
)

function VideoCard({ style, naturalScale, delay, videoSrc, onClick, offsetX, offsetY, hasAnimated }) {
  const ref = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    v.addEventListener('loadeddata', tryPlay)
    return () => v.removeEventListener('loadeddata', tryPlay)
  }, [hasAnimated])

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
      initial={{ x: offsetX, y: offsetY, scale: 0, opacity: 0, filter: 'blur(8px)' }}
      animate={{ x: 0, y: 0, scale: naturalScale, opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.65, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
      />
    </motion.div>
  )
}

export default function WorksShowcase({ work }) {
  const [phase, setPhase] = useState(0)
  const [activeVideo, setActiveVideo] = useState(null)
  const [sectionDims, setSectionDims] = useState({ w: 1440, h: 900 })
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isMobile = sectionDims.w <= 768
  const phaseCount = isMobile ? 3 : 4

  useEffect(() => {
    const timer = setInterval(() => { setPhase(p => (p + 1) % phaseCount) }, 8000)
    return () => clearInterval(timer)
  }, [phaseCount])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const update = () => setSectionDims({ w: el.offsetWidth, h: el.offsetHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el || hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasAnimated(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  const contentIndex = isMobile ? (phase % 3) + 1 : phase
  const activeIdx = isMobile ? phase % 3 : phase

  const phaseContent = [
    <div key="project" className="showcase-phase-inner">
      {projectTitleBlock}
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
    <section ref={sectionRef} className="works-showcase">
      <div className="showcase-cards-layer">
        {cardDefs.map((card, i) => {
            const { w: sw, h: sh } = sectionDims
            const cw = parseFloat(card.w) * card.scale
            const ch = parseFloat(card.h) * card.scale
            const cx = sw / 2
            const cy = sh / 2
            let cardCX, cardCY
            if (card.left) {
              cardCX = (parseFloat(card.left) / 100) * sw + cw / 2
            } else {
              cardCX = sw - (parseFloat(card.right) / 100) * sw - cw / 2
            }
            if (card.top) {
              cardCY = (parseFloat(card.top) / 100) * sh + ch / 2
            } else {
              cardCY = sh - (parseFloat(card.bottom) / 100) * sh - ch / 2
            }
            const offX = Math.round(cx - cardCX)
            const offY = Math.round(cy - cardCY)
            return (
          <VideoCard
            key={`${i}-${hasAnimated}`}
            delay={card.delay}
            naturalScale={isMobile ? 1 : card.scale}
            videoSrc={showcaseVideos[i].preview}
            onClick={() => showcaseVideos[i].polyv && setActiveVideo(i)}
            offsetX={isMobile ? 0 : offX}
            offsetY={isMobile ? 0 : offY}
            hasAnimated={hasAnimated}
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
            )
          })}
      </div>

      <div className="showcase-text-center">
        <div className="showcase-fixed-number">01</div>
        {isMobile && <div className="showcase-fixed-title">{projectTitleBlock}</div>}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            className="showcase-phase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {phaseContent[contentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="showcase-pills">
        {(isMobile ? pillLabels.slice(1) : pillLabels).map((label, i) => (
          <button
            key={label}
            className={`showcase-pill ${activeIdx === i ? 'showcase-pill-active' : ''}`}
            onClick={() => setPhase(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Expanded video overlay */}
      {activeVideo !== null && showcaseVideos[activeVideo]?.polyv && (
        <div className="showcase-expand-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="showcase-expand-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://go.plvideo.cn/front/video/preview?vid=${showcaseVideos[activeVideo].polyv}`}
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title="ByteDance video"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: 12 }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
