import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../components/constValues';
import Stonks from '../../components/images/stonks.webp';
import TestQR from '../../components/images/testProductQR.png';
import YouTube from '../../components/images/youtube.png';
import AndroidLogo from '../../components/images/android-logo.png';

const LINKSTYLES = styled.div`
background-color: ${Colors.gunPurpGrey};
color:${Colors.lightLavender};
padding: 1rem 1rem 5rem 1rem;
max-width: 1080px;
 margin: auto;
border-radius: 3rem;
h3{
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
}
a{
    color: inherit;
}
section{
  padding:0.5rem;
    border-radius: 1rem;
    width: fit-content;
    margin: 1rem auto;
    background-color: ${Colors.slateGrey};
  
    >div{
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
            text-align: center;
        }
    }
    img{
        margin: 0.5rem;
        border-radius: 1rem;
        max-height: 8rem;
    }
}
@media(min-width:800px){
    section{
        max-width: 50%;
    }
}
@media(min-width: 500px){
    section{
            >div{
                flex-direction: row;
        }
        
    }
}
`

const LinksPage = (props) => {
    return (
      <LINKSTYLES>
        <section>
          <h3>Stock Trading Algorithm .NET Console Application</h3>
          <div>
            <img src={Stonks} alt="Stonks MEME" />
            <div>
              <p>
                Experimental C# .Net Framework console application designed to
                dynamically buy and sell stock shares interfacing with an Alpha
                Vantage API for market data using windows server SQL to store
                data in a relational database.
              </p>
              <p>
                <a
                  href="https://github.com/toltalchaos/Trading-Algo"
                  target="_blank"
                >
                  Algorithm Repository
                </a>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3>Product Review API and public Interface</h3>
          <div>
            <div>
              <p>
              the purpose of this app is to provide a way to use firebase authentication to host a service to easily fill reviews for products and save to the firebase RTDB system. the separate application 
                <a
                  href="https://greenreview.netlify.app/?productID=1234"
                  target="_blank"
                >
                  {" "}
                  (Link){" "}
                </a>
                uses the API to populate its view using GET requests in the URL to dynamically populate the web page based on JSON data received from the firebase Database.
                <br />
                <br /> the Application is designed to utilize QR codes in the retail Store to provide the customers quick access to a generally accepted product review.
              </p>
              <p>
                <a
                  href="https://github.com/toltalchaos/GreenReview-API-projet2"
                  target="_blank"
                >
                  Product Review Application Repository
                </a>
              </p>
            </div>
            <img src={TestQR} alt="live working QR code" />
          </div>
        </section>
        <section>
          <h3>Android Application for NFC credentials</h3>
          <div>
          <img src={AndroidLogo} alt="default android application logo" />
            <div>
              <p>
                this application written in Java android is designed to
                demonstrate how to leverage the NFC capabilities to create
                messages holding multiple records so the user can save and store
                usernames and passwords.
                <br />
                <br />
                the user has the ability to enter a username and password on the
                main activity screen and is given the option to write the
                credentials to an NFC chip. at which point the application will
                use the NFC capabilities within the phone to save those
                credentials. once card with saved credentials is scanned the
                application will fill in the fields appropriately.
                <br />
                <br />
                the user also has the option to "log in" using the given or
                scanned credentials at which point the application will use an
                SQLite database to retrieve any saved credentials into a
                populated list for the user to then choose from to write onto
                the NFC card or add to the list.
              </p>
              <p>
                <a
                  href="https://github.com/toltalchaos/Android-NFC-credential-Application/tree/main"
                  target="_blank"
                >
                  Application Github Repository
                </a>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3>Video Production, Editing and Graphic design</h3>
          <div>
            <div>
              <p>
                Through my short experience actively trying to create YouTube
                content I learned many things; such as branding, many elements
                of Graphic Design, Video production from scripting to lighting
                and storyboarding as well as creating a workflow to carry an
                idea from inception to final product. I wouldn’t call myself an
                expert in these by any means however I did develop many life
                long skills through the process. And peeking at 900 and change
                subscribers before starting school and becoming too busy to
                pursue YouTube I am very proud of the content I made.
              </p>
              <p>
                <a href="https://www.youtube.com/toltalchaos" target="_blank">
                  Youtube Chanel
                </a>
              </p>
            </div>
            <img src={YouTube} alt="YouTube logo" />
          </div>
        </section>
      </LINKSTYLES>
    );
}
 
export default LinksPage;