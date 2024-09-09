import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="App dot">
            <header className="header">
                <nav className="navigation">
                    <div>
                        <p className="logo work-sans-bold">kp2129</p>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <IconMenu2 stroke={2} />
                    </div>
                    <div className={`links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/">About me</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Education">Education</Link>
                        <Link to="/Contacts">Contacts</Link>

                    </div>
                </nav>
            </header>
            <main className="main-content">

                <Outlet />
            </main>
        </div>
    );
}

export default App;

