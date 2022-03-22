import classes from './Discount.module.css';
import imagg from './parallax-2-1920x850.jpg';
import Zoom from 'react-reveal/Zoom';

const Discount =()=>{
    return (
        <div className={`container-fluid ${classes.book}`}>
            <img src={imagg} alt='Image For Booking Tour' className={classes.imaggg}/>
            <Zoom>
            <div>
                <h1 className={classes.sech2}> Sign Up for 25% Discount</h1>
                <section className={classes.sect}>Want to get an instant discount for your next tour? Leave your email <br></br>and sign up for our newsletter
                 with 25% off all our offers.</section>
                 <form className={classes.formm}>
                    <input type='email' placeholder='Enter Your Email...' className={classes.inpt}></input> 
                    <button className={classes.btn}>Subscripe</button>
                </form>
            </div>
            </Zoom>

        </div>
    )
};
export default Discount;