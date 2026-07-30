import { aboutContent } from '../data/content'
import BilingualText from './BilingualText'
import TiltedCard from './TiltedCard'
import SkillsMarquee from './SkillsMarquee'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-label">
        <span className="about-first-letter">A</span>bout
      </div>

      <div className="about-inner">
        <div className="about-left">
          <div className="about-quote-block">
            <span className="about-quote-mark">"</span>
            <p className="about-quote-text">
              <BilingualText cn={aboutContent.intro.cn} en={aboutContent.intro.en} as="span" />
            </p>
          </div>
        </div>

        <div className="about-right">
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

          <div className="about-photo-wrapper">
            <TiltedCard
              imageSrc="/images/portrait.jpg"
              altText="Jialin Zhang"
              containerHeight="150px"
              containerWidth="110px"
              imageHeight="155px"
              imageWidth="115px"
              scaleOnHover={1.60}
              rotateAmplitude={18}
              showMobileWarning={false}
              showTooltip={true}
              captionText="Jialin Zhang"
              displayOverlayContent={false}
              className="about-photo-tilt"
            />
          </div>
        </div>
      </div>
      <SkillsMarquee />
    </section>
  )
}
