import { methodologyContent } from '../data/content'
import BilingualText from './BilingualText'

export default function Methodology() {
  return (
    <section id="methodology" className="methodology">
      <div className="section-label" style={{textAlign:"center"}}>
        <BilingualText cn="METHODOLOGY" style={{textAlign:"center"}} en="Methodology" />
      </div>

      <div className="methodology-header">
        <h2 className="methodology-title">
          <BilingualText cn={methodologyContent.title.cn} en={methodologyContent.title.en} />
        </h2>
        <p className="methodology-subtitle">
          <BilingualText cn={methodologyContent.subtitle.cn} en={methodologyContent.subtitle.en} />
        </p>
      </div>

      <div className="methodology-flow">
        {methodologyContent.steps.map((step, i) => (
          <div key={i} className="methodology-step">
            <div className="step-number">{step.num}</div>
            <div className="step-content">
              <h3 className="step-title">
                <BilingualText cn={step.title.cn} en={step.title.en} />
              </h3>
              <p className="step-desc">
                <BilingualText cn={step.desc.cn} en={step.desc.en} as="span" />
              </p>
            </div>
            {i < methodologyContent.steps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </div>
    </section>
  )
}
