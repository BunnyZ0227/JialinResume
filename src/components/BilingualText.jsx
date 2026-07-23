import { useState } from 'react'

export default function BilingualText({ cn, en, as = 'span', className = '' }) {
  const [hovered, setHovered] = useState(false)
  const Tag = as

  return (
    <Tag
      className={`bilingual-text ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-en={en}
    >
      <span className={`bt-cn ${hovered ? 'bt-hidden' : ''}`}>{cn}</span>
      <span className={`bt-en ${hovered ? 'bt-visible' : ''}`}>{en}</span>
    </Tag>
  )
}
