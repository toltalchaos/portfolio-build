import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/constValues';
import NaitLogo from '../../components/images/NaitLogo.webp';
import AlbumCover from '../../components/images/album-cover.jpg';
import ResumePDF from '../../components/PDFs/BraydonResume.pdf';
import DeansHonorLetter from '../../components/PDFs/deans-honorrole.pdf';

const MAINPAGE = styled.div`
background-color: ${Colors.gunPurpGrey};
color:${Colors.lightLavender};
padding: 1rem 1rem 5rem 1rem;
max-width: 1080px;
 margin: auto;

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
    padding: 2rem 0 0 0;
}
section{
    border-radius: 0.5rem;
    width: fit-content;
    margin: 1rem auto;
    background-color: ${Colors.slateGrey};
  
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        p{
            padding:0.5rem;
            border: 1px solid white;
            margin: 1rem;
        }
    }
    img{
        border-radius: 1rem;
        max-width: 5rem;
        max-height: 5rem;
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
            <h3>Education</h3>
            <div>
                <p>&emsp;&emsp;Completed a two year Computer Software Development diploma from NAIT (Northern Alberta Institute of Technology) in this time I have had the opportunity to work with many programing languages and developmental technologies focusing on creating full stack applications working with many different kinds of development processes. </p>
                <img src={NaitLogo} alt="photo of NAIT logo" />
            </div>
        </section>
        <section>
            <h3>Achievements</h3>
            <div>
                <img src={AlbumCover} alt="photo of scorpion" />
                <p>achievements description</p>
            </div>
        </section>

    </MAINPAGE> );
}
 
export default LandingPage;