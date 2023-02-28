import profile from '../images/profile.svg'
import styles from './Image.module.css'


export function Image(props){
    return(
        <img src={profile} alt="" className={styles.picture}/> 
    )}
