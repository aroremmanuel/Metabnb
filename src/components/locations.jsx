import Setting_icon from '../media/setting.png'

function  Locations() {
    return(
        <div id='place_page_container'>
            <ul id='location_list_container'>
                <li className='location_list_item'>Restaurant</li>
                <li className='location_list_item'>Cottage</li>
                <li className='location_list_item'>Castle</li>
                <li className='location_list_item'>Fantast city</li>
                <li className='location_list_item'>beach</li>
                <li className='location_list_item'>Carbins</li>
                <li className='location_list_item'>Off-grid</li>
                <li className='location_list_item'>Farm</li>
                <li className='location_list_item' >
                    <div id='location_button_container'>
                        <button id='location_button'>
                            <div>
                                Location
                            </div>
                            <div>
                                <img src={Setting_icon} id='setting_icon' />
                            </div>    
                            </button>
                    </div>    
                </li>
            </ul>
        </div>
    );
}

export default Locations;