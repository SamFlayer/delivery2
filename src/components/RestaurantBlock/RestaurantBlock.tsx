import cn from 'classnames';
import styles from './RestaurantBlock.module.scss'
import StarIcon from 'images/star.svg'
import Img from 'images/promo-image-2.png'

interface IRestaurantBlock {
  id?: string | number;
}

export const RestaurantBlock = ({ id }: IRestaurantBlock) => {
  return (
    <a href={`restaurants/${id}`} className={styles.card}>
      <img src={Img} alt="" className={styles.cardImage} />
        <div className={styles.cardText}>
          <div className={styles.cardHeading}>
            <h3 className={styles.cardTitle}>Пицца Плюс</h3>
            <span className={cn(styles.cardTag, styles.tag)}>40 мин</span>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.rating}>
              <img src={StarIcon} alt="" className={styles.ratingStar} />
                4.1
            </div>
            <div className={styles.price}>От 300 ₽</div>
            <div className={styles.category}>Пицца/суши</div>
          </div>
        </div>
    </a>
  )
}

export default RestaurantBlock;