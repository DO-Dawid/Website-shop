import React from "react"

export default function Home(){
    return(
        <div id="home">
            <div className="home">
                <div id="slider">
                    <div className="maindiv">
                        <div className="slidy">
                            <input type="radio" name="radio-btn" id="radio1"/>
                            <input type="radio" name="radio-btn" id="radio2"/>
                            <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
                            <div className="slid first">
                                <img src="images/4.jpg" alt=""/>
                            </div>
                            <div className="slid">
                                <img src="images/7.jpg" alt=""/>
                            </div>
                            <div className="slid">
                                <img src="images/4.jpg" alt=""/>
                            </div>
                            <div className="slid">
                                <img src="images/5.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="navigation-manual">
                            <label htmlFor="radio1" className="manual-btn" id="firstbtn" />
                            <label htmlFor="radio2" className="manual-btn" id="seccondbtn" />
                            <label htmlFor="radio3" className="manual-btn" id="thirdbtn" />
                            <label htmlFor="radio4" className="manual-btn" id="fourthbtn" />
                        </div>
                    </div>
                </div>
                <div id="bestseller">
                    <div className="two_box">
                        <div className="big_box">
                            <h1>Best Seller</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button>See more</button>
                        </div>
                        <div className="img_box">
                            <img src="images/7.jpg"></img>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 custom1 box">
                            <div className="about-img">
                                <img src="images/4.jpg"></img>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 custom2 box">
                            <div className="about-img">
                                <img src="images/4.jpg"></img>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 custom3 box">
                            <div className="about-img">
                                <img src="images/4.jpg"></img>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                        </div>
                    </div>
                </div>
                <div id="shop2">
                    <div className="content-display">
                        <div className="dark-background-shop-main">
                            <div className="text-container">
                                <h1>Shop</h1>
                                <p>We have everything you want and need, simply because we will do anything that would come to your mind. To see our offers simply go to shop in the menu, or just click below button.</p>
                                <button>Shop</button>
                            </div>
                        </div>
                        <div className="curve"></div>
                        <div className="colour-background-shop-main">
                            <div className="text-container">
                                <h1>Need more information?</h1>
                                <p>If you need more information about our company, or simply want to ask something, click the "Ask" button below and fill the form. We will try to responde in shortest time possible.</p>
                                <button>Ask</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}