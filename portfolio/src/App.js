import './App.css';
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
            <a href="#AboutMe">About me</a>
            <a href="#Projects">Projects</a>
            <a href="#Education">Education</a>
            <a href="#Contacts">Contacts</a>
          </div>
        </nav>
      </header>
      <main className="main-content">

      </main>
    </div>
  );
}

export default App;
