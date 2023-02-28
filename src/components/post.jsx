import styles from './Post.module.css'
import {Image} from './Image'

export function Post(){
return(
   <main>
    <div className={styles.container}>
        <header>
          <Image picture="profile"/>
          <div className={styles.nameFunction}>
            <h1>Jane Cooper</h1>
            <p>Dev Front-End</p>
          </div>
          <time datetime="18:00">18:00</time>
        </header>
        
          
        
          
        
    </div>
   </main>
)}