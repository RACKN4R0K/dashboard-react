import './Sidebar.css';

import Logo from '../../assets/foto.jpeg';


const Sidebar = ({ sidebarOpen, closeSideBar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className='sidebar-title'>
                <div className='sidebar-img'>
                    <img src={Logo} alt='profile picture' className='Logo'/>
                    <h1>HENRIQUE</h1>
                </div>
                <i
                    onClick={() => closeSideBar()}
                    className='fa fa-times'
                    id='sidebarIcon'
                    aria-hidden="true"
                ></i>
            </div>
            <div className='sidebar-menu'>
                <div className='sidebar-link active-menu-link'>
                    <i className='fa fa-minus-square'></i>
                    <a href='#'>Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar-link'>
                    <i className='fa fa-tachometer'></i>
                    <a href='#'>Área administrativa</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-building'></i>
                    <a href='#'>Lojas</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-archive'></i>
                    <a href='#'>Produtos</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-bars'></i>
                    <a href='#'>Categorias</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-cutlery'></i>
                    <a href='#'>Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className='sidebar-link'>
                    <i className='fa fa-male'></i>
                    <a href='#'>Adiministradores</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-user-circle'></i>
                    <a href='#'>Usuário</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-money'></i>
                    <a href='#'>Pagamentos e Custos</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-tasks'></i>
                    <a href='#'>A plataforma</a>
                </div>
                <div className='sidebar-link'>
                    <i className='fa fa-file-text'></i>
                    <a href='#'>Política de Privacidade</a>
                </div>
                <div className='sidebar-logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;