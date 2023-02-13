import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import styles from './navigation.module.css'

export const Navigation = ()=>{
    return (
        <header className={styles.navWrapper}>
            <nav className='container'>
                <Link href='/' className={styles.navLogo}>
                    <Image
                        src={logo}
                        alt='Instituto Nacional de Pediatría'
                        width={'70'}
                    />
                </Link>
                <ul className={styles.navList}>
                    <li>
                        <Link href={'/'}>
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Galería
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}