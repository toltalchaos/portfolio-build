import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Colors } from './constValues';
import Sticky from 'react-sticky-el';

const NAVDECK = styled.nav`
background-color: ${Colors.slateGrey};
margin: 0 auto;
position: relative;
a{
    text-decoration: none;
    color: ${Colors.lightGrey}
}

ul{
    position: sticky;
    padding: 0;
    margin: 0 auto;
    color:${Colors.lightGrey};
    list-style-type: none;
    
    text-align: center;
   
    
    li{
        padding: 0.5rem;
        min-width: 1rem;
        border-radius: 0.5rem;
    }
    li:hover{
        cursor: pointer;
        background-color: ${Colors.lightLavender};
    }
}
@media(min-width: 800px){
    ul{
        top:1rem;
        justify-content: space-evenly;
        li{
            padding: 1rem;
            min-width: 4rem;
        }
    }
}
@media(min-width: 500px){
    ul{
        display: flex;
        justify-content: space-evenly;
    }
}
`

const NavDeck = (props) => {
    let location = useLocation();
    let history = useHistory();

    function gitRedirect(){
        window.open("https://github.com/toltalchaos")
    }
    function linksRedirect(){
        let path = '/projects';
        history.push(path)
    }
    function workRedirect(){
        let path = '/workhistory';
        history.push(path)
    }
    function contactRedirect(){
        let path = '/contact';
        history.push(path)
    }
    function homeRedirect(){
        let path = '/';
        history.push(path)
    }


    return ( 
        <Sticky>
             <NAVDECK>
            <ul>
                <li onClick={homeRedirect}> Home </li>
                <li onClick={gitRedirect}> GitHub </li>
                <li onClick={linksRedirect}>Projects</li>
                <li onClick={workRedirect}>Work History</li>
                <li onClick={contactRedirect}>Contact</li>
            </ul>
         </NAVDECK>
        </Sticky>
            
            
       
     );
}
 
export default NavDeck;