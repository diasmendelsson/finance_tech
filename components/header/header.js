import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
    return(

        <header className={styles.header}>

                <div className={styles.header_box}> 
    
                    <Link className={styles.link} href='/'>
                        <h2>Finance Tech</h2>
                        <Image 
                            className={styles.img}
                            src="/cifrao.png"
                            alt='Finance Tech Logo'
                            width={45}
                            height={45}
                        />
                     </Link>

                </div>

        </header>
    )
}