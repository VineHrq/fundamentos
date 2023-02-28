import { Header } from './components/Header'
import {Post} from './components/post'
import {Profile} from './components/Profile'
import styles from './app.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Profile/>
        </aside>
        <main>
          <Post />
        </main>
      </div>

    </div>
  )
}

export default App

