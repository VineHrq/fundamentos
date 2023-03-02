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
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="#">👉 jane.design/doctorcare</a></p>
          <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        </div>
        
          
        
          
        
    </div>
   </main>
)}