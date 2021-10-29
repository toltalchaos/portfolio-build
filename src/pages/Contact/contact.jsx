import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../components/constValues';

const CONTACTSTYLES = styled.div`
margin: 0 auto;
padding: 1rem 1rem 0.05rem 1rem ;
max-width: 1080px;
background-color: ${Colors.gunPurpGrey};
color:${Colors.lightLavender};
text-align:center;

section{
    background-color: ${Colors.slateGrey};
    border-radius: 2rem;
    margin-bottom: 1rem;
    padding: 1rem 0 0 0;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly; 
        padding-bottom: 2rem;

    }
}
p{
    display: inline;
}
a{
    text-decoration: underline;
    color: inherit;
}
h2{
    margin: 0;
}
`

const ContactPage = (props) => {
    return ( 
        <CONTACTSTYLES>
        <section>
        <h2>General Contact Information</h2>
        <div>
        <p>Email: </p>
            <a href="mailto: braydontol@gmail.com">BraydonTol@gmail.com</a>
        </div>
        <div>
            <p>Mobile Phone: </p>
            <a href="tel: 780-700-1815">(780)700-1815</a>
        </div>
        </section>
        {/* <section>
            <h2>secondary contact information????</h2>

        </section> */}
    </CONTACTSTYLES> );
}
 
export default ContactPage;