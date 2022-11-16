import Nav_icon from '../media/nav-icon.png';
import Nav_icon_text from '../media/nav-icon-text.png';


import ConnectWallet from './ConnectWallet.jsx'
import { useState } from "react";

function Navbar() {


    const [show , setShow] = useState(false)
    
    return (
        <div>
            <nav id='navbar'>
                <section id='meta_logo'>
                    <img src={Nav_icon} className="nav_icon" />
                    <img src={Nav_icon_text} className="nav_icon" />
                </section>

                <div id='drop_menu'>
                <ul id='navbar_list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='place-to-stay'>Place to stay</a></li>
                    <li><a href='nfts'>NFTs</a></li>
                    <li><a href='community'>Community</a></li>
                </ul>
                </div>
                <button id='connect_wallet' onClick={() => setShow(true) }>Connect wallet</button>
            </nav>

            <ConnectWallet onCLose={() => setShow(false)} show={show} />
        </div>
    );
}

export default Navbar;