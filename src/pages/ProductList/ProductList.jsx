import { useEffect, useMemo, useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { Search } from "../../components/Search/Search"
import { getAllProducts } from '../../services/products.services'
import styles from './ProductList.module.scss'

const ProductList = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState([])

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if ((product.marca).match(new RegExp(search, 'i')) ||
        (product.modelo).match(new RegExp(search, 'i'))) {
        return product
      }
    })
  }, [products, search])

  useEffect(() => {
    setProducts(getAllProducts())
  }, [])

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className={`${styles.productList} container section`}>
      <header className={styles.productList__header}>
        <h2 className={styles.productList__title}>All Products</h2>
        <Search search={search} onSearchChange={(e) => onSearchChange(e)} />
      </header>
      <div className={styles.products}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

    </div>
  )
}
export { ProductList }

