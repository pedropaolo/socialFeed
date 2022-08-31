import styles from './comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar src="https://i.scdn.co/image/ab6761610000e5ebf9f3437fe3ca3a832e6bd096" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tuezin</strong>
                            <time title='11 de Maio as 08:13h' dateTime='2022-05-11 08:13:30'>1h Atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p className={styles.mainText}>
                       Parabéns mlkin! Vc vai longe #30noComando
                    </p>
                </div>

                <footer>
                    <button>
                    <ThumbsUp size={20}/> Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>


        </div>
    )
}