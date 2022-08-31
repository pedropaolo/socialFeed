import styles from './comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/pedropaolo.png" />

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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laborum dolores pariatur quidem doloremque enim. Ab vitae, nobis quia architecto praesentium aliquam minus, earum harum iste quaerat ea. Porro, sit.
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