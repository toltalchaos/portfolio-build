import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/constValues';
import NaitLogo from '../../components/images/NaitLogo.webp';
import CodeLogo from '../../components/images/logo2.png';
import ReactLogo from '../../components/images/react-logo.png';
import ResumePDF from '../../components/PDFs/BraydonResume.pdf';
import DeansHonorLetter from '../../components/PDFs/deans-honorrole.pdf';
import SideHeadshot from '../../components/images/headshots/Optimized-IMG_8442.webp'
import Transcript from '../../components/PDFs/official-transcript.pdf'

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
    min-width: 50%;
    text-align: center;
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
    padding:0.5rem;
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
            padding:1rem;
            border: 1px solid white;
            margin: 0.5rem;
            border-radius: 1rem;
            list-style-type: none;
            line-height: 1.25rem;
        }
    }
    .pdf-container{
    flex-direction: column;
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
        .pdf-container{
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 50%;
    }
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
    function openResume() {
        window.open(ResumePDF)
    }
    function openDiploma() {
        window.open(DeansHonorLetter)
    }
    function openTranscript(){
        window.open(Transcript)
    }



    return (<MAINPAGE>

        <section>
            <div className='pdf-container'>
                <p className='pdf' onClick={openResume}>RESUME</p>
                <p className='pdf' onClick={openDiploma}>DEANS HONOR ROLE LETTER</p>
                <p className='pdf' onClick={openTranscript}>TRANSCRIPT</p>
            </div>
        </section>
        <section>
            <h3>About</h3>
            <div>
                <img src={SideHeadshot} alt="photo of NAIT logo" />
                <p> Worked in supervisor/team management roles for many years in various labor jobs before going to school (NAIT) to obtain a diploma in Computer Software Development. During my time at NAIT, I was given the opportunity to work with teams to develop full-scale applications as well as assigned individual tasks developing applications using many different stacks and languages.</p>
            </div>
        </section>
        <section>
            <h3>Education</h3>
            <div>
                <p>Completed a two-year Computer Software Development diploma from NAIT (Northern Alberta Institute of Technology).  In this time I have had the opportunity to work with many programming languages and developmental technologies, focusing on creating full-stack applications and working with many different kinds of development processes. such as an Agile/iterative scrum based project workflow.</p>
                <img src={NaitLogo} alt="photo of NAIT logo" />
            </div>
        </section>
        <section>
            <h3>This Web Portfolio</h3>
            <div>
                <img src={ReactLogo} alt="React logo" />
                <p>This is a website portfolio that has been built using a react framework designed and developed with a mobile-first approach focusing on accessibility for screen readers and non-aggressive color and font formatting. The images in this website have been optimized for the web using exclusively “.Webp” and ".Png" file formatting. The website is hosted from Netlify linked to my personal Github repo for this portfolio.</p>
            </div>
        </section>
        <section>
            <h3>Hard Skills</h3>
            <div>
                <ul>
                    <li>- C#,  .NET, ASP, Razor, Framework, Core</li>
                    <li>- Python, Django, and other various python based libraries</li>
                    <li>- JavaScript, Node.js, ReactJS, Svelte, Angular, Typescript</li>
                    <li>- SQL, PLSQL, PgSql, NoSQL, SQLite</li>
                    <li>- GIT(DVCS)</li>
                    <li>- HTML5</li>
                    <li>- CSS</li>
                    <li>- Java, EE, Android, Kotlin</li>
                    <li>- Adobe, photoshop, premier, lightroom, illustrator</li>
                    <li>- Microsoft Office</li>
                    <li>- Jira, Confluince, Miro</li>
                    <li>- Netlify, Heroku, Google firebase</li>
                    <li>- AWS, EC2, RDS, S3</li>
                </ul>
                <img src={CodeLogo} alt="photoshoped logo" />
            </div>
        </section>
        <section>
            <h3>Soft Skills</h3>
            <div>
                <img src={CodeLogo} alt="photoshoped logo" />
                <ul>
                    <li>- Communication</li>
                    <li>- Teamwork</li>
                    <li>- Time Management</li>
                    <li>- Critical Thinking/Problem Solving</li>
                    <li>- Quick Decision Making</li>
                    <li>- Stress Management</li>
                    <li>- Diligent and Organized</li>
                    <li>- Fast Learner</li>
                    <li>- Creative</li>
                    <li>- Goal Oriented</li>
                </ul>

            </div>
        </section>

    </MAINPAGE>);
}

export default LandingPage;