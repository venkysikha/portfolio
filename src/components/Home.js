import React, { useState, useEffect } from 'react';
import venky from './venky.jpeg';
import './Home.css';
import shake from './iconss/waving.svg';
import avatar from './iconss/avatar.svg';

function Home(props) {
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const skills = ['Web development', 'Python developer', 'Full stack development', 'Leetcode problem solving'];

    useEffect(() => {
        let skillIndex = 0;
        const skillInterval = setInterval(() => {
            if (skillIndex < skills.length) {
                setDisplayedSkills(prevSkills => [...prevSkills, skills[skillIndex]]);
                skillIndex++;
            } else {
                clearInterval(skillInterval);
            }
        }, 1000); // Change the delay here if you want faster or slower display

        return () => clearInterval(skillInterval); // Cleanup interval on component unmount
    },// eslint-disable-next-line
     []);
    
    return (
        <>
            <section className="section">
                <div className="leftSection">
                    <div className='shaking'>
                        Hi, There! <img src={shake} style={{ height: "45px", width: "45px" }} alt="handshake" />
                    </div>
                    I'm SIKHA VENKATESWARARAO
                    <br /><br />
                    <div className='skill'>
                        <h2>Skills:</h2>
                        <ul className='skillist'>
                            {displayedSkills.map((skill, index) => (
                                <li key={index} style={{color:"purple"}}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="rightSection">
                    <img src={venky} alt={props.name} />
                </div>
            </section>

            <div className='container bottom'>
                <div className='left'>
                    <h1>LET ME  <span style={{color:'purple'}}>INTRODUCE</span>  MYSELF</h1>
                    <br /><br />
                    <div>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️,</div><br/>
                    <div>I am fluent in classics like<span style={{color:'purple'}}> C, Javascript,java,</span> and <span style={{color:'purple'}}>pyhton</span>.</div><br/>
                    <div>My field of Interest's are building new <span style={{color:'purple'}}>  Web Technologies</span> 
                        and Products and also in areas related to <span style={{color:'purple'}}>MachineLearning </span> 
                        and <span style={{color:'purple'}}> AI</span> .</div><br/>
                    <div>Whenever possible, I also apply my passion for
                        developing products with <span style={{color:'purple'}}>Node.js </span>and <span style={{color:'purple'}}>Modern Javascript Library and Frameworks </span>
                            like <span style={{color:'purple'}}>React.js, Next.js</span> </div>
                </div><br/>
                <div className='right'>
                    <img 
                        src={avatar} 
                        alt="avatar" 
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
