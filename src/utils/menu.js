import React from "react"

export default function Menu(){
    return(
        <div id="menu">
            <div id="menu-main-button">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="menu">
                <div className="menu-buttons">
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="login-function">
                                <div id="menu-button">
                                    <button>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="home-function">
                                <button>Home</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="shop-function">
                                <button>Shop</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="yourorder-function">
                                <button>Your orders</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="websitefunc-function">
                                <button>Website functionality</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button">
                        <div className="menu-text">
                            <div id="contacthelp-function">
                                <button>Contact / Help</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

