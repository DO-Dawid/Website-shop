import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Menu from "./utils/menu";
import Home from "./home";
import Login from "./utils/login";
import WebsiteFunc from "./websitefunc";
import ContactHelp from "./contacthelp";
import Footer from "./utils/footer";
import Shop from "./shop"
import Yourorders from "./yourorders"

function Page(){
    return (
        <div id="page">
            <Menu />
            <Login />
            <Home />
            <Shop />
            <Yourorders />
            <WebsiteFunc />
            <ContactHelp />
            <Footer />
        </div>
    )
}
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)
document.getElementById("menu-button").addEventListener("click", extendMenu, false)
document.getElementById("menu-main-button").addEventListener("click", extendMenu, false)
function extendMenu(){
    const menu = document.getElementById("menu")
    menu.classList.toggle("change")
}
document.getElementById("close-login-window-btn").addEventListener("click", loginPopup, false)
document.getElementById("login-function").addEventListener("click", loginPopup, false)
function loginPopup(){
    const login = document.getElementById("login")
    login.classList.toggle("change2")
}

let siteId = 1
function menuFunc(element){
    if (element === siteId){
        return
    }
    else{
        if (element === 1){
            const open_next = document.getElementById("home")
            const current_site = checkCurrentSite(siteId)
            menuSubFunc(open_next, current_site, element)
        }
        else if (element === 2){
            const open_next = document.getElementById("shop")
            const current_site = checkCurrentSite(siteId)
            menuSubFunc(open_next, current_site, element)
        }
        else if (element === 3){
            const open_next = document.getElementById("yourorder")
            const current_site = checkCurrentSite(siteId)
            menuSubFunc(open_next, current_site, element)
        }
        else if (element === 4){
            const open_next = document.getElementById("websitefunc")
            const current_site = checkCurrentSite(siteId)
            menuSubFunc(open_next, current_site, element)
        }
        else if (element === 5){
            const open_next = document.getElementById("contacthelp")
            const current_site = checkCurrentSite(siteId)
            menuSubFunc(open_next, current_site, element)
        }
    }
    function checkCurrentSite(siteId){
        if(siteId === 1){
            return document.getElementById("home")
        }
        else if(siteId === 2){
            return document.getElementById("shop")
        }
        else if(siteId === 3){
            return document.getElementById("yourorder")
        }
        else if(siteId === 4){
            return document.getElementById("websitefunc")
        }
        else if(siteId === 5){
            return document.getElementById("contacthelp")
        }
    }
    function menuSubFunc(open_next, close_erlier, element){
        close_erlier.style.display = "none"
        open_next.style.display = "block"
        extendMenu()
        siteId = element
    }
}

const site1 = document.getElementById("home-function")
site1.addEventListener("click", function(){menuFunc(1)}, false)
const site2 = document.getElementById("shop-function")
site2.addEventListener("click", function(){menuFunc(2)}, false)
const site3 = document.getElementById("yourorder-function")
site3.addEventListener("click", function(){menuFunc(3)}, false)
const site4 = document.getElementById("websitefunc-function")
site4.addEventListener("click", function(){menuFunc(4)}, false)
const site5 = document.getElementById("contacthelp-function")
site5.addEventListener("click", function(){menuFunc(5)}, false)



var fourthbtn = document.getElementById("fourthbtn")
var thirdbtn = document.getElementById("thirdbtn")
var seccondbtn = document.getElementById("seccondbtn")
var firstbtn = document.getElementById("firstbtn")
change(firstbtn)
change(seccondbtn)
change(thirdbtn)
change(fourthbtn)
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter>4){
        counter = 1;
    }
}, 8000)
function change(x){
    x.classList.add('checked')
}