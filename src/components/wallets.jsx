import MBToken from '../media/mbtoken.svg';
import MetaMask from '../media/metamask.svg';
import OpenSea from '../media/opensea.svg';

function Wallets() {
    return(
        <div id="wallets_container">
            <img src={MBToken} id="wallets_image" className='wallet_icon' />
            <img src={MetaMask} id="wallets_image" className='wallet_icon' />
            <img src={OpenSea} id="wallets_image" className='wallet_icon' />
        </div>
    );
}

export default Wallets;