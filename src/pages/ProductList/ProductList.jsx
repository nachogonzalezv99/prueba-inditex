import { ProductCard } from '../../components/ProductCard/ProductCard'
import { Search } from "../../components/Search/Search"
import { products } from "../../data/products"
import styles from './ProductList.module.scss'

const ProductList = () => {

  return (
    <div className={`${styles.productList} container section`}>
      <heder className={styles.productList__header}>
        <h2>All Products</h2>
        <Search />
      </heder>
      <div className={styles.products}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

    </div>
  )
}
export { ProductList }
