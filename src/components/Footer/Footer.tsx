import styles from './Footer.module.scss'
import VKLogo from 'images/vk.svg'
import InstIcon from 'images/inst.svg'
import FbIcon from 'images/fb.svg'
import DeliveryLogo from 'images/logo.svg'
import classNames from 'classnames'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBlock}>
          <img src={DeliveryLogo} alt="" className={classNames(styles.logo, styles.footerLogo)} />
          <nav className="footer-nav">
            <a href="/" className={styles.footerLink}>Ресторанам</a>
            <a href="/" className={styles.footerLink}>Курьерам</a>
            <a href="/" className={styles.footerLink}>Пресс-центр</a>
            <a href="/" className={styles.footerLink}>Контакты</a>
          </nav>
          <div className={styles.socialLinks}>
            <a href="/" className={styles.socialLink}>
              <img src={VKLogo} alt="" />
            </a>
            <a href="/" className={styles.socialLink}>
              <img src={FbIcon} alt="" />
            </a>
            <a href="/" className={styles.socialLink}>
              <img src={InstIcon} alt="" />
            </a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer;