import styles from './Profile.module.css'
import background from '../images/background.svg'
import {Image} from './Image'
import line from '../images/line.svg'
import pen from '../images/pen.svg'


export function Profile() {
    return (
        <div className={styles.container}>
            <img src={background} alt="" className={styles.background} />
            <Image picture="profile"/>
            <strong className={styles.strong}>Natalha Padilha</strong>
            <p>UI designer</p>
            <img src={line} alt=""/>
            <a href="#"><img src={pen} alt="Lapis" />Editar seu perfil</a>
        </div>
    )
}
