import React from "react"

export default function Shop(){
    return(
        <div id="shop">
            <div className="shop">
                <div className="container-xl">
                    <div className="row main-offers">
                        <div className="col-lg-4 col-md-4 col-sm-12 main-offers-offer">
                            <div className="background2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                </svg>
                            </div>
                            <h3 className="shop-feature-title">Simple</h3>
                            <p>Simple site is a one page ecomerce site. It is strongly focused on appearance. Its job is to encourage your customers to trust your company and buy your products. Site targeted at advertising. </p>
                            <button className="shop-button">Order</button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 main-offers-offer">
                            <div className="background2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
                                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
                                </svg>
                            </div>
                            <h3 className="shop-feature-title">More complicated</h3>
                            <p>The more complicated site is a simple page but it has more than one sub page. It is certainly more easy for your customers to navigate. In this pricetag we build simple blog sites.</p>
                            <button className="shop-button">Order</button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 main-offers-offer">
                            <div className="background2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                </svg>
                            </div>
                            <h3 className="shop-feature-title">The most complicated</h3>
                            <p>The most complicated website uses server information. It has all the benefits from back-end, like login or list of your products. This offer is mostly targeted to the people who want to start online shop, or buy some kind off data storage for business.</p>
                            <button className="shop-button">Order</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row shop-info">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 shop-info-text">
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h3 className="shop-feature-title">Order</h3>
                            <p>To order website simply choose one of the options above and click it. The window will guide you through order process. If you logged in, the website will remember your order. If you would like to check it, go to the "Your orders" subpage.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <h3 className="shop-feature-title">Order specification</h3>
                            <p>Do not worry, after you choose the packing you will have many more options to choose from, like colours or type of menu. If u have not found answer to any of the form questions or you want something special, simply write it down in special request textbox at the last page of a form.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }