import './NavBar.css'

import avatar from '../../assets/avatar.svg'

const NavBar = ({ openSidebar }) =>{
    return(
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar-left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active-link">Admin</a>
            </div>
            <div className="navbar-right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default NavBar