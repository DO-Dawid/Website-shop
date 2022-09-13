import React from "react"

export default function WebsiteFunc(){
    return(
        <div id="websitefunc">
            <div className="websitefunc">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 main-func">
                            <div className="container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 main-func">
                            <h1>Website Functionality</h1>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h3 className="feature-title">Login</h3>
                                    <p>All login data is stored in your cookies, soo that only you decide about your password safety. <br></br><span>WARNING! If you delete your cookies you will lose all order data and account!</span></p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h3 className="feature-title">Serverless</h3>
                                    <p>Our service do not use server login, and we do not store any data from our customers. Downside of that action is lack of possibility to check your orders on other devices, but do not worry, as soon as you order our product we get all your order data via e-mail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }