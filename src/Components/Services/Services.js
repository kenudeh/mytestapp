import React from 'react';
import classes from './Services.module.css';
import image1 from './../../Images/move-in-and-move-out.jpg';
import image2 from './../../Images/home-cleaning.jpg';
import image3 from './../../Images/office-cleaning.jpg';
import image4 from './../../Images/post-construction-cleaning.jpg';
import image from './../../Images/AboutUs.jpg';



const Services = () => {
	return(
            <>
      <h2> Services we Offer</h2>
        <div className ={classes.Services} style={{backgroundImage: `url(${image})`, 
            backgroundRepeat: "no-repeat", backgroundSize: "cover",
            backgroundPosition:"center"}}>
           
            <div className={classes.Container}>
                  <div className={classes.Wrapper}>
                        <div className={classes.HomeCleaning}>
                              <div className={classes.Main}>
                                    <h4>Home Cleaning</h4>
                                    <div className={classes.Image} style={{ backgroundImage: `url(${image2})`,
                                          backgroundRepeat:"no-repeat", backgroundSize: "cover", 
                                          backgroundPosition: "center"}}>
                                    </div>
                              </div>
                              <div className={classes.Texts}>
                                    <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                          sed do eiusmod tempor incididunt ut
                                    </p>
                              </div>
                        </div>
                        
                        <div className={classes.PostConstruction}>
                              <div className={classes.Main}>
                                    <h4>Post-construction</h4>
                                    <div className={classes.Image} style={{ backgroundImage: `url(${image4})`,
                                          backgroundRepeat:"no-repeat", backgroundSize: "cover", 
                                          backgroundPosition: "center"}}>
                                    </div>
                              </div>
                              <div className={classes.Texts}>
                                    <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                          sed do eiusmod tempor incididunt ut
                                    </p>
                              </div>
                        </div>

                        <div className={classes.OfficeCleaning}>
                              <div className={classes.Main}>
                                    <h4>Office Cleaning</h4>
                                    <div className={classes.Image} style={{ backgroundImage: `url(${image3})`,
                                          backgroundRepeat:"no-repeat", backgroundSize: "cover", 
                                          backgroundPosition: "center"}}>
                                    </div>
                              </div>
                              <div className={classes.Texts}>
                                    <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                          sed do eiusmod tempor incididunt ut
                                    </p>
                              </div>
                        </div>

                        <div className={classes.MoveIn}>
                              <div className={classes.Main}>
                                    <h4>Move in/ Move out</h4>
                                    <div className={classes.Image} style={{ backgroundImage: `url(${image1})`,
                                          backgroundRepeat:"no-repeat", backgroundSize: "cover", 
                                          backgroundPosition: "center"}}>
                                    </div>
                              </div>
                              <div className={classes.Texts}>
                                    <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                          sed do eiusmod tempor incididunt ut
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
        </div>
        </>
	);

}


export default Services;