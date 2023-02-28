import styles from './Header.module.css'
import igniteLogo from '../images/ignite-logo.svg'

export function Header(){
return(
    <header className={styles.Header}>
        <img src={igniteLogo} alt="Logotipo do iginite" />
    </header>
    
)
}