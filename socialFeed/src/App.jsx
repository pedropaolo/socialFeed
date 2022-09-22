import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedropaolo.png',
      name: 'Pedro Paolo', 
      role: 'Full Stack Developer'
    },

    content: [
      { type: 'paragraph' , content: "E ai galera!"},
      { type: 'paragraph' , content: "Acabei de subir um projeto novo no meu git! confere lá"},
      { type: 'paragraph' , content:'www.google.com'}
    ],

    publishedAt: new Date('2022-09-22T15:58:00')
  } ,

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedropaolo.png',
      name: 'Fulano', 
      role: 'Backend Developer'
    },

    content: [
      { type: 'paragraph' , content: "Boa noite!"},
      { type: 'paragraph' , content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
      { type: 'paragraph' , content:'www.google.com'}
    ],




    publishedAt: new Date('2022-09-22T15:58:00')
  }
]

function App() {
 

  return (
    <>
    <Header />
    <div className={styles.wrapper}>

      {/* Sidebar */}
      <SideBar />

      {/* Feed */}
      <main>
       {
        posts.map(post => {
          return <Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>
        })
       }
      </main>

    </div>
    </>
    
   
  )
}

export default App
