import { works } from '../data/content'
import BilingualText from './BilingualText'
import WorksShowcase from './WorksShowcase'
import AnimatedCounter from './AnimatedCounter'
import WorksSlider from './WorksSlider'
import WorksGallery from './WorksGallery'

export default function Works() {
  const firstWork = works[0]
  const secondWork = works[1]
  const thirdWork = works[2]
  const fifthWork = works[4]
  const restWorks = [works[3], works[5]]

  return (
    <section id="works" className="works">
      <div className="section-label">
        <span className="about-first-letter">F</span>eatured Works
      </div>

      <WorksShowcase work={firstWork} />

      <article className="work-featured">
        <div className="work-featured-left">
          <div className="work-featured-number">02</div>
          <p className="showcase-subtitle" style={{ marginBottom: '0.25rem' }}>
            <BilingualText cn="环球影城  2025-2026" en="Universal Beijing Resort  2025-2026" />
          </p>
          <h3 className="work-featured-title">
            <BilingualText cn="IP内容制作 · 社媒内容策划" en="IP Content Production · Social Media" />
          </h3>
          <div className="work-featured-tags">
            {secondWork.tags.map((tag, i) => (
              <span key={i} className="work-tag">{tag}</span>
            ))}
          </div>
          <div className="work-featured-details">
            <div className="work-detail">
              <span className="work-detail-label">Challenge</span>
              <p className="work-detail-text">
                <BilingualText cn={secondWork.challenge.cn} en={secondWork.challenge.en} as="span" />
              </p>
            </div>
            <div className="work-detail">
              <span className="work-detail-label">Approach</span>
              <p className="work-detail-text">
                <BilingualText cn={secondWork.approach.cn} en={secondWork.approach.en} as="span" />
              </p>
            </div>
          </div>
        </div>
        <div className="work-featured-right">
          <div className="work-featured-video">
            <span className="work-featured-play">▶</span>
          </div>
          <div className="work-featured-metrics">
            {secondWork.metrics.cn.map((m, i) => (
              <div key={i} className="work-metric-block">
                <span className="work-metric-value" style={{fontSize:"1.8rem"}}><AnimatedCounter value={m.value} /></span>
                <span className="work-metric-label" style={{fontSize:"0.8rem"}}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <WorksSlider work={thirdWork} />

      <WorksGallery work={fifthWork} />

      <div className="works-grid">
        {restWorks.map((work) => (
          <article key={work.id} className="work-card">
            <div className="work-card-visual">
              <div className="work-card-number">0{[5, 6][restWorks.indexOf(work)]}</div>
              <div className="work-card-tags">
                {work.tags.map((tag, i) => (
                  <span key={i} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="work-card-body">
              <h3 className="work-card-title">
                <BilingualText cn={work.title.cn} en={work.title.en} />
              </h3>
              <div className="work-card-details">
                <div className="work-detail">
                  <span className="work-detail-label">Challenge</span>
                  <p className="work-detail-text">
                    <BilingualText cn={work.challenge.cn} en={work.challenge.en} as="span" />
                  </p>
                </div>
                <div className="work-detail">
                  <span className="work-detail-label">Approach</span>
                  <p className="work-detail-text">
                    <BilingualText cn={work.approach.cn} en={work.approach.en} as="span" />
                  </p>
                </div>
                <div className="work-detail">
                  <span className="work-detail-label">Impact</span>
                  <p className="work-detail-text work-impact">
                    <BilingualText cn={work.impact.cn} en={work.impact.en} as="span" />
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
