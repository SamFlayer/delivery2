import styles from './MainPage.module.scss'
import Header from 'components/Header/Header'
import Promo from 'components/Promo/Promo'
import RestaurantsList from 'components/RestaurantsList/RestaurantsList';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Promo />
      <RestaurantsList />
      <Footer />
    </div>
  );
}

export default MainPage;