import styles from './post.module.css'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { useState } from 'react';


export function Post(props) {

    const [comment , writeComment ] = useState([
        'Você é fonomeno mlq doido!'
    ]);

    const [newComment, setNewComment] = useState('');

    

    function handleCreateComment() {

        // Avoiding html default behavior (Refreshing the page whein submit form)

        event.preventDefault()

        /* Using setState function to add the new comment on the screen

        1-

        2- ...comment, is a spred Operator -> maintains all the previous content of the array and push the new
        content in the last position of the array
        
        */

        writeComment([...comment, newComment ])
        setNewComment('');

        // Cleaning the input text area when the form is submited

        // event.target.comment.value = '';

    }


    function handleNewComment() {

        event.preventDefault()

        // event.target.value returns the value on the element wicth flag was setted to onChange
        // The function storage the new value in the state newComment
        setNewComment(event.target.value)
    }

    // Convertendo data através do Intl - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl

    console.log("MOTHEFOCKER" , props)
    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR' , {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(props.publishedAt);

    return (
        <article className={styles. post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.postAvatar}>
                        <Avatar src={props.author.avatarUrl} />
                    </div>

                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>

                </div>

                <time title="11 de Maio às 08:08" dateTime='2022-05-11 08:08:10'>
                    {
                        publishedDateFormat
                    }
                </time>
            </header>

            <div className={styles.content}>
                <p className={styles.postText}>
                    {props.content.map( line => {
                        if(line.type == 'paragraph') {
                            return <p>{line.content}</p>
                        }

                        else if (line.type == 'link'){
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })}
                </p>

            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong className={styles.comment}>Deixe seu feedback</strong>

                <textarea
                 placeholder='Deixe um comentário' 
                 name="comment"
                 onChange={handleNewComment}
                 value={newComment}></textarea>

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                { comment.map( comment => {
                    return <Comment content={comment}/>
                })}
            </div>

        </article>
    )
}