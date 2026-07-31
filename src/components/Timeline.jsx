import { Fragment } from 'react'
import { experiences } from '../data/content'
import BilingualText from './BilingualText'

export default function Timeline() {
  return (
    <section id="experience" className="timeline">
      <div className="timeline-inner">
      <div className="section-label">
        <BilingualText cn="EXPERIENCES" en="EXPERIENCES" />
      </div>

      <h2 className="timeline-title">
        <BilingualText cn="职业经历" en="Professional Experience" />
      </h2>

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
                  <BilingualText
                    cn={exp.brands.cn.split('\n').map((line, i) => {
                      const m = line.match(/^(互联网|消费品)：/)
                      return (
                        <Fragment key={i}>
                          {i > 0 && <br />}
                          {m ? (
                            <>
                              <strong>{m[0]}</strong>
                              {line.slice(m[0].length)}
                            </>
                          ) : (
                            line
                          )}
                        </Fragment>
                      )
                    })}
                    en={exp.brands.en}
                    as="span"
                  />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
