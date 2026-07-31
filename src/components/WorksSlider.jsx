import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import BilingualText from './BilingualText'

const slideVideos = [
  'g7c16240b1a1fe173cc247a1174323a6_g',
  'g7c16240b1bb6f1880acb9a500965642_g',
  'g7c16240b1b405094313968bc73586e4_g',
  'g7c16240b184ea86d706e71712f6b4a1_g',
]

export default function WorksSlider({ work }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(2)
  const videoCount = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % videoCount)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

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

  return (
    <div className="works-slider-wrapper">
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
            style={{flex:'0 0 600px'}}
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
