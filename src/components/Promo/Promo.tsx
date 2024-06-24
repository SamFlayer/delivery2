import styles from './Promo.module.scss'

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <h1 className={styles.promoTitle}>Онлайн-сервис <br /> доставки еды на дом</h1>
      <p className={styles.promoText}>Блюда из любимого ресторана привезет <br /> курьер в перчатках, маске и с антисептиком</p>
    </section>
  )
}

export default Promo