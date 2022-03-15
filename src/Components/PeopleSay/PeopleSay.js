import classes from './PeopleSay.module.css';
import firper from './firpers.jpg';
import secper from './secper.jpg';
import thirper from './thirper.jpg';
import Slide from 'react-reveal/Slide';


const PeopleSay =()=>{
    return(
        <div className={`container ${classes.say}`}>
            <Slide top>
            <h1>What people Say</h1>
            </Slide>
            <Slide bottom>

            <div className={`row ${classes.row}`}>
                <div className={`col-sm-4 text-center mb-5 ${classes.coll}`}>
                    <img src={firper}/>
                    <section className={classes.secc}>Just wanted to say many,<br/>
                         many thanks for helping me set up an amazing Costa Rican adventure!<br/>
                         My nephew and I had a great time!<br/>
                          All of the accommodations were perfect, thank you!</section>
                    <h3 className={classes.hhh3}>Rupert Wood</h3>
                </div>
                <div className={`col-sm-4 text-center mb-5 ${classes.coll}`}>
                    <img src={secper}/>
                    <section className={classes.secc}>I wanted to thank you very much<br/>
                         for planning the trip to France for my sister and me.<br/>
                         It was amazing and exceeded my expectations!<br/>
                          We had a wonderful time.</section>
                    <h3 className={classes.hhh3}>Catherine Williams</h3>
                </div>
                <div className={`col-sm-4 text-center mb-5 ${classes.coll}`}>
                    <img src={thirper}/>
                    <section className={classes.secc}>We had a marvelous time in our travels to Madagascar, Zimbabwe,<br/>
                         and Botswana, we had just wonderful experiences.<br/>
                          Your service was amazing and everyone was very attentive!
                          </section>
                    <h3 className={classes.hhh3}>Sam Peterson</h3>
                </div>
            </div>
            </Slide>

        </div>
    )
};
export default PeopleSay;