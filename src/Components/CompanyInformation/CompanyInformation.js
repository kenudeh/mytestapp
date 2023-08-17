import classes from './CompanyInformation.module.css';
import {FiPhoneCall} from 'react-icons/fi';
import {FaAddressBook} from 'react-icons/fa';


const phone = <FiPhoneCall color='black' size='15px'/>
const address = <FaAddressBook color='black' size='20px'/>


const CompanyInformation = () => {
    return (
        <div className={classes.Information}>
				<div className={classes.Address}>
					<h3>Office Address</h3>
					{address}
					<p>43 Sample Avenue, San Francisco,</p>
					<p>California.</p>
				</div>
				<div className={classes.Phone}>
					<h3>Get in touch with us</h3>
					<div className={classes.icon}>{phone}</div>
					<p>(123) 456-78910</p>
					<p>Available 8am - 5pm daily.</p>
				</div>
			</div>
    );
}
 
export default CompanyInformation;