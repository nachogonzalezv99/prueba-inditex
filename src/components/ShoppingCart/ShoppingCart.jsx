import styles from './ShoppingCart.module.scss'
import { useSelector } from 'react-redux/es/exports'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const ShoppingCart = () => {
  const { total } = useSelector((store) => store.shoppingCart)
  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart className={styles.cart__icon} />
     {total !== 0 && <span className={styles.cart__total}>{total > 9 ? '9+' : total}</span>}

    </div>
  )
}
export default ShoppingCart