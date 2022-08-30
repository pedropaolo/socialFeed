import { Header } from "./components/Header"
import './global.css'

import styles from './App.module.css'
import { SideBar } from "./components/SideBar"

function App() {
 

  return (
    <>
    <Header />
    <div className={styles.wrapper}>

      {/* Sidebar */}
      <SideBar />

      {/* Feed */}
      <main>
        <h3>Aqui fica o dahsboard</h3>
      </main>

    </div>
    </>
    
   
  )
}

export default App
