import classes from './AboutUs.module.css';


const AboutUs = () => {
    return (
        <div className={classes.AboutUs}>
				<div className={classes.Title}>
					<h2>About Us</h2>
				</div>
				<div className={classes.Content}>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
		</div>
    );
}
 
export default AboutUs;