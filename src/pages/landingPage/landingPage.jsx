import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/constValues';

const MAINPAGE = styled.div`
background-color: ${Colors.gunPurpGrey};
color:${Colors.lightLavender};
h3{
    margin:auto;
    text-align: center;
    padding: 2rem 0 0 0;
}
section{
    height: 10rem;
    width: fit-content;
    margin: auto;
    background-color: ${Colors.slateGrey};
    div{
        
        display: flex;
        justify-content: center;
        p{
            border: 1px solid white;
            margin: 2rem;
        }
    }
}

`

const LandingPage = (props) => {
    return ( <MAINPAGE>

        <section>
            <h3>Education</h3>
            <div>
                <p>education description</p>
                <img src="" alt="photo of NAIT logo" />
            </div>
        </section>
        <section>
            <h3>Achievements</h3>
            <div>
                <img src="" alt="photo of scorpion" />
                <p>achievements description</p>
            </div>
        </section>

    </MAINPAGE> );
}
 
export default LandingPage;