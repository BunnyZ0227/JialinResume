import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BilingualText from './BilingualText'

const cards = [
  {
    label: '本地化广告行业调研Skill',
    run: 'run research.skill',
    lines: ['▸ 拉取竞品数据 · 自动对比', '▸ 生成洞察报告 — done'],
    result: '原手工 3天 → 现在 5分钟',
  },
  {
    label: '创意SOP skill',
    run: 'run creative.sop',
    lines: ['▸ 按环节执行策略模板', '▸ 输出创意视角 — done'],
    result: '散装流程 → 标准化自动化',
  },
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
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`works-ai-projects-card ${i === 0 ? 'works-ai-projects-card--warm' : 'works-ai-projects-card--cool'}`}
              animate={{
                y: activeCard === i ? -70 : 0,
                scale: activeCard === i ? 1.05 : 1,
                zIndex: activeCard === i ? 10 : i,
                rotate: activeCard === i ? 0 : i === 0 ? -2 : 2,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              <div className="works-ai-projects-card-inner">
                <div className="term-bar">
                  <span className="term-dot term-dot-red" />
                  <span className="term-dot term-dot-yellow" />
                  <span className="term-dot term-dot-green" />
                  <span className="term-title">{card.label}</span>
                </div>
                <div className="term-body">
                  <p className="term-line term-prompt">$ {card.run}</p>
                  <p className="term-line">{card.lines[0]}</p>
                  <p className="term-line term-ok">{card.lines[1]}</p>
                </div>
                <div className="term-result">{card.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
