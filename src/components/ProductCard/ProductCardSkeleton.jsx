import { Link } from 'react-router-dom';
import styles from "./ProductCardSkeleton.module.scss";
const ProductCardSkeleton = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__img}/>
      <div className={styles.product__info}>
        <div className={styles.product__text}/>
        <div className={styles.product__text}/>
        <div className={styles.product__price} />
      </div>
    </div>
  )
}
export { ProductCardSkeleton };
