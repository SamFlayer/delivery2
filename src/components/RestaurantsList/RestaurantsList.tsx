import RestaurantBlock from '../RestaurantBlock/RestaurantBlock';
import styles from './RestaurantsList.module.scss'

export const RestaurantsList = () => {
  return (
    <>
      <h1>Рестораны</h1>
      <div className={styles.cards}>
        <RestaurantBlock id={1} />
        <RestaurantBlock id={2} />
        <RestaurantBlock id={3} />
        <RestaurantBlock id={4} />
        <RestaurantBlock id={5} />
        <RestaurantBlock id={6} />
        <RestaurantBlock id={7} />
      </div>
    </>
  )
}

export default RestaurantsList;