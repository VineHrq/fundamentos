import styles from './Comment.module.css'
import { Image } from './Image'



export function Comment() {
  return (
    <div className={styles.comment}>
      <Image />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          Aplaudir
        </footer>
      </div>

    </div>
  )
}