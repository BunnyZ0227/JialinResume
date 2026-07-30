import { useRef, useEffect } from 'react'

export default function SkillsMarquee() {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  useEffect(() => {
    const animate = (ref, direction) => {
      if (!ref.current) return
      let pos = 0
      const speed = direction * 0.5
      const step = () => {
        pos += speed
        const half = ref.current.scrollWidth / 2
        if (pos <= -half) pos += half
        if (pos >= 0) pos -= half
        ref.current.style.transform = `translateX(${pos}px)`
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    animate(row1Ref, -1)
    animate(row2Ref, 1)
  }, [])

  const cnSkills = ['品牌定位', '内容策略', '渠道策略', 'AB测试', '竞品分析', '消费者洞察', '剪映', '即梦']
  const enSkills = ['Premiere', 'Illustrator', 'Photoshop', 'Figma', 'Claude Code', 'Codex', 'Nanobanana']

  const renderLine = (skills, className) => {
    const items = []
    // Duplicate 6 times for seamless loop
    for (let r = 0; r < 6; r++) {
      skills.forEach((s, i) => {
        items.push(<span key={`${r}-${i}`} className={`skills-marquee-item ${className}`}>{s}</span>)
        items.push(<span key={`s-${r}-${i}`} className="skills-slash"> / </span>)
      })
    }
    return items
  }

  return (
    <div className="skills-marquee">
      <div className="skills-marquee-row" ref={row1Ref}>
        {renderLine(cnSkills, 'cn-skill')}
      </div>
      <div className="skills-marquee-row" ref={row2Ref}>
        {renderLine(enSkills, 'en-skill')}
      </div>
    </div>
  )
}
