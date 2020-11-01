import { useState } from 'react';
import logo from './assets/images/logo.svg';
import burger from './assets/images/burger.svg';
import exit from './assets/images/exit.svg';
import server from './assets/images/server.svg';
import scroll from './assets/images/scroll.svg';
import calendar from './assets/images/icon-1.svg';
import wallet from './assets/images/icon-2.svg';
import phone from './assets/images/icon-3.svg';
import user1 from './assets/images/user1.png';
import user2 from './assets/images/user2.png';
import logoWhite from './assets/images/logo-white.svg';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="23andfour logo" className="logo"/>

          <nav>
            <a href="#" className="hide-desktop">
              <img src={burger} alt="toggle menu" className="menu" onClick={() => setOpenMenu(true)}/>
            </a>

            <ul className={`show-desktop ${!openMenu ? 'hide-mobile' : ''}`}>
              <li onClick={() => setOpenMenu(false)} className="exit-btn hide-desktop"><img src={exit}  alt="exit menu"/></li>
              <li><a href="#">home</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </header>

        <section>
          <img src={server} alt="server" className="server"/>
          <h1>Web Hosting for the Modern Era</h1>
          <p className="subhead">Go serverless and pay only for what you use.</p>

          <img src={scroll} alt="scroll down" className="scroll hide-mobile show-desktop"/>
        </section>

      </div>

      <div className="blue-container">
        <div className="container">
          <ul>
            <li>
              <img src={calendar} alt="calendar icon"/>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
            </li>
            <li>
              <img src={wallet} alt="wallet icon"/>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
            </li>
            <li>
              <img src={phone} alt="phone icon"/>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="gray-container">
        <div className="container">
          <ul>
            <li>
              <figure>
                <img src={user1} alt="user1 avatar"/>
                <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur totam, dolore</blockquote>
                <figcaption>- Jane Doe</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={user2} alt="user2 avatar"/>
                <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur totam, dolore</blockquote>
                <figcaption>- John Doe</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h2>Start your free trial now!</h2>
        <a href="#" className="cta">Get Started</a>
      </div>

      <footer>
        <div className="footer-container">
          <div className="container">
            <a href="#">
              <img src={logoWhite} alt="logo white version"/>
            </a>
            <p className="address">Melrose Place, 90210<br/>USA</p>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <span>{` | `}</span>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
