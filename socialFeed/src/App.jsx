import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

function App() {
 

  return (
    <>
    <Header />
    <div className={styles.wrapper}>

      {/* Sidebar */}
      <SideBar />

      {/* Feed */}
      <main>
       <Post />
      </main>

    </div>
    </>
    
   
  )
}

export default App
