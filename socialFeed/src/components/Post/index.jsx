import styles from './styles.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.postAvatar}>
                        <img className={styles.avatarPic} src="https://github.com/pedropaolo.png" />
                    </div>

                    <div className={styles.authorInfo}>
                        <strong>DJ BOY</strong>
                        <span>UX Designer</span>
                    </div>

                </div>

                <time title="11 de Maio às 08:08" dateTime='2022-05-11 08:08:10'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p className={styles.postText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam velit veritatis natus provident, officiis, voluptatibus ipsam atque accusamus suscipit eum ducimus nostrum non iste quidem commodi dolore possimus dolores est?
                </p>

            </div>

        </article>
    )
}