import fir from './1.jpg';
import sec from './2.jpg';
import thir from './3.jpg';
import fou from './4.jpg';
import fifth from './5.jpg';
import sex from './6.jpg';
import classes from './gallery.module.css';
import Slide from 'react-reveal/Slide';


const Gallery =()=>{
    return (
        <div className= {classes.gall}>
            <h1 className={classes.hh1}>Gallery</h1>
        <div className={`row `} >
            <Slide left>
            <div className={`col-sm-2`}>
                <a href={fir} target="_blank">
                <img src={fir} alt='first image' className={classes.imgg}/>
                </a>
            </div>
            </Slide>
            <Slide left>
            <div className={`col-sm-2`}>
            <a href={fir} target="_blank">
                <img src={sec} alt='first image' className={classes.imgg}/>
                </a>
            </div>
            </Slide>
            <Slide left>

            <div className={`col-sm-2`}>
            <a href={fir} target="_blank">
                <img src={thir} alt='first image' className={classes.imgg}/>
                </a>
            </div>
            </Slide>
            <Slide left>

            <div className={`col-sm-2`}>
            <a href={fir} target="_blank">
                <img src={fou} alt='first image' className={classes.imgg}/>
                </a>
            </div>
            </Slide>
            <Slide left>

            <div className={`col-sm-2`}>
            <a href={fir} target="_blank">
                <img src={fifth} alt='first image' className={classes.imgg}/>
                </a>
            </div>
            </Slide>
            <Slide left>

            <div className={`col-sm-2`}>
            <a href={fir} target="_blank">
                <img src={sex} alt='first image' className={classes.imgg}/>
            </a>
            </div>
            </Slide>

        </div>
        </div>
    )
};
export default Gallery;