import styles from './post.module.css'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'

export function Post(props) {

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

            <form className={styles.commentForm}>
                <strong className={styles.comment}>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}