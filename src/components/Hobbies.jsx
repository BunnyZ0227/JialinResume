import Masonry from './Masonry'
import BilingualText from './BilingualText'

const allItems = [
    { id: 'ph9', img: '/oursidework/wps_doc_32.jpg', height: 700 },
    { id: 'ph3', img: '/oursidework/wps_doc_15.jpg', height: 1200 },
    { id: 'cr4', img: '/oursidework/wps_doc_23.jpg', height: 1000 },
    { id: 'vd1', video: '/oursidework/white.mp4', height: 1000 },
    { id: 'sk4', img: '/oursidework/wps_doc_35.jpg', height: 900 },
    { id: 'sk1', img: '/oursidework/wps_doc_22.jpg', height: 800 },
    { id: 'cr2', img: '/oursidework/wps_doc_14.jpg', height: 1200 },
    { id: 'vd2', video: '/oursidework/pink.mp4', height: 1000 },
    { id: 'cr3', img: '/oursidework/wps_doc_19.jpg', height: 800 },
    { id: 'sk3', img: '/oursidework/wps_doc_34.jpg', height: 800 },
    { id: 'sk5', img: '/oursidework/wps_doc_36.jpg', height: 800 },
    { id: 'vd3', video: '/oursidework/purple.mp4', height: 900 },
    { id: 'ph4', img: '/oursidework/wps_doc_16.jpg', height: 900 },
    { id: 'sk8', img: '/oursidework/wps_doc_29.jpg', height: 700 },
    { id: 'ph8', img: '/oursidework/wps_doc_31.jpg', height: 700 },
    { id: 'vd4', video: '/oursidework/green.mp4', height: 900 },
    { id: 'sk10', img: '/oursidework/wps_doc_33.jpg', height: 700 },
    { id: 'sk16', img: '/oursidework/20260723-195736.799-6.jpg', height: 500 },
    { id: 'sk7', img: '/oursidework/wps_doc_28.jpg', height: 700 },
    { id: 'vd5', video: '/oursidework/blue.mp4', height: 900 },
    { id: 'ph6', img: '/oursidework/wps_doc_24.jpg', height: 800 },
    { id: 'ph7', img: '/oursidework/wps_doc_25.jpg', height: 800 },
    { id: 'sk13', img: '/oursidework/20260723-195736.799-3.jpg', height: 500 },
    { id: 'vd6', video: '/oursidework/emerald.mp4', height: 900 },
    { id: 'cr1', img: '/oursidework/wps_doc_10.jpg', height: 600 },
    { id: 'sk2', img: '/oursidework/wps_doc_27.jpg', height: 900 },
    { id: 'cr6', img: '/oursidework/wps_doc_17.jpg', height: 1000 },
    { id: 'vd7', video: '/oursidework/pet.mp4', height: 900 },
    { id: 'sk15', img: '/oursidework/20260723-195736.799-5.jpg', height: 800 },
    { id: 'sk12', img: '/oursidework/20260723-195736.799-2.jpg', height: 1000 },
    { id: 'ph5', img: '/oursidework/wps_doc_18.jpg', height: 1000 },
    { id: 'vd8', video: '/oursidework/lanhei.mp4', height: 900 },
    { id: 'sk9', img: '/oursidework/wps_doc_30.jpg', height: 700 },
    { id: 'sk6', img: '/oursidework/wps_doc_37.jpg', height: 700 },
    { id: 'ph2', img: '/oursidework/wps_doc_13.jpg', height: 1400 },
    { id: 'sk14', img: '/oursidework/20260723-195736.799-4.jpg', height: 900 },
    { id: 'sk11', img: '/oursidework/20260723-195736.799-1.jpg', height: 900 },
    { id: 'ph1', img: '/oursidework/wps_doc_20.jpg', height: 600 },
    { id: 'cr5', img: '/oursidework/wps_doc_26.jpg', height: 600 },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies">
      <div className="hobbies-header">
        <div className="section-label" style={{textAlign:"center"}}>More About Me</div>
        <p className="hobbies-desc">
          <BilingualText cn="业余时间我喜欢手工，也在摄影和绘画中定格美好。" en="In my spare time, I enjoy crafting, and freeze beautiful moments through photography and painting." />
        </p>
      </div>

      <div className="hobbies-masonry-section">
        <Masonry
          items={allItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.025}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.97}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
      <p className="hobbies-credit">Shot on Canon EOS 700D with EF 70-200mm f/2.8L IS USM</p>
    </section>
  )
}
