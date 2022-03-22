<<<<<<< HEAD
import classes from './Header.module.css';
const Header =()=>{
    return (
        <div>
            <nav className={`navbar  navbar-expand-sm  fixed-top ${classes.header}`}>
                <h1 className={classes.brand}>Travelling </h1>
                <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className={`navbar-toggler-icon ${classes.btn}`}></span>☰
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" >
                            <a className={`nav-link  ${classes.item}`} href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#hot">Hot Tours</a>
                        </li>   
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#workers">Our Workers</a>
                        </li>    
                    </ul>
                </div>  
            </nav>
        </div>
    )
};

=======
import classes from './Header.module.css';
const Header =()=>{
    return (
        <div>
            <nav className={`navbar  navbar-expand-sm  fixed-top ${classes.header}`}>
                <h1 className={classes.brand}>Travelling </h1>
                <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className={`navbar-toggler-icon ${classes.btn}`}></span>☰
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" >
                            <a className={`nav-link  ${classes.item}`} href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#hot">Hot Tours</a>
                        </li>   
                        <li class="nav-item">
                            <a className={`nav-link ${classes.item}`} href="#workers">Our Workers</a>
                        </li>    
                    </ul>
                </div>  
            </nav>
        </div>
    )
};

>>>>>>> f588f4874c583f7fef74226b5fc8da7c509c7262
export default Header;