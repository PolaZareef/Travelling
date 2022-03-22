<<<<<<< HEAD
import classes from './HotToursItem.module.css';
import Firimg from './firsttour.jpg';
import Secimgg from './sectour.jpg';
const TourItems =(props)=>{
    return (
        <div className={`${classes.tour}`}>
            <div className={`container`}>
                <div className={`row ${classes.roww}`}>
                    <div className={`col-sm-6`}>
                        <img src={Secimgg} alt="First hot Tour Image" className={classes.imgg}></img>
                    </div>
                    <div  className={`col-sm-6`}>
                        <div>
                            <h2 className={classes.hh2}>{props.city}</h2>
                            <h3 className={classes.hh3}>${props.price}</h3>
                        </div>
                        <section>{props.parag}</section>
                        <button className={classes.buttonn}>Buy This Tour</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
=======
import classes from './HotToursItem.module.css';
import Firimg from './firsttour.jpg';
import Secimgg from './sectour.jpg';
const TourItems =(props)=>{
    return (
        <div className={`${classes.tour}`}>
            <div className={`container`}>
                <div className={`row ${classes.roww}`}>
                    <div className={`col-sm-6`}>
                        <img src={Secimgg} alt="First hot Tour Image" className={classes.imgg}></img>
                    </div>
                    <div  className={`col-sm-6`}>
                        <div>
                            <h2 className={classes.hh2}>{props.city}</h2>
                            <h3 className={classes.hh3}>${props.price}</h3>
                        </div>
                        <section>{props.parag}</section>
                        <button className={classes.buttonn}>Buy This Tour</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
>>>>>>> f588f4874c583f7fef74226b5fc8da7c509c7262
export default TourItems;