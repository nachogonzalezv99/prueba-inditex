import styles from './ShoppingCart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useEffect } from 'react'
import { getShoppingCartTotal } from '../../services/shoppingCart.services'
import { getShoppingCartTotalRedux } from '../../features/shoppingCartSlice'
const ShoppingCart = () => {
  const dispatch = useDispatch()
  const { total } = useSelector((store) => store.shoppingCart)

  useEffect(()=>{
    dispatch(getShoppingCartTotalRedux())
  }, [])

  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart className={styles.cart__icon} />
     {total !== 0 && <span className={styles.cart__total}>{total > 9 ? '9+' : total}</span>}

    </div>
  )
}
export default ShoppingCart