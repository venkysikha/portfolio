import './Contact.css'
function Contact()
{
    return(
        <>

            <h2 className="text-center my-3">Contact Me</h2>
            <div className='container'>
            <form action="https://api.web3forms.com/submit" method="POST">
            <div className="contact">
            <input type="hidden" name="access_key" value="126dc8cf-366f-4bc5-a0df-82dccec988be"/>
                <div className='details'>
                <label className="labell my-3" htmlFor="name">Name:</label>
                <input  type="text" id="name" name="name" placeholder="enter your name" required/>
                </div>
                <div className='mailDetails'>
                <label className="mail labell my-3" htmlFor="mail">Email</label>
                <input type="email" id="mail" name="mail" placeholder="enter your email adderess" required/>
                </div>
                <div>
                    <label className="mob my-3" htmlFor="message">Message:</label>
                    <textarea   rows="4"type="text" id="message" placeholder="enter your Message" required/>
                </div>
                <div>
                   <button className='btn btn-primary my-4'>submit</button>
                </div>
                </div>
                </form>
            </div>
        </>
     )
}
export default Contact;