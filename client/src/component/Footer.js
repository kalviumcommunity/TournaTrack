import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assest/ttlogo.svg";
import './css/footer.css'


function Footer() {
  return (
    <div className="footer" style={{borderTop:"5px solid black"}}>
      <footer style={{display:"flex", flexDirection:"column", marginTop:"", justifyContent:"center", alignItems:"center", backgroundColor:"#2d314b"}}>
        <div className="footer" style={{backgroundColor:"#2d314b",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div className="logo-footer" style={{width:"100%", backgroundColor:"#2d314b"}}>
          <div className="logo-text" style={{backgroundColor:"#2d314b",display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center", width:"100%", gap:"4vw"}}>
            <img className="logo" src={logo} alt=""  style={{backgroundColor:"#2d314b", width:"4%", marginTop:"4vh", marginBottom:"2vh", width:"5%"}}/>
            <p style={{marginRight:"0%",width:"80%" ,textAlign:"center", marginTop:"1vh",fontSize:"large", color:"white", backgroundColor:"transparent"}}>The ultimate platform for sports enthusiasts and tournament organizers! Whether you're an avid player or a passionate organizer, our platform provides a seamless experience to explore the sports world, showcase your talents, and create unforgettable tournaments.</p>
          </div>
        </div>
        <div className="logo-footer2" style={{width:"80%",backgroundColor:"#2d314b", display:"flex", justifyContent:"space-evenly", flexDirection:"column"}}>
          <div style={{display:"flex", flexDirection:"column", backgroundColor:"transparent", width:"100%"}}>
            <div className="options" style={{display:"flex", flexDirection:"row", marginTop:"2vh", marginLeft:"9%", width:"100"}}>
              <div style={{display:"flex", width:"100%"}}>
                <div style={{backgroundColor:"#2d314b",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
                  <h2 style={{backgroundColor:"transparent", textAlign:"left",marginBottom:"2%"}}><span style={{color:"blue"}} className="links">Important Links</span></h2>
                  <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Home</Link></li>
                  <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/about"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>About</Link></li>
                  <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/guides"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Rules</Link></li>
                </div>
                <div style={{backgroundColor:"#2d314b",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
                  <h2 style={{backgroundColor:"transparent", textAlign:"left",marginBottom:"2%"}}><span style={{color:"blue"}} className="links">Policies and FAQ's</span></h2>
                  <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/t&c"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>T&C</Link></li>
                  <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/privacypolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Privacy Policy</Link></li>
                </div>
              </div>
              <div>
                <h1 className="sub-heading" style={{margin:"auto"}}><span style={{color:"blue"}}>Socials,</span></h1>
                <div style={{display:"flex", justifyContent:"center", gap:"9vw", marginTop:"5%", backgroundColor:"#2d314b"}}>
                  <Link to={"https://www.linkedin.com"} target="_blank">
                    <FaLinkedin className="login" style={{ backgroundColor: "#2d314b", color:"white" }} />
                  </Link>
                  <Link to={"https://www.instagram.com"}>
                    <FaInstagram className="login" style={{ backgroundColor: "#2d314b", color:"white" }} />
                  </Link>
                  <Link to={"https://twitter.com"}>
                    <FaTwitter className="login" style={{ backgroundColor: "#2d314b", color:"white" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <h2 style={{textAlign:"right", color:"rgb(130 130 130)", backgroundColor:"#2d314b",fontSize:"large", marginTop:"3%", marginBottom:"1%"}}>
          © CopyRight 2023 TornaTrack
        </h2>
      </footer>
    </div>
  );
}

export default Footer;