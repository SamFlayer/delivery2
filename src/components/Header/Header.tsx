import cn from 'classnames'
import styles from './Header.module.scss'
import DeliveryLogo from 'images/logo.svg'
import UserIcon from 'images/user.svg'
import BuyingIcon from 'images/buying.svg'

export const Header = () => {
  return (
    <header className={cn(styles.header, styles.lockPadding)}>
      <a href='/'>
        <img src={DeliveryLogo} alt="Delivery Food" className={styles.logo} />
      </a>
      <input className={cn(styles.input, styles.inputAddress)} placeholder="Адрес доставки" />
      <div className={styles.buttons}>
        <button className={cn(styles.button, styles.buttonPrimary)}> 
          <img src={UserIcon} className={styles.buttonIcon} alt="sign in"  />
          <span className={styles.buttonText}>Войти</span>
        </button>
        <a href="#popup" className={cn(styles.headerPopup, styles.popupLink)}>
          <button className={cn(styles.button, styles.buttonBin)}>
            <img src={BuyingIcon} className={styles.buttonIcon} alt="bin" />
            <span className={styles.buttonText}>Корзина</span>
          </button>
        </a>
      </div>
    </header>
  )
}

export default Header