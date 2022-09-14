import React from "react"

export default function ContactHelp(){
    return(
        <div id="contacthelp">
            <div className="container-xxl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39656.2472359712!2d18.9652559!3d51.59544339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a5b67c65ccf57%3A0xa9f457d67590879d!2s98-220%20Zdu%C5%84ska%20Wola!5e0!3m2!1sen!2spl!4v1663150691609!5m2!1sen!2spl" width="100%" height="450px" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <section className="container contact-form-background">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                <div className="row">   
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="https://formsubmit.co/olejniczakdawid@wp.pl" method="POST">                                
                            <div className="row">                                   
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>                                                                   
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>                                
                            </div>                                                                
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>                                                                
                            <div className="row">                                    
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
                                </div>
                            </div>   
                            <input type="hidden" name="_next" value="http://localhost:52330/#kontakt"/>
                            <button className="btn btn-primary shop-button" type="submit" name="submit">Wyślij</button>                     
                        </form>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Zduńska Wola, 98-220, Poland</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 48 537 123 721</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>olejniczakdawid@wp.pl</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        )
    }