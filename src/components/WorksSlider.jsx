import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

const slideVideos = [
  '/videos/飞鹤超新星奶酪-办公篇.mp4',
  '/videos/飞鹤超新星奶酪-加班篇.mp4',
  '/videos/飞鹤超新星奶酪-篮球篇.mp4',
  '/videos/飞鹤超新星奶酪-补习篇.mp4',
]

export default function WorksSlider({ work }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(2)
  const [expanded, setExpanded] = useState(false)
  const videoRefs = useRef([])
  const videoCount = 4

  useEffect(() => {
    if (expanded) return
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % videoCount)
    }, 4000)
    return () => clearInterval(timer)
  }, [expanded])

  // Auto-center the active card
  useEffect(() => {
    if (expanded) return
    const track = scrollRef.current
    if (!track) return
    const card = track.children[activeIndex]
    if (!card) return
    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const offset = cardRect.left - trackRect.left + cardRect.width / 2 - trackRect.width / 2
    track.scrollTo({ left: track.scrollLeft + offset, behavior: 'smooth' })
  }, [activeIndex])

  function handleCardClick(index) {
    if (activeIndex === index) {
      // Already centered — play expanded
      setActiveIndex(index)
      setTimeout(() => {
        const vid = videoRefs.current[index]
        if (vid) { vid.play(); setExpanded(true) }
      }, 300)
    } else {
      setActiveIndex(index)
    }
  }

  function closeExpanded() {
    videoRefs.current[activeIndex]?.pause()
    setExpanded(false)
  }

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
            onClick={() => handleCardClick(i)}
            style={{flex:'0 0 600px'}}
          >
            <div className="works-slider-video">
              <video
                ref={el => videoRefs.current[i] = el}
                src={slideVideos[i]}
                playsInline loop muted
                style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:10}}
              />
              {activeIndex !== i && (
                <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.6)', borderRadius:10, pointerEvents:'none'}} />
              )}
              <span className="works-slider-play">▶</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="works-slider-expanded-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeExpanded}
          >
            <div className="works-slider-expanded" onClick={e => e.stopPropagation()}>
              <video
                src={slideVideos[activeIndex]}
                playsInline loop muted autoPlay controls
                style={{width:'100%', height:'100%', objectFit:'contain', borderRadius:12}}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
