import styles from './ProductDetail.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/products.services'
import Accordion from '../../components/Accordion/Accordion'

const ProductDetails = () => {
  const { id: productId } = useParams()
  const [product, setProduct] = useState({})

  const [selectedColor, setSelectedColor] = useState('D9D9D9')
  const colors = ['D9D9D9', '5A5B7D', '81D6CB', 'FFFFFF', '000000']
  const isColorSelected = (color) => color === selectedColor
  const handleColorClick = (color) => setSelectedColor(color)

  const [selectedStorage, setSelectedStorage] = useState('64')
  const storages = ['64', '125', '256']
  const isStorageSelected = (storage) => storage === selectedStorage
  const handleStorageClick = (storage) => setSelectedStorage(storage)


  useEffect(() => {
    setProduct(getSingleProduct(productId))
  })


  return (
    <div className={`${styles.productDetail} container section`}>
      <div>
        <img src={product.img} className={styles.productDetail__img} />
      </div>
      <div>
        <div className={styles.productDetail__section}>
          <h2>{product.modelo}</h2>
          <h3 className={styles.productDetail__marca}>{product.marca}</h3>
        </div>
        <div className={styles.productDetail__section}>
          <p>{product.precio} €</p>
        </div>

        <div className={styles.productDetail__section}>
          <h4>Color</h4>
          <div className={styles.colors}>
            {colors.map((color, index) => (
              <button
                key={index}
                className={`${styles.colors__item} ${isColorSelected(color) && styles.colors__item__selected}`}
                style={{ backgroundColor: `#${color}` }}
                onClick={() => handleColorClick(color)} />
            ))}
          </div>

        </div>

        <div className={styles.productDetail__section}>

          <h4>Storage</h4>
          <div className={styles.storage}>
            {storages.map((storage, index) => (
              <button
                key={index}
                className={`${styles.storage__item} ${isStorageSelected(storage) && styles.storage__item__selected}`}
                onClick={() => handleStorageClick(storage)}
              >
                {storage} GHz
              </button>
            ))}
          </div>
        </div>
        <div className={styles.productDetail__section}>
          <button className='btn btn--primary'>Añadir</button>
        </div>
        
        <Accordion title="Technical information" />

      </div>
    </div>
  )
}
export { ProductDetails }