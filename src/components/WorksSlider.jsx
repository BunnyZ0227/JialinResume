import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import BilingualText from './BilingualText'

const slideVideos = [
  'hdc06fc7174ffdade4d50460b2e785a1_h',
  'hdc06fc71712abbede10d7a863b008dc_h',
  'hdc06fc7170975e8e93b61a859375320_h',
  'hdc06fc717f50f20ef26b8c37f51f5ad_h',
]

export default function WorksSlider({ work }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(2)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef(null)
  const videoCount = 4

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % videoCount)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused, videoCount])

  useEffect(() => () => clearTimeout(resumeTimer.current), [])

  const pauseScroll = () => {
    clearTimeout(resumeTimer.current)
    setPaused(true)
  }

  const resumeScroll = (delay = 0) => {
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), delay)
  }

  useEffect(() => {
    const track = scrollRef.current
    if (!track) return
    const card = track.children[activeIndex]
    if (!card) return
    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const offset = cardRect.left - trackRect.left + cardRect.width / 2 - trackRect.width / 2
    track.scrollTo({ left: track.scrollLeft + offset, behavior: 'smooth' })
  }, [activeIndex])

  // 初始定位到第 2、3 个视频中间，声明在居中 effect 之后以便覆盖挂载时的居中
  useEffect(() => {
    const track = scrollRef.current
    if (!track) return
    const c1 = track.children[1]
    const c2 = track.children[2]
    if (!c1 || !c2) return
    const trackRect = track.getBoundingClientRect()
    const mid = (c1.getBoundingClientRect().right + c2.getBoundingClientRect().left) / 2
    track.scrollTo({ left: track.scrollLeft + (mid - trackRect.left - trackRect.width / 2), behavior: 'auto' })
  }, [])

  return (
    <div
      className="works-slider-wrapper"
      onMouseEnter={pauseScroll}
      onMouseLeave={() => resumeScroll()}
      onTouchStart={pauseScroll}
      onTouchEnd={() => resumeScroll(2500)}
    >
      <div className="works-slider-text">
        <div className="works-slider-project active">
          <div className="works-slider-number">03</div>
          <p className="showcase-subtitle" style={{marginBottom:'0.25rem', textAlign:'center'}}>
            <BilingualText cn="飞鹤奶酪  2023-2025" en="Feihe Cheese  2023-2025" />
          </p>
          <h3 className="works-slider-title" style={{textAlign:'center'}}>
            <BilingualText cn={work.title.cn} en={work.title.en} />
          </h3>
          <div className="works-slider-tags">
            {work.tags.map((tag, i) => <span key={i} className="work-tag">{tag}</span>)}
          </div>
          <div className="works-slider-details">
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
      </div>

      <div className="works-slider-track" ref={scrollRef}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`works-slider-card ${activeIndex === i ? 'active' : ''}`}
            animate={{ scale: activeIndex === i ? 1.02 : 1 }}
          >
            <div className="works-slider-video">
              <iframe
                src={`https://go.plvideo.cn/front/video/preview?vid=${slideVideos[i]}`}
                allowFullScreen
                mozAllowFullScreen
                webkitAllowFullScreen
                title={`飞鹤视频 ${i + 1}`}
                style={{width:'100%', height:'100%', border:'none'}}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
