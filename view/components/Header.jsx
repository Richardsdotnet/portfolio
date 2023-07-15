import React from "react"
import "..//components/header.css"
import instagram from "../components/images/instagram.png"
import linkedIn from "../components/images/linkedin.png"
import twitter from "../components/images/twitter.png"
import whatsapp from "../components/images/whatsapp.png"
import facebook from "../components/images/facebook.png"
import Words from '../components/Words'




const Function = () => {
    return(


<div className="main-waper">

    <div className="nav-bar">

        <div className="links">

            <div className="logo"><img src=""/></div>
            <ul><a href="">Home </a></ul>
            <ul><a href="#">About </a></ul>
            <ul><a href="#">Service </a></ul>
            <ul><a href="#">Portfolio</a></ul>
            <ul><a href="#">Blog</a></ul>
            <ul><a href="#">Contact</a></ul>
        </div>    

        <div className="socials">

            <ul><img className="whatsapp"src={whatsapp}></img></ul>
            <ul><img className="linkedin" src={linkedIn}></img></ul>
            <ul><img className="instagram" src={instagram}></img></ul>
            <ul><img className="twiter" src={twitter}></img></ul>
            <ul><img className="facebook" src={facebook} ></img></ul>            
        </div>
               

    </div>

    <div className="first-body">

            <div className="welcome-text">
                    <h3 >Welcome to my Portfolio!</h3>
                    <h1>Hi, I am Richards, a fulstack software engineer</h1>
                    <h1>{Words}</h1>
            </div>

            <div className="welcome-img">
                <div className="img-top">
                <h1>kkkeddddddddddddddddddddddddd</h1>
                <h1>kkkeddddddddddddddddddddddddd</h1>
                <h1>kkkeddddddddddddddddddddddddd</h1>
                </div>
                {/* <img  alt='Richard' src={profilePic}/> */}
            </div>
    
    </div>



   
</div>



    )
}
export default Function