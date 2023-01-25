
import { useParams } from 'react-router-dom'
import Accordion from '../../components/Accordion/Accordion'
import { useProductDetail } from '../../hooks/useProductDetail'
import styles from './ProductDetail.module.scss'


const ProductDetails = () => {

  const { id: productId } = useParams()
  const { product,
    isColorSelected,
    handleColorClick,
    isStorageSelected,
    handleStorageClick,
    isButtonDisabled,
    handleClick
  } = useProductDetail(productId)

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
            {product?.colores?.map((color, index) => (
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
            {product?.almacenamiento?.map((storage, index) => (
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
          <button
            className='btn btn--primary'
            disabled={isButtonDisabled()}
            onClick={handleClick}
          >Añadir
          </button>
        </div>

        <Accordion dion title="Technical information" product={product} />

      </div>
    </div>
  )
}
export { ProductDetails }

