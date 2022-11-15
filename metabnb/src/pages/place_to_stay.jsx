import Locations from '../components/locations.jsx'
import RentalCard from '../components/rentalcard.jsx'

import Photo_1 from '../media/photo_1.png'
import Photo_2 from '../media/photo_2.png'
import Photo_3 from '../media/photo_3.png'
import Photo_4 from '../media/photo_4.png'
import Photo_5 from '../media/photo_5.png'
import Photo_6 from '../media/photo_6.png'
import Photo_7 from '../media/photo_7.png'
import Photo_8 from '../media/photo_8.png'
import Photo_9 from '../media/photo_9.png'
import Photo_10 from '../media/photo_10.png'
import Photo_11 from '../media/photo_11.png'
import Photo_12 from '../media/photo_12.png'
import Photo_13 from '../media/photo_13.png'
import Photo_14 from '../media/photo_14.png'
import Photo_15 from '../media/photo_15.png'
import Photo_16 from '../media/photo_16.png'

function Place_to_stay() {
    return(
        <div>
            <Locations />
            <div id='rental_container'>
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
                        image = {Photo_9}
                    />
                    <RentalCard 
                        image = {Photo_10}
                    />
                    <RentalCard 
                        image = {Photo_11}
                    />
                    <RentalCard 
                        image = {Photo_12}
                    />
                    <RentalCard 
                        image = {Photo_13}
                    />
                    <RentalCard 
                        image = {Photo_14}
                    />
                    <RentalCard 
                        image = {Photo_15}
                    />
                    <RentalCard 
                        image = {Photo_16}
                    />
            </div>
        </div>
    );
}

export default Place_to_stay;