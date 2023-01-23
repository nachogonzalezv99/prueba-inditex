import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {PublicRoutes} from '../../routes/routes'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__main}>
          <Link to={PublicRoutes.PRODUCT_LIST} className={styles.header__title}><img src="./imgs/logo.png"/></Link>
          <BreadCrumbs />
        </div>

        <div className={styles.header__shoppingCart}>3</div>
      </div>

    </header>
  )
}
export { Header }