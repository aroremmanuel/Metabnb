import Close_icon from '../media/close.png'
import Connect_icon from '../media/connect.png'
import MetaMask from '../media/metamask_wallet.png'
import WalletConnect from '../media/wallet_connect.png'

function ConnectWallet(props) {
    if (!props.show) {
        return null
    }
    
    return(
            
        
        <div id='modal'>
            <div id='modal_container'>
                <div className='flex' id='connect_header'>
                    <h1>Connect Wallet</h1>
                    <button id='close_button' onClick={props.onCLose}><img src={Close_icon} id="close_icon" /></button>
                </div>
                <div>
                    <p>Choose your preferred wallet:</p>
                </div>
                <div className='flex , wallets'>
                    <div className='flex'>
                    <img src={MetaMask} />
                    <h2>Metamask</h2>
                    </div>
                    <img src={Connect_icon} />
                </div>
                <div className='flex , wallets' >
                    <div className='flex'>
                    <img src={WalletConnect} />
                    <h2>WalletConnect</h2>
                    </div>
                    <img src={Connect_icon} />
                </div>
            </div>
        </div>
    );
}

export default ConnectWallet;