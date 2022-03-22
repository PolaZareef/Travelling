<<<<<<< HEAD
import classes from './HotTours.module.css';
import TourItems from './HotToursItem';
import Slide from 'react-reveal/Slide';

/*import SecImg from './firsttour.jpg';
import Secimgg from './sectour.jpg';*/
const DUMMY_TOURS=[
    {
        id:'T1',
        city:'Spain, Benidorm',
        price:790,
        parag:'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...',
    },
    {
        id:'T2',
        city:'Mauritius Island, Africa',
        price:890,
        parag:'The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...',
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
        <Slide left>

        <div className={`${classes.tours}`} id='hot'>
            <h1>Hot Tours</h1>
            <div className={`container`}>
                {HotToursmenu}
            </div>
        </div>
        </Slide>

    )
};
=======
import classes from './HotTours.module.css';
import TourItems from './HotToursItem';
import Slide from 'react-reveal/Slide';

/*import SecImg from './firsttour.jpg';
import Secimgg from './sectour.jpg';*/
const DUMMY_TOURS=[
    {
        id:'T1',
        city:'Spain, Benidorm',
        price:790,
        parag:'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...',
    },
    {
        id:'T2',
        city:'Mauritius Island, Africa',
        price:890,
        parag:'The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...',
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
        <Slide left>

        <div className={`${classes.tours}`} id='hot'>
            <h1>Hot Tours</h1>
            <div className={`container`}>
                {HotToursmenu}
            </div>
        </div>
        </Slide>

    )
};
>>>>>>> f588f4874c583f7fef74226b5fc8da7c509c7262
export default HotTours;