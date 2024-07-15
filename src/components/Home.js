
import image from './venky.jpeg'
function Home(props)
{
    const StyleFirst=
    {
        display:'flex',
      justifyContent: 'space-around',
      margin:'80px 0',
       alignItems: 'center'
    }

     const lsection=
     {
        fontSize: '2.5rem',
        marginBottom:'40px' ,
        width:"30%",
        marginLeft:"15px"
     }
     const imstyle=
     {
        height:"650px",
        width:"70%",
        marginLeft:"70px",
        borderRadius:"15px",
        marginTop:"0"
        
     }

    return (
        <>
          <section  style={StyleFirst}>
            <div  style={lsection} >
                Hi, my name is <span style={{color:"purple"}}>venky</span> 
                <div> and iam passionate <span id="element">web developer</span></div>
                <br/>
                <br/>
                <div className='skill'>
                <h2>Skills:</h2>
                <ul className='skillist' style={{fontSize:"20px"}}>
                    <li>Web development</li>
                    <li>python developer</li>
                    <li>content writing </li>
                </ul>
            </div> 
            </div>
            <div className="rightSection">
                <img src={image} style={imstyle} alt={props.name}/>
            </div><hr/>
           </section> 
           </>
    )
}
export default Home;
