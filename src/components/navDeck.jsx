import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Colors } from './constValues';

const NAVDECK = styled.nav`
background-color: ${Colors.slateGrey};
max-width: 1080px;
margin: auto;
a{
    text-decoration: none;
    color: ${Colors.lightGrey}
}

ul{
    padding: 0;
    margin: 0 auto;
    color:${Colors.lightGrey};
    list-style-type: none;
    
    text-align: center;
    position: sticky;
    top:1rem;
    li{
        padding: 1rem;
        min-width: 4rem;
        border-radius: 0.5rem;
    }
    li:hover{
        cursor: pointer;
        background-color: ${Colors.lightLavender};
    }
}
@media(min-width: 800px){
    ul{
       
        justify-content: space-evenly;
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
        let path = '/links';
        history.push(path)
    }
    function aboutRedirect(){
        let path = '/about';
        history.push(path)
    }
    function contactRedirect(){
        let path = '/contact';
        history.push(path)
    }


    return ( 
        <NAVDECK>
            <ul>
                <li onClick={gitRedirect}> git </li>
                <li onClick={linksRedirect}>links</li>
                {/* <li onClick={aboutRedirect}>about/hobbies</li> */}
                <li onClick={contactRedirect}>contact</li>
            </ul>
        </NAVDECK>
     );
}
 
export default NavDeck;