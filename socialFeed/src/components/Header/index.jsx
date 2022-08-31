import './styles.css'

import socialIcon from '../../assets/icon-svg.svg'

export function Header(){
    return (
        <header className='header'>
           <img  className='logo' src={socialIcon} alt="socialIcon"/>
           <strong className='logo-text'>socialFeed</strong>
        </header>
        
    )
}