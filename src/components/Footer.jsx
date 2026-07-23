import { footerContent } from '../data/content'
import BilingualText from './BilingualText'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h2 className="footer-heading">
            {footerContent.heading.cn}
          </h2>
          <p className="footer-subheading">
            <BilingualText cn={footerContent.subheading.cn} en={footerContent.subheading.en} />
          </p>
        </div>

        <div className="footer-contact">
          <a href={`mailto:${footerContent.email}`} className="footer-email">
            {footerContent.email}
          </a>
          <span className="footer-phone">{footerContent.phone}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <button className="footer-back-top" onClick={scrollToTop}>
          ↑
        </button>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Jialin Zhang</p>
      </div>
    </footer>
  )
}
