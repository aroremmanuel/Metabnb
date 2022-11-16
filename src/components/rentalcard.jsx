import Star from '../media/star.png'

function RentalCard(props) {
    return(
        <div id='card_container'>
            <div>
                <img src={props.image} id="card_photo" />
            </div>
            <div className="flex_display">
                <div>
                    <p id='card_name'>Desert King</p>
                </div>
                <div>
                    <h2 id='card_price'>1MBT per night </h2>
                </div>
            </div>
            <div className="flex_display">
                <div>
                    <p id='card_distance'>2345km away</p>
                </div>
                <div>
                    <p id='card_availability'>available for 2weeks stay </p>
                </div>
            </div>
            <div>
                <img src={Star} className="star_icon" />
                <img src={Star} className="star_icon" />
                <img src={Star} className="star_icon" />
                <img src={Star} className="star_icon" />
                <img src={Star} className="star_icon" />
            </div>
        </div>
    );
}

export default RentalCard;  