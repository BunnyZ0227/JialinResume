import { hobbiesContent } from '../data/content'
import BilingualText from './BilingualText'

const categoryGradients = {
  '水晶': 'linear-gradient(135deg, #c4a882, #e8d5c4)',
  'Crystal': 'linear-gradient(135deg, #c4a882, #e8d5c4)',
  '摄影': 'linear-gradient(135deg, #8a9ba8, #b8c4ce)',
  'Photography': 'linear-gradient(135deg, #8a9ba8, #b8c4ce)',
  '手绘': 'linear-gradient(135deg, #a8b5a0, #c8d0be)',
  'Sketching': 'linear-gradient(135deg, #a8b5a0, #c8d0be)',
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies">
      <div className="section-label">
        <BilingualText cn="爱好" en="Hobbies" />
      </div>

      <div className="hobbies-header">
        <h2 className="hobbies-title">
          <BilingualText cn={hobbiesContent.title.cn} en={hobbiesContent.title.en} />
        </h2>
        <p className="hobbies-desc">
          <BilingualText cn={hobbiesContent.description.cn} en={hobbiesContent.description.en} />
        </p>
      </div>

      <div className="hobbies-masonry">
        {hobbiesContent.categories.map((cat, catIndex) => (
          <div key={catIndex} className="hobby-category">
            <div className="hobby-category-label">
              <BilingualText cn={cat.name.cn} en={cat.name.en} />
            </div>
            <div className="hobby-category-grid">
              {[...Array(3)].map((_, imgIndex) => {
                const bg = cat.name.en === 'Crystal'
                  ? `linear-gradient(135deg, #c4a882, ${imgIndex === 0 ? '#d4bfa8' : imgIndex === 1 ? '#b8a088' : '#e0cebc'})`
                  : cat.name.en === 'Photography'
                  ? `linear-gradient(135deg, #8a9ba8, ${imgIndex === 0 ? '#a0b0bc' : imgIndex === 1 ? '#7a8c98' : '#b4c0c8'})`
                  : `linear-gradient(135deg, #a8b5a0, ${imgIndex === 0 ? '#bcc8b4' : imgIndex === 1 ? '#94a490' : '#c8d4c0'})`;
                const aspectRatios = [
                  'aspect-ratio: 3/4',
                  'aspect-ratio: 1/1', 
                  'aspect-ratio: 4/3'
                ];
                return (
                  <div
                    key={imgIndex}
                    className="hobby-image-placeholder"
                    style={{
                      background: bg,
                      aspectRatio: imgIndex === 0 ? '3/4' : imgIndex === 1 ? '1/1' : '4/3'
                    }}
                  >
                    <div className="hobby-image-overlay">
                      <span className="placeholder-icon">
                        {cat.name.en === 'Crystal' && '◇'}
                        {cat.name.en === 'Photography' && '○'}
                        {cat.name.en === 'Sketching' && '△'}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
