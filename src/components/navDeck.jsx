import React from 'react'
import styled from 'styled-components'

const NAVDECK = styled.nav`

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