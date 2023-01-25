import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { MdDesktopWindows } from 'react-icons/md'
import { FaMemory, FaWeightHanging } from 'react-icons/fa'
import styles from './Accordion.module.scss'
import TechInfoComponent from './TechInfoComponent'
import { IoResizeSharp } from 'react-icons/io5'
import { BsCpuFill, BsWindow, BsBatteryFull, BsCameraFill } from 'react-icons/bs'

const Accordion = ({ title, product }) => {

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
                    <TechInfoComponent icon={<BsCpuFill />} title="CPU" subtitle={`${product.cpu} GHz`} />
                    <TechInfoComponent icon={<FaMemory />} title="RAM" subtitle={`${product.ram} m/s`} />
                    <TechInfoComponent icon={<BsWindow />} title="Sistema Operativo" subtitle={product.sistemaOperativo} />
                    <TechInfoComponent icon={<MdDesktopWindows />} title="Resolución de pantalla" subtitle={product.resolucionPantalla} />
                    <TechInfoComponent icon={<BsBatteryFull />} title="Batería" subtitle={product.bateria} />
                    <TechInfoComponent icon={<BsCameraFill />} title="Cámaras" subtitle={product.camaras} />
                    <TechInfoComponent icon={<IoResizeSharp />} title="Dimensiones" subtitle={product.dimensiones} />
                    <TechInfoComponent icon={<FaWeightHanging />} title="Peso" subtitle={`${product.peso} kg`} />

                </div>
            )}
        </div>
    )
}
export default Accordion