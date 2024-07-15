function Contact()
{
    const myStyle=
    {
        margin:"10px",
        padding:"10px",
        border:"10px"
    }
    return(
        <>
            <h2 style={{textAlign:"center"}}>contact-details</h2>
            <div className="contact" style={myStyle}>
                <p>Name: Sikha Venkateswararao</p> 
                <p>Mobile no: +916305250577</p>
                <p>email : venkysikha3@gmail.com</p> 
            </div>
        </>
     )
}
export default Contact;