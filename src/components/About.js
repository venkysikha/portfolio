import about from './iconss/about.png'
import './About.css'
import { ImPointRight } from "react-icons/im";
import Techstack from './Tools/Techstack';
import Tools from './Tools/Tools';

function About ()
{
    return(
        <>
        <section>
            <div className="first">
                <h2 className="text-center">know Who <span style={{color:'purple'}}>I'm</span></h2>
                <div className="content">
                    Hi Everyone. I am <span style={{color:'purple'}}>Sikha Venkateswararao</span> from <span style={{color:'purple'}}>Eluru</span> Andhra Pradesh,India<br/>
                    Iam currently pursing my B-tech in Rajiv Gandhi knowlede Technology Nuzvid<br/>
                    I had great interest on building the websites and i specialize in mern stack<br/>
                    <br/>
                    <div className="sub-content">
                    <h5>Apart from coding, some other activities that I love to do!</h5><br/>
                    <ul >
                        <li> <ImPointRight/> Playing Games</li>
                        <li> <ImPointRight/> Reading Books</li>
                        <li> <ImPointRight/> Internet Browsing</li>
                    </ul>
                    <br/>
                    <div className='text-center' style={{color:"#bf9eca"}}>"Strive to build things that make a difference!"</div>
                    <div className='text-center'style={{color:"#bf9eca"}}>-VenkySikha</div>
                    </div>
                </div>
                
            </div>
            <div className="second">
                <img src={about} alt="boy is designing the websites"  height="350px"  width="350px" />
            </div>
        </section><br/>
        <div className='skillset'>
            <h1 className='text-center'> Professional  <span style={{color:"purple"}}>Skillset</span>  </h1>
            <div className='techstack'>
                <Techstack/>
            </div>
            <div className='toolstack'>
            <h1 className="project-heading text-center"> <span style={{color:"purple"}}>Tools</span>  I use</h1>
            <Tools/>
        </div>
        </div>
        </>
     )
}

export default About;