import classes from './TopPage.module.css';
import Firstimg from './firstImg.jpg';
import SecImg from './SecImg.jpg';
import Thirdimg from './Thirdimg.jpg';
import Fade from 'react-reveal/Fade';


const TopPage=()=>{
    return (
        <div id='home' className={classes.Top}>
            <div id="demo" class="carousel slide" data-ride="carousel" data-interval="5000">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Firstimg} alt="Los Angeles" width="100%" height="600" />
                <Fade bottom>
                <div className={`carousel-caption ${classes.h11}`}>
                    <h1 >Create Your Tour</h1>
                </div>  
                </Fade> 
                </div>
                <div class="carousel-item">
                <img src={SecImg} alt="Chicago" width="100%" height="600" />
                <Fade bottom>
                <div className={`carousel-caption ${classes.h11}`}>
                    <h1>Explore The World</h1>
                </div>  
                </Fade>  
                </div>
                <div class="carousel-item">
                <img src={Thirdimg} alt="New York" width="100%" height="600" />
                <Fade bottom>
                <div className={`carousel-caption ${classes.h11}`}>
                    <h1>Trust Our Experience</h1>
                </div>  
                </Fade>   
                </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            </div>

        </div>
    )
};

export default TopPage;