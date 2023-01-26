import styles from './Skeleton.module.scss'

const Skeleton = ({style}) => {
  return (
    <div className={styles.skeleton} style={style}/>
  )
}
export default Skeleton