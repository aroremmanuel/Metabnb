import RentalCard from './rentalcard.jsx';

import Photo_1 from '../media/photo_1.png'
import Photo_2 from '../media/photo_2.png'
import Photo_3 from '../media/photo_3.png'
import Photo_4 from '../media/photo_4.png'
import Photo_5 from '../media/photo_5.png'
import Photo_6 from '../media/photo_6.png'
import Photo_7 from '../media/photo_7.png'
import Photo_8 from '../media/photo_8.png'

function Inspiration() {
    return(
        <div>
            <h1 id="inspiration_header">Inspiration for your next adventure</h1>
            <div>
                <div id='rental_container'>
                    <RentalCard 
                        image = {Photo_1}
                    />
                    <RentalCard 
                        image = {Photo_2}
                    />
                    <RentalCard 
                        image = {Photo_3}
                    />
                    <RentalCard 
                        image = {Photo_4}
                    />
                    <RentalCard 
                        image = {Photo_5}
                    />
                    <RentalCard 
                        image = {Photo_6}
                    />
                    <RentalCard 
                        image = {Photo_7}
                    />
                    <RentalCard 
                        image = {Photo_8}
                    />
                </div>
            </div>
        </div>
    );
}

export default Inspiration;