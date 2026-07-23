import { experiences } from '../data/content'
import BilingualText from './BilingualText'

export default function Timeline() {
  return (
    <section id="experience" className="timeline">
      <div className="section-label">
        <BilingualText cn="职业经历" en="Experience" />
      </div>

      <div className="timeline-list">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <div className="tl-dot" />
              {i < experiences.length - 1 && <div className="tl-line" />}
            </div>

            <div className="timeline-card">
              <div className="tl-period">{exp.period}</div>
              <h3 className="tl-title">
                <BilingualText cn={exp.title.cn} en={exp.title.en} />
              </h3>
              <p className="tl-company">{exp.company}</p>

              <div className="tl-highlights">
                <BilingualText cn={exp.highlights.cn} en={exp.highlights.en} as="span" />
              </div>

              {exp.brands && (
                <p className="tl-brands">
                  <BilingualText cn={exp.brands.cn} en={exp.brands.en} as="span" />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
