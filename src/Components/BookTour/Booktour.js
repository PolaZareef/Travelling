import classes from './BookTour.module.css';
import imagg from './parallax-1-1920x850.jpg';
import Zoom from 'react-reveal/Zoom';

const Booking=()=>{
    return(
        <div className={`container-fluid ${classes.book}`}>
            <img src={imagg} alt='Image For Booking Tour' className={classes.imaggg}/>
            <Zoom>
            <div>
                <h2 className={classes.sech2}> First-class Impressions <br></br>are Waiting for You!</h2>
                <section className={classes.sect}>Our agency offers travelers various tours and excursions with destinations all over
                 <br></br>the world. Browse our website to find your dream tour!</section>
                <button className={classes.btn}>Book a Tour Now</button>
            </div>
            </Zoom>

        </div>
    )
};
export default Booking;