import classes from './Discover.module.css';
import imag from './index-3-556x382.jpg';
import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';

const Dicsover =()=>{
    const [FirstParag,setFirstParag]=useState(true);
    const [SecParag,setSecParag]=useState(false);
    const [ThirdParag,setThirdParag]=useState(false);

    const ShowFirst=()=>{
        setFirstParag(true);
        setSecParag(false);
        setThirdParag(false);
    };
    const ShowSec=()=>{
        setSecParag(true);
        setFirstParag(false);
        setThirdParag(false);
    };
    const ShowThird=()=>{
        setThirdParag(true);
        setFirstParag(false);
        setSecParag(false);
    };
    return (
        <div className={classes.disc}>
            <div class="container">
                <div class="row">
                <Fade bottom>
                    <div class="col-sm-6">
                        <img src={imag} alt="Discover Image" className={classes.imgg}/>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className={`col-sm-6 ${classes.secCol}`}>
                        <h2>Discover New Horizons</h2>
                        <div className={`row ${classes.links}`}>
                            <div class="col-sm-4">
                                <a href='#about' onClick={ShowFirst} className={classes.item}>ABOUT US</a>
                            </div>
                            <div class="col-sm-4">
                                <a href='#why' onClick={ShowSec} className={classes.item}>WHY CHOOSE US</a>
                            </div >
                            <div class="col-sm-4">
                                <a href='#mission' onClick={ShowThird} className={classes.item}>OUR MISSION</a>
                            </div>
                        </div>
                        <hr size="100" width="90%" color="black" />  
                        {FirstParag &&<div className={classes.parag}>
                            Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.
                        </div>}
                        {SecParag &&<div className={classes.parag}>
                            We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.
                        </div>}
                        {ThirdParag &&<div className={classes.parag}>
                            Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.
                        </div>}
                    </div>
                    </Fade>
                </div>

            </div>
        </div>
    )
};
export default Dicsover;