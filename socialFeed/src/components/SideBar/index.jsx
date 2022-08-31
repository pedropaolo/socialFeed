import styles from './styles.module.css'

import backImage from '../../assets/back.avif'
import { Pencil } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function SideBar() {
    return (
        <aside className={styles.sideBar}>
            {/* Imagem de capa */}
            <img  className={styles.backImage} src={backImage}  />

            {/* Corpo do Card */}
            <div className={styles.profile}>
                <Avatar src="https://github.com/pedropaolo.png" />
                <strong>Pedro Paolo</strong>
                <p>Web developer</p>
            </div>

            {/* Linha divisória */}
            <div className={styles.line}></div>

            {/* Botão */}
            <footer>
                <a href="#">
                <Pencil size="15"/> 
                Editar perfil
                </a>
            </footer>
        
        </aside>
    )
}