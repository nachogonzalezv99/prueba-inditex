import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__main}>
          <Link to="/" className={styles.header__title}><img src="./imgs/logo.png"/></Link>
          <BreadCrumbs />
        </div>

        <div className={styles.header__shoppingCart}>3</div>
      </div>

    </header>
  )
}
export { Header }