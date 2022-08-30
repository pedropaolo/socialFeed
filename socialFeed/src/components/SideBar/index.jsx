import './styles.css'

import backImage from '../../assets/back.avif'
import { PencilLine } from 'phosphor-react'

export function SideBar() {
    return (
        <aside className='sideBar'>
            {/* Imagem de capa */}
            <img  className='backImage' src={backImage}  />

            {/* Corpo do Card */}
            <div className='profile'>
             <img className='avatar' src="https://github.com/pedropaolo.png" />
             <strong>Pedro Paolo</strong>
             <p>Web developer</p>
            </div>

            {/* Linha divisória */}
            <div className='line'></div>

            {/* Botão */}
            <footer>
                <a href="#">
                <PencilLine /> Editar seu perfil</a>
            </footer>
        
        </aside>
    )
}