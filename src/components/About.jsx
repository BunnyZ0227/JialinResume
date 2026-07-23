import { aboutContent } from '../data/content'
import BilingualText from './BilingualText'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-label">
        <BilingualText cn="关于" en="About" />
      </div>

      <div className="about-grid">
        <div className="about-identity">
          <h2 className="about-title">
            <BilingualText cn={aboutContent.identity.cn} en={aboutContent.identity.en} />
          </h2>
          <p className="about-years">8年广告传媒行业经验</p>
        </div>

        <div className="about-intro">
          <p className="about-text">
            <BilingualText cn={aboutContent.intro.cn} en={aboutContent.intro.en} as="span" />
          </p>
        </div>
      </div>

      <div className="about-education">
        <h3 className="about-edu-title">
          <BilingualText cn="教育背景" en="Education" />
        </h3>
        <div className="about-edu-list">
          {aboutContent.education.map((edu, i) => (
            <div key={i} className="about-edu-item">
              <span className="edu-marker" />
              <BilingualText cn={edu.cn} en={edu.en} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
