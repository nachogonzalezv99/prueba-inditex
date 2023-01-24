import { useState } from 'react'
import { BsCpuFill } from 'react-icons/bs'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styles from './Accordion.module.scss'

const Accordion = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(prev => !prev)
    return (
        <div className={styles.accordion}>
            <button className={styles.accordion__header} onClick={handleClick}>
                <h4>{title}</h4>
                {isOpen ? (
                    <HiChevronUp className={styles.accordion__header__icon} />)
                    : (
                        <HiChevronDown className={styles.accordion__header__icon} />
                    )}
            </button>
            {isOpen && (
                <div className={styles.accordion__body}>
                    {Array(5).fill().map((item, index) => (
                        <div key={index} className={styles.accordion__description}>
                            <BsCpuFill className={styles.accordion__icon} />
                            <p className={styles.accordion__key}>CPU</p>
                            <p className={styles.accordion__value}>1000 Ghz</p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}
export default Accordion