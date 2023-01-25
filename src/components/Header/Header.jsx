import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {PublicRoutes} from '../../routes/routes'
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__main}>
          <Link to={PublicRoutes.PRODUCT_LIST} className={styles.header__title}><img src="./imgs/logo.webp"/></Link>
          <BreadCrumbs />
        </div>

        <ShoppingCart />
      </div>

    </header>
  )
}
export { Header }