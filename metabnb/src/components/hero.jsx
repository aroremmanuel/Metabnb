import Homes from '../media/homes.png';

function Hero() {
    return (
        <div id='hero_container'>
            <div id='hero_header_container' className='hero_header_element'>
                <h1 id='hero_header' className='hero_header_element'>Rent a <span className='purple'>Place</span> away from <span className='purple'>Home</span> in the <span className='purple'>Metaverse</span></h1>
                <p id='hero_header_paragraph' className='hero_header_element'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className='hero_header_element'>
                    <input placeholder='Search for Location' id='search_input'></input>
                    <button type='submit' for='search_input' id='search_button'>Search</button>
                </div>
            </div>
            <div id='hero_image_container'>
                <img src={Homes} id='hero_image' />
            </div>
        </div>
    );
}

export default Hero;