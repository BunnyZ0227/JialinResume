import { works } from '../data/content'
import BilingualText from './BilingualText'

export default function Works() {
  return (
    <section id="works" className="works">
      <div className="section-label">
        <BilingualText cn="精选作品" en="Featured Works" />
      </div>

      <div className="works-grid">
        {works.map((work) => (
          <article key={work.id} className="work-card">
            <div className="work-card-visual">
              <div className="work-card-number">0{works.indexOf(work) + 1}</div>
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
