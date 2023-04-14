import styles from './Comment.module.css'
import { Image } from './Image'
import Trash from '../images/trash.svg'
import ThumbsUp from '../images/thumbsUp.svg'


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
              <img src={Trash} alt="lixeiro" />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <img src={ThumbsUp} alt="like" />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}