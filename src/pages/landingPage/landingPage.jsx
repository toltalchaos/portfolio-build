import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/constValues';
import NaitLogo from '../../components/images/NaitLogo.webp';
import AlbumCover from '../../components/images/album-cover.jpg';
import ReactLogo from '../../components/images/react-logo.png';
import ResumePDF from '../../components/PDFs/BraydonResume.pdf';
import DeansHonorLetter from '../../components/PDFs/deans-honorrole.pdf';
import SideHeadshot from '../../components/images/headshots/Optimized-IMG_8442.webp'

const MAINPAGE = styled.div`
background-color: ${Colors.gunPurpGrey};
color:${Colors.lightLavender};
padding: 1rem 1rem 5rem 1rem;
max-width: 1080px;
 margin: auto;
border-radius: 3rem;
.pdf{
    padding: 1rem;
    background-color: ${Colors.lightLavender};
    color: ${Colors.slateGrey};
    border-radius: 1rem;
} 
.pdf:hover{
    cursor: pointer;
    background-color: ${Colors.lightGrey};
}
h3{
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
}
section{
    border-radius: 1rem;
    width: fit-content;
    margin: 1rem auto;
    background-color: ${Colors.slateGrey};
  
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        p,ul{
            padding:0.5rem;
            border: 1px solid white;
            margin: 0.5rem;
            border-radius: 1rem;
            list-style-type: none;
        }
    }
    img{
        margin: 0.5rem;
        border-radius: 1rem;
        max-width: 6rem;
        max-height: 6rem;
    }
}
@media(min-width:800px){
    section{
        max-width: 50%;
    }
}
@media(min-width: 500px){
    section{
            div{
                flex-direction: row;
        }
        
    }
}

`

const LandingPage = (props) => {
    function openResume(){
        window.open(ResumePDF)
    }
    function openDiploma(){
        window.open(DeansHonorLetter)
    }



    return ( <MAINPAGE>

        <section>
            <div>
                <p className='pdf' onClick={openResume}>RESUME</p>
                <p className='pdf' onClick={openDiploma}>DIPLOMA</p>
            </div>
        </section>
        <section>
            <h3>About</h3>
            <div>
            <img src={SideHeadshot} alt="photo of NAIT logo" />
            <p>&emsp;&emsp;These about me sections always suck, so instead of doing the super hyper professional generic about me paragraph nobody likes to read or write il just iterate what my life long friend has told me on many occasions “dude you’ve always got something new going on, how does anyone keep up?” and to that I say…. Not many people can. Id like to imagine I am viewed as a highly motivated individual constantly setting and achieving new goals. If you would like to get to know me more I encourage you to click on that “contact” link right above this section. I look forward to hearing from you! </p>
            </div>
        </section>
        <section>
            <h3>Education</h3>
            <div>
                <p>&emsp;&emsp;Completed a two year Computer Software Development diploma from NAIT (Northern Alberta Institute of Technology) in this time I have had the opportunity to work with many programing languages and developmental technologies focusing on creating full stack applications working with many different kinds of development processes. </p>
                <img src={NaitLogo} alt="photo of NAIT logo" />
            </div>
        </section>
        <section>
            <h3>This Web Portfolio</h3>
            <div>
                <img src={ReactLogo} alt="React logo" />
                <p>&emsp;&emsp;This is a website portfolio that has been built using a react framework designed and developed with a mobile first approach focusing on accessibility for screen readers and non aggressive color and font formatting.  The images in this website have been optimized for the web using exclusively “.Webp” and ".Png" file formatting. The website is hosted from Netlify linked to my personal Github repo for this portfolio.</p>
            </div>
        </section>
        <section>
            <h3>Hard Skills</h3>
            <div>
                <ul>
                    <li>- C#</li>
                    <li>- JavaScript</li>
                    <li>- SQL/PLSQL/NoSQL/SQLite</li>
                    <li>- GIT(DVCS)</li>
                    <li>- HTML5</li>
                    <li>- CSS</li>
                    <li>- React, Svelte, Angular</li>
                    <li>- Adobe Suite</li>
                    <li>- Microsoft Office</li>
                </ul>
                <img src={AlbumCover} alt="photoshoped album cover" />
            </div>
        </section>

    </MAINPAGE> );
}
 
export default LandingPage;