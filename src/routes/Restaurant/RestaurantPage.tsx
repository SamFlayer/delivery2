import styles from './Restaurant.module.scss'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer';

const RestaurantPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
}

export default RestaurantPage;