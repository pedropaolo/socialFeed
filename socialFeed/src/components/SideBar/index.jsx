import './styles.css'

import backImage from '../../assets/back.avif'

export function SideBar() {
    return (
        <aside className='sideBar'>
            {/* Imagem de capa */}
            <img  className='backImage' src={backImage}  />

            {/* Corpo do Card */}
            <div>
             <strong>Pedro Paolo</strong>
             <span>Um dev muito brabo</span>
            </div>

            {/* Ações */}
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        
        </aside>
    )
}