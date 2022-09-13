import React from "react"

export default function Login(){
    return(
        <div id="login">
            <div className="login">
                <div className="login-window">
                    <div id="close-login-window-btn">
                        <div className="background-cross"></div>
                        <div className="bar-cross1"></div>
                        <div className="bar-cross2"></div>
                    </div>
                    <div className="login-form-container">
                        <img src="../images/5.jpg"></img><br></br>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>
            
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
