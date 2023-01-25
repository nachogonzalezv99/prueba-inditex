import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductCardSkeleton } from '../../components/ProductCard/ProductCardSkeleton'
import { Search } from "../../components/Search/Search"
import { useProductList } from '../../hooks/useProductList'
import styles from './ProductList.module.scss'

const ProductList = () => {

  const { isLoading, filteredProducts, onSearchChange, search } = useProductList()

  return (
    <div className={`${styles.productList} container section`}>
      <header className={styles.productList__header}>
        <h2 className={styles.productList__title}>All Products</h2>
        <Search search={search} onSearchChange={(e) => onSearchChange(e)} />
      </header>
      <div className={styles.products}>
        {isLoading ? Array(8).fill().map((product, index) => (
          <ProductCardSkeleton key={index}/>
        )) : 
        !isLoading && filteredProducts.length === 0 ? (
          <div>No products available</div>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        )}

      </div>

    </div>
  )
}
export { ProductList }

