import React from 'react'
import styled from 'styled-components'

const HEADER = styled.header`
 background-color: tomato;
`
const Header = (props) => {
    return ( <>
    <HEADER>
        <div>
            <p>Braydon</p>
            <p>Tol</p>
        </div>
        <div>
            {/* about section */}

        </div>
    </HEADER>
    </> );
}
 
export default Header;