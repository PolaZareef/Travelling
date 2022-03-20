import classes from './HotTours.module.css';
import TourItems from './HotToursItem';
const DUMMY_TOURS=[
    {
        id:'T1',
        city:'Spain, Benidorm',
        price:790,
        parag:'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...'
    },
    {
        id:'T2',
        city:'Mauritius Island, Africa',
        price:890,
        parag:'The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...'
    }
];
const HotTours =()=>{
    const HotToursmenu=DUMMY_TOURS.map((item)=>(
        <TourItems 
            id={item.id}
            city={item.city}
            price={item.price}
            parag={item.parag}
        />
    ));
    return (
        <div className={`${classes.tours}`} id='hot'>
            <h1>Hot Tours</h1>
            <div className={`container`}>
                {HotToursmenu}
            </div>
        </div>
    )
};
export default HotTours;