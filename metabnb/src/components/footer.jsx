import Footer_icon from '../media/footer_icon.png'
import Facebook from '../media/facebook.png'
import Instagram from '../media/instagram.png'
import Twitter from '../media/twitter.png'
import Corp from '../media/corp.png'

function Footer() {
    return(
        <div id='footer_container'>
                <div id='icon_column'>
                    <img src={Footer_icon} id="footer_icon" />
                    <div id='social_icons'>
                        <img src={Facebook} className="icon" />          
                        <img src={Instagram} className="icon" />          
                        <img src={Twitter} className="icon" />          
                    </div>
                    <div id='corp_container'>
                    <img src={Corp} className="icon" /><small> 2022 Metabnb</small>
                    </div>
                </div>
                <div>
                    <ul className='footer_list'>
                        <li className='footer_list_item'><h2>Community</h2></li>
                        <li className='footer_list_item'>NFT</li>
                        <li className='footer_list_item'>Tokens</li>
                        <li className='footer_list_item'>Landlords</li>
                        <li className='footer_list_item'>Discord</li>
                    </ul>
                </div>
                <div>
                    <ul className='footer_list'>
                        <li className='footer_list_item'><h2>Places</h2></li>
                        <li className='footer_list_item'>Castle</li>
                        <li className='footer_list_item'>Farms</li>
                        <li className='footer_list_item'>Beach</li>
                        <li className='footer_list_item'>Learn more</li>
                    </ul>
                </div>
                <div>
                    <ul className='footer_list'>
                        <li className='footer_list_item'><h2>About us</h2></li>
                        <li className='footer_list_item'>Road map</li>
                        <li className='footer_list_item'>Creators</li>
                        <li className='footer_list_item'>Career</li>
                        <li className='footer_list_item'>Contact us</li>
                    </ul>
                </div>
            </div>
    );
}

export default Footer;