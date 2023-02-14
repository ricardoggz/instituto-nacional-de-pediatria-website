import Link from 'next/link'
import styles from './jumbotron.module.css'

export const Jumbotron = ()=>{
    return (
        <section className={styles.jumbotronWrapper}>
                <h1 className='container'>
                    Colaboración institucional
                    Hospital Infantil de México y
                    el Instituto Nacional de Pediatría
                </h1>
                <Link 
                href='/'
                className={styles.jumbotronButton}>
                    Contáctanos
                </Link>
        </section>
    )
}