import React from 'react';
import classes from './Hero.module.css';
import image from './../../Images/background.jpg';




const Hero = () => {
	return(
        <div className={classes.Hero} style={{ backgroundImage: `url(${image})`, 
        backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className={classes.Container}>
                <h1>Professional Cleaning Service in San Francisco and surrounding areas</h1>
                <h3>We are a team of professional cleaners serving San Francisco and the entire Bay Area</h3>
            </div>
        </div>
	);

}


export default Hero;