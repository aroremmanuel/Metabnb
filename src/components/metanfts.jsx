import NFT from '../media/nft_photo.png'

function Metanfts() {
    return(
        <div id='nft_container'>
            <div id='nft_text'>
                <h2 id='nft_header'>Metabnb NFTs</h2>
                <p id='nft_description'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button id='nft_learn_more'>Learn More</button>
            </div>
            <div>
                <img src={NFT} id='nft_image' />
            </div>
        </div>
    );
}

export default Metanfts;