import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../components/constValues';
import EdmontonLogo from '../../components/images/EdmontonLogo.jpg'
import LenbethLogo from '../../components/images/lenbethLogo.png'
import SwissportLogo from '../../components/images/swissportLogo.png'
import ANWLogo from '../../components/images/a&wLogo.png'


const WORKHISTORY = styled.div`

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

const WorkHistory = (props) => {
    return ( 
    <WORKHISTORY>
    {/* <section>
          <h3>TITLE</h3>
          <div>
            <img src={null} alt="IMG" />
            <div>
              <p>
                paragraph
              </p>
            </div>
          </div>
    </section> */}
         <section>
            <h3>The City of Edmonton - Maintenance Crew Supervisor</h3>
            <div>
                <img src={EdmontonLogo} alt="City of Edmonton logo" />
                <div>
                    <p>
                            2018 – 2020 <br /><br />
                            Manage and cooperate with a small team to ensure the proper maintenance, cleanliness and general appearance of parks, ensuring a safe environment for the public to enjoy.
                     </p>
                </div>
            </div>
        </section>
        <section>
          <h3>Lenbeth Group of Companies  - Weeping Tile and foundation waterproofing installation crew chief</h3>
          <div>
            <div>
              <p>
              2016-2018<br/><br />
              Ensuring trucks are loaded with appropriate equipment, communicating to team members work tasks to be completed, making sure all daily job tasks are completed to company standard and that job is done completely in accordance with JFLA, ensuring all paperwork is completed accurately and timely.  Documenting worksite conditions and documenting all communication to stakeholders.
              </p>
            </div>
            <img src={LenbethLogo} alt="Lwnbeth Weepingtile logo" />
          </div>
        </section> 
        <section>
            <h3>Swissport International - Aircraft ground handling training coordination officer</h3>
            <div>
                <img src={SwissportLogo} alt="City of Edmonton logo" />
                <div>
                    <p>
                        2014 – 2017 <br /><br />
                        Processing new employee’s paperwork and facilitating class orientations, comprehensive field training to ensure new employees have all the knowledge and skill required to manage all ground crew activities including docking/undocking aircraft, loading and unloading aircraft all within stringent safety and security protocols, cleaning lavatories in aircraft, stocking aircraft with supplies and appropriate tower communications to ensure safety and security of passengers and employees.
                        <br /><br />
                            Managing the flight arrival and departure tasks and responsibilities using effective communication with a team of Ramp Agents to ensure the timely completion of all tasks to a high standard upholding all safety protocols regardless of conditions.

                     </p>
                </div>
            </div>
        </section>
        <section>
          <h3>{"A&W"}  - Cook and Customer Service Representative</h3>
          <div>
            <div>
              <p>
              2012-2014<br/><br />
              o	Complete operation of restaurant from open to close including maintaining restaurant cleanliness standards, preparing and cooking food in accordance to company standards, maintaining proper inventory status including ordering and maintaining stock, providing top quality friendly customer service, handling daily cash-outs and carrying float balances.  
              </p>
            </div>
            <img src={ANWLogo} alt={"A&W logo"} />
          </div>
        </section>
    
    </WORKHISTORY>
     );
}
 
export default WorkHistory;