import React from "react"

export default function Simple_order(){
    return(
        <div id="simple_order">
            <div className="container background_order">
            <form id="contact-form" name="contact-form" action="https://formsubmit.co/olejniczakdawid@wp.pl" method="POST">                                
                <h1>Fill in form</h1>
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
                            <label htmlFor="email" className="">E-mail</label>
                        </div>
                    </div>                                
                </div>    
                <div className="row">                                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="lastname" name="lastname" className="form-control"/>
                            <label htmlFor="lastname" className="">Last name</label>
                        </div>
                    </div>                                                                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="phone" name="phone" className="form-control"/>
                            <label htmlFor="phone" className="">Phone number</label>
                        </div>
                    </div>                                
                </div>                                                             
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Site subject</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="image" name="image" className="form-control"/>
                            <label htmlFor="image" className="">Logo</label>
                        </div>
                    </div>
                </div>         
                <div className="row">
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <p>Brighten</p><input type="radio" id="colour" name="subject" className="form-control"/>
                        </div>
                    </div> 
                    <div className="col-md-4">
                    <p>Darken</p><input type="radio" id="subject" name="subject" className="form-control"/>    
                    </div>   
                    <div className="col-md-4">
                    <p>Darken</p><input type="radio" id="subject" name="subject" className="form-control"/>    
                    </div>  
                    <label htmlFor="colorisitcs" className="">Choose coloristics</label>
                </div>                                                       
                <div className="row">                                    
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea type="text" id="request" name="request" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="request">Special request</label>
                        </div>
                    </div>
                </div>   
                <input type="hidden" name="_next" value="http://localhost:52330/#kontakt"/>
                <button className="btn btn-primary shop-button" type="submit" name="submit">Submit</button>                     
            </form>
            </div>
        </div>
    )
}