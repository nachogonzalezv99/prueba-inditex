import { Link } from 'react-router-dom';
import styles from "./ProductCard.module.scss";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/${product.modelo}`} className={styles.product}>
      <img className={styles.product__img} src={product.img} />
      <div className={styles.product__info}>
        <h3>{product.marca}</h3>
        <p>{product.modelo}</p>
        <p>{product.precio} €</p>
      </div>
    </Link>
  )
}
export { ProductCard };
