import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Colors, FontSizing } from './constValues';

const HEADER = styled.header`
 background-color: ${Colors.slateGrey};
 background-image: url("stonewall.webp");
 background-position: center;
 background-repeat: no-repeat;
 min-height: 50vh;
 width: 100vw;
 overflow: hidden;
 max-width: 1080px;
 margin: auto;
 h1{font-size:inherit;}
 div:nth-child(1){
     width: fit-content;
     background-color: ${Colors.gunPurpGrey};
     color: ${Colors.lightGrey};
     margin: 1rem;
     padding: 1rem;
     font-size: ${FontSizing.largeText};
     line-height: 2rem;
 }
 div:nth-child(1):hover{
     cursor: pointer;
 }
 div:nth-child(2){
     max-width: 15rem;
    padding: 1rem;
    background-color: ${Colors.gunPurpGrey};
     color: ${Colors.lightGrey};
 }

 @media(min-width: 800px){
   
 position: relative;

 
 div:nth-child(1){
     position: absolute;
 }
 div:nth-child(2){
    position: absolute;
    right: 5rem;
    top: 2rem;
 }

 }
`
const Header = (props) => {
const history = useHistory();
function sendHome(){
    let path = '/';
    history.push(path)
}


    return ( <>
    <HEADER>
        <div onClick={sendHome}>
            <h1>Braydon</h1>
            <p>Tol</p>
        </div>
        <div>
            <h2>-About This-</h2>
            <p>This is a website portfolio that has been built using a react framework designed and developed with a mobile first approach focusing on accessibility for screen readers and non aggressive color and font formatting.  The images in this website have been optimized for the web using exclusively “.webp” file formatting. The website is hosted from Netlify linked to my personal Github repo for this portfolio.</p>

        </div>
    </HEADER>
    </> );
}
 
export default Header;