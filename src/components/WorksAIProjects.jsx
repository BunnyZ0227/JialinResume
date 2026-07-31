import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

const cards = [
  { title: '广告行业调研 Skill', desc: '本地化广告行业竞品调研工具' },
  { title: '创意SOP Skill', desc: '广告创意流程自动化助手' },
]

export default function WorksAIProjects({ work }) {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="works-ai-projects">
      <div className="works-ai-projects-inner">
        {/* Left: text */}
        <div className="works-ai-projects-text">
          <div className="works-gallery-number" style={{textAlign:"left"}}>06</div>
          <p className="showcase-subtitle" style={{marginBottom:'0.25rem'}}>
            <BilingualText cn="AI Vibecoding  2026" en="AI Vibecoding  2026" />
          </p>
          <h3 className="work-featured-title" style={{textAlign:'left'}}>
            <BilingualText cn={work.title.cn} en={work.title.en} />
          </h3>
          <div className="works-gallery-tags" style={{justifyContent:'flex-start'}}>
            {work.tags.map((tag, i) => <span key={i} className="work-tag">{tag}</span>)}
          </div>
          <div className="works-ai-projects-details">
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
            <div className="work-detail">
              <span className="work-detail-label">IMPACT</span>
              <p className="work-detail-text">
                <BilingualText cn={work.impact.cn} en={work.impact.en} as="span" />
              </p>
            </div>
          </div>
        </div>

        {/* Right: folder with cards */}
        <div className="works-ai-projects-folder">
          <div className="works-ai-projects-folder-bg" />
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="works-ai-projects-card"
              animate={{
                y: activeCard === i ? -60 : i * 10,
                scale: activeCard === i ? 1.05 : 1,
                zIndex: activeCard === i ? 10 : i,
                rotate: activeCard === i ? 0 : i === 0 ? -3 : 3,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              <div className="works-ai-projects-card-inner">
                <span className="works-ai-projects-card-icon">📁</span>
                <h4 className="works-ai-projects-card-title">{card.title}</h4>
                <p className="works-ai-projects-card-desc">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
