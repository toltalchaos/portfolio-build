import React, {Link} from 'react'
import styled from 'styled-components'
import { Colors } from './constValues';

const NAVDECK = styled.nav`
background-color: ${Colors.slateGrey};

ul{
    padding: 0;
    margin: 0 auto;
    color:${Colors.lightGrey};
    list-style-type: none;
    display: flex;
    justify-content: space-between;
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
`

const NavDeck = (props) => {
    return ( 
        <NAVDECK>
            <ul>
                <li> git </li>
                <li>links</li>
                <li>about/hobbies</li>
                <li>contact</li>
            </ul>
        </NAVDECK>
     );
}
 
export default NavDeck;