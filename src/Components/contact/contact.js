import classes from './contact.module.css';
const Contact =()=>{
    return (
        <div className={`container-fluid ${classes.cont}`}>
            <div className={`row`}>
                <div className={`col-sm-6`}>
                    <h3 className={classes.hh3}>CONTACT US</h3>
                    <h5 className={classes.hh5}>+1 323-913-4524</h5>
                    <h5 className={classes.hh5}>info@info.com</h5>
                    <h5 className={classes.hh5}>4730 Crystal Springs Dr, Los Angeles</h5>
                </div>
                <div className={`col-sm-6`}>
                    <h3 className={classes.hh3}>QUICK LINKS</h3>
                    <ul>
                        <li className={classes.hh5}><a href='#' id='hot'>Our Tours</a></li>
                        <li className={classes.hh5}><a href='#' id='workers'>Our Team</a></li>
                        <li className={classes.hh5}><a href='#' id='home'>Gallery</a></li>
                        <li className={classes.hh5}><a href='#' id='services'>Sevices</a> </li>
                        <li className={classes.hh5}><a href='#' id='hot'>Hot Tours</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contact;