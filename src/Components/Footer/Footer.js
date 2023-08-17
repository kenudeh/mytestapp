import React from 'react';
import classes from './Footer.module.css';
import {FaFacebook} from 'react-icons/fa';


const fb = <FaFacebook size='20px' color='white'/>


const Footer = () => {
	return(
		  <div className={classes.Footer}>
			<a href='https://wwww.facebook.com' target='_blank' rel='noreferrer'>{fb}</a>
			<h6>&copy;2023 OneTouch llc</h6>
		  </div>
	)
}



export default Footer;