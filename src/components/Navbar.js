import {
    Link
  } from "react-router-dom";
function Navbar()
{
  const navStyle=
  {
    backgroundColor:"rgba(18,18,62)",
  }
  const textCol=
  {
    color:"white",
    textSize:"25px",
    gap:"15px"
  }




    return(
        <>
     <nav className="navbar navbar-expand-lg " style={navStyle}>
      <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={textCol}>venky's porfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <Link className="nav-link " aria-current="page" to="/"  style={textCol}>Home</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/about"  style={textCol}>about</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/service"  style={textCol}>services</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/contact"  style={textCol}>contact me</Link></li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;