import styles from './comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { useState } from 'react';

export function Comment(props) {

const [ likeCount , setLikeCount ] = useState(0)

// Function that comes within the comment props

function handleDeleteComment() {
    props.deleteComment(props.content);
}

function handleLikeComment() {
    setLikeCount(likeCount + 1)
}

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

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p className={styles.mainText}>
                      {props.content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp size={20}/> Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>


        </div>
    )
}