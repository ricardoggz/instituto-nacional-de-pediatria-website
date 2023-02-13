import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import styles from './navigation.module.css'

export const Navigation = ()=>{
    return (
        <header className={styles.navWrapper}>
            <div className={styles.navLogoContainer}>
                <Link href='/' className={styles.navLogo}>
                    <Image
                        src={logo}
                        alt='Instituto Nacional de Pediatría'
                        width={'70'}
                        /> 
                </Link>
            </div>
            <nav className='container'>
                <ul className={styles.navList}>
                    <li>
                        <Link href={'/'}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Videoconferencias
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}