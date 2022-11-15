import Nav_icon from '../media/nav-icon.png';
import Nav_icon_text from '../media/nav-icon-text.png';

function Navbar() {
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
                <button id='connect_wallet'>Connect wallet</button>
            </nav>
        </div>
    );
}

export default Navbar;