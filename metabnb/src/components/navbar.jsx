import Nav_icon from '../media/nav-icon.png';
import Nav_icon_text from '../media/nav-icon-text.png';


import ConnectWallet from './ConnectWallet.jsx'
import { useState } from "react";

function Navbar() {

    const [show , setShow] = useState(false)
    
    return (
        <div>
            <nav id='navbar'>
                <section>
                    <img src={Nav_icon} className="nav_icon" />
                    <img src={Nav_icon_text} className="nav_icon" />
                </section>
                <ul id='navbar_list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/place-to-stay'>Place to stay</a></li>
                    <li><a href='nfts'>NFTs</a></li>
                    <li><a href='community'>Community</a></li>
                </ul>
                <button id='connect_wallet' onClick={() => setShow(true) }>Connect wallet</button>
                
            </nav>

            <ConnectWallet show={show} />
        </div>
    );
}

export default Navbar;