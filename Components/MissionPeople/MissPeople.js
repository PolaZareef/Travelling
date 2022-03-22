import classes from './MissPeople.module.css';
import fir from './firimg.jpg';
import sec from './secimg.jpg';
import third from './thirimg.jpg';
import four from './fourimg.jpg';
import Slide from 'react-reveal/Slide';


const MissPeople =()=>{
    return (
        <div className={`container ${classes.mission}`} id='workers'>
            <Slide top>
            <h1>Different People — One Mission</h1>
            </Slide>
            <Slide bottom>
            <div className={`row ${classes.row}`}>
                <div className={`col-sm-3 ${classes.coll}`}>
                    <img src={fir} alt='First Person' className={classes.imag} />
                    <h3 className={classes.hh3}>Diana Robinson</h3>
                    <p className={classes.pp}>Founder, Owner</p>
                    <h3 className={classes.hh3}>+1 323-923-4683</h3>
                </div>
                <div className={`col-sm-3  ${classes.coll}`}>
                    <img src={sec} alt='Second Person' className={classes.imag}/>
                    <h3 className={classes.hh3}>Peter McMillan</h3>
                    <p className={classes.pp}>Travel Agent</p>
                    <h3 className={classes.hh3}>+1 323-923-4683</h3>
                </div>
                <div className={`col-sm-3  ${classes.coll}`}>
                    <img src={third} alt='Third Person' className={classes.imag}/>
                    <h3 className={classes.hh3}>Jill Peterson</h3>
                    <p className={classes.pp}>Tour Consultant</p>
                    <h3 className={classes.hh3}>+1 323-933-4788</h3>
                </div>
                <div className={`col-sm-3  ${classes.coll}`}>
                    <img src={four} alt='Fourth Person' className={classes.imag}/>
                    <h3 className={classes.hh3}>James Smith</h3>
                    <p className={classes.pp}>PR Manager</p>
                    <h3 className={classes.hh3}>+1 323-943-4698</h3>
                </div>
            </div>
            </Slide>
        </div>
    )
};
export default MissPeople;