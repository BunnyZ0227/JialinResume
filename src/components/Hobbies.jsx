import Masonry from './Masonry'
import BilingualText from './BilingualText'

const allItems = [
    { id: 'ph6', img: '/oursidework/wps_doc_11-转换自-jpg.webp', height: 640 },
    { id: 'cr5', img: '/oursidework/wps_doc_17-转换自-jpg.webp', height: 1015 },
    { id: 'vd6', video: '/oursidework/emerald.mp4', height: 1012 },
    { id: 'sk11', img: '/oursidework/20260723-195736.799-3-转换自-jpg.webp', height: 398 },
    { id: 'ph9', img: '/oursidework/wps_doc_32-转换自-jpg.webp', height: 713 },
    { id: 'sk7', img: '/oursidework/wps_doc_27-转换自-jpg.webp', height: 760 },
    { id: 'sk13', img: '/oursidework/wps_doc_34-转换自-jpg.webp', height: 645 },
    { id: 'vd2', video: '/oursidework/pink.mp4', height: 950 },
    { id: 'cr2', img: '/oursidework/20260723-195736.799-2-转换自-jpg.webp', height: 830 },
    { id: 'ph2', img: '/oursidework/20260723-195736.799-6-转换自-jpg.webp', height: 404 },
    { id: 'sk6', img: '/oursidework/wps_doc_19-转换自-jpg.webp', height: 570 },
    { id: 'sk4', img: '/oursidework/wps_doc_29-转换自-jpg.webp', height: 713 },
    { id: 'vd4', video: '/oursidework/green.mp4', height: 950 },
    { id: 'ph7', img: '/oursidework/wps_doc_37-转换自-jpg.webp', height: 742 },
    { id: 'cr4', img: '/oursidework/wps_doc_16-转换自-jpg.webp', height: 1016 },
    { id: 'sk1', img: '/oursidework/wps_doc_33-转换自-jpg.webp', height: 713 },
    { id: 'sk14', img: '/oursidework/20260723-195736.799-4-转换自-jpg.webp', height: 703 },
    { id: 'vd8', video: '/oursidework/lanhei.mp4', height: 950 },
    { id: 'ph8', img: '/oursidework/wps_doc_36-转换自-jpg.webp', height: 809 },
    { id: 'sk16', img: '/oursidework/20260723-195736.799-5-转换自-jpg.webp', height: 644 },
    { id: 'sk3', img: '/oursidework/wps_doc_21-转换自-jpg.webp', height: 760 },
    { id: 'ph3', img: '/oursidework/wps_doc_13-转换自-jpg.webp', height: 1016 },
    { id: 'vd5', video: '/oursidework/blue.mp4', height: 950 },
    { id: 'cr1', img: '/oursidework/wps_doc_25-转换自-jpg.webp', height: 760 },
    { id: 'sk12', img: '/oursidework/wps_doc_10-转换自-jpg.webp', height: 428 },
    { id: 'ph4', img: '/oursidework/wps_doc_7-转换自-jpg.webp', height: 760 },
    { id: 'cr6', img: '/oursidework/wps_doc_18-转换自-jpg.webp', height: 1016 },
    { id: 'vd7', video: '/oursidework/pet.mp4', height: 1012 },
    { id: 'sk15', img: '/oursidework/wps_doc_15-转换自-jpg.webp', height: 1016 },
    { id: 'ph5', img: '/oursidework/wps_doc_20-转换自-jpg.webp', height: 760 },
    { id: 'sk9', img: '/oursidework/wps_doc_35-转换自-jpg.webp', height: 804 },
    { id: 'vd1', video: '/oursidework/white.mp4', height: 950 },
    { id: 'ph1', img: '/oursidework/20260723-195736.799-1-转换自-jpg.webp', height: 783 },
    { id: 'sk8', img: '/oursidework/wps_doc_23-转换自-jpg.webp', height: 760 },
    { id: 'sk2', img: '/oursidework/wps_doc_31-转换自-jpg.webp', height: 713 },
    { id: 'cr3', img: '/oursidework/wps_doc_12-转换自-jpg.webp', height: 760 },
    { id: 'vd3', video: '/oursidework/purple.mp4', height: 950 },
    { id: 'sk5', img: '/oursidework/wps_doc_24-转换自-jpg.webp', height: 760 },
    { id: 'sk10', img: '/oursidework/wps_doc_8-转换自-jpg.webp', height: 760 },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies">
      <div className="hobbies-header">
        <div className="section-label hobbies-label-script" style={{textAlign:"center"}}>More About Me</div>
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
