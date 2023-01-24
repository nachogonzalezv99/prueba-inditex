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
      if ((product.marca || product.modelo).match(new RegExp(search))) {
        return product
      }
    })
  }, [products, search])

  useEffect(() => {
    setProducts(getAllProducts())
  }, [search])


  return (
    <div className={`${styles.productList} container section`}>
      <heder className={styles.productList__header}>
        {console.log(filteredProducts)}
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

