import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Colors, FontSizing } from './constValues';
import Headshot from '../components/images/headshots/bw-headshot.webp'

const HEADER = styled.header`
 background-color: ${Colors.deepPurple};
 background-image: url(${Headshot});
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 border-radius: 3rem;
 min-height: 50vh;
 width: 100vw;
 overflow: hidden;
 max-width: 1080px;
 margin: auto;
 h1{font-size:inherit;}
 div:nth-child(1){
     position: relative;
     top:3rem;
     left: 2rem;
     width: fit-content;
     background-color: ${Colors.gunPurpGrey};
     color: ${Colors.lightGrey};
     margin: 1rem;
     padding: 1rem;
     font-size: ${FontSizing.mediumText};
     line-height: 2rem;
     border-radius: 2rem;
     max-width: 40vw;
     text-align: center;
     p{
         font-size: 2rem;
     }
 }
 div:nth-child(1):hover{
     cursor: pointer;
 }
 div:nth-child(2){
     max-width: 15rem;
    padding: 1rem;
    background-color: ${Colors.gunPurpGrey};
     color: ${Colors.lightGrey};
     border-radius: 2rem;
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
            <h1>Braydon Tol</h1>
            <p>Full Stack Engineer</p>
        </div>
         <div>
            <h2>-Summary-</h2>
                <p>Excited young Software Developer experienced with multi-platform tools with numerous stacks focused on accessibility, effective integration following best practices, responsive and efficient allocation of resources. Confident in many programming languages and motivated to learn more development technologies.</p>

        </div> 
    </HEADER>
    </> );
}
 
export default Header;