import classes from './Services.module.css';
const Services =()=>{
    return (
        <div className={`container ${classes.serv}`}>
            <h1>Our Services</h1>
            <div className={`row ${classes.roww}`}>
                <div className={`col-sm-4`}>
                    <i class={`material-icons ${classes.icon}`}>&#xe01d;</i>
                    <h3>Personalized Matching</h3>
                    <section>Our unique matching system lets you find just the tour you want for your next holiday.</section>
                </div>
                <div className={`col-sm-4`}>
                    <i class={`fas ${classes.icon}`}>&#xf559;</i>
                    <h3>Wide Variety of Tours</h3>
                    <section>We offer a wide variety of personally picked tours with destinations all over the globe.</section>
                </div>
                <div className={`col-sm-4`}>
                    <i class={`far fa-star ${classes.icon}`}></i>
                    <h3>Highly Qualified Service</h3>
                    <section>Our tour managers are qualified, skilled, and friendly to bring you the best service.</section>
                </div>
            </div>
            <div className={`row ${classes.roww}`}>
                <div className={`col-sm-4`}>
                <i class={`fas ${classes.icon}`}>&#xf590;</i>
                    <h3>24/7 Support</h3>
                    <section>You can always get professional support from our staff 24/7 and ask any question you have.</section>
                </div>
                <div className={`col-sm-4`}>
                    <i class={`fa ${classes.icon}` }>&#xf06d;</i>
                    <h3>Handpicked Hotels</h3>
                    <section>Our team offers only the best selection of affordable and luxury hotels to our clients.</section>
                </div>
                <div className={`col-sm-4`}>
                    <i class={`fas ${classes.icon}`}>&#xf555;</i>
                    <h3>Best Price Guarantee</h3>
                    <section>If you find tours that are cheaper than ours, we will compensate the difference.</section>
                </div>
            </div>
        </div>
    )
};
export default Services;