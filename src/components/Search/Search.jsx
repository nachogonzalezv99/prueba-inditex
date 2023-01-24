import styles from './Search.module.scss'
const Search = ({ search, onSearchChange }) => {

  return (
    <div className={styles.search}>
      <label htmlFor="search"  className={styles.search__label}>Search: </label>
      <input
       className={styles.search__input}
        id="search"
        name="search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  )
}
export { Search };
