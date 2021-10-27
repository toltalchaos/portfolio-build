import React from 'react'
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
 div:nth-child(2){
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
    return ( <>
    <HEADER>
        <div>
            <h1>Braydon</h1>
            <p>Tol</p>
        </div>
        <div>
            <h2>-About-</h2>
            <p>about me section</p>

        </div>
    </HEADER>
    </> );
}
 
export default Header;