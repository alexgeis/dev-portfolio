function NavBar() {

    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="../vite.svg" className="logo" alt="Vite logo" />
                </a>
            </div>
            <div className="navbar-nav">
                <ul>
                    <li><a href="#projects"></a></li>
                    <li><a href="#music"></a></li>
                    <li><a href="#contact"></a></li>
                </ul>
            </div>
            <div className="navbar-hamburger"></div>
        </div>
    )
}

export default NavBar;