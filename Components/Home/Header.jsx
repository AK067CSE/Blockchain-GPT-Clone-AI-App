import React from "react";
import {HiMenuAlt3} from "react-icons/hi";
//INTERNAL IMPORT 
import {useStateContext} from "../../Context/index";

const Header = () => {
  //STATE VARIABLES
  const {address}=useStateContext();
  //NAV MENU
  const menuList = [
    {
name:"Home",
link:"/",
style:"active",

  },
  {
    name:"Chat",
    link:"/chat",
    style:"",
    
      },
      {
        name:"About",
        link:"#",
        style:"",
        
          },
          {
            name:"Service",
            link:"#",
            style:"",
            
              },
              {
                name:"Price",
                link:"#",
                style:"",
                
                  },
                  {
                    name:"Contact",
                    link:"#",
                    style:"",
                    
                      }
]
  return <header>
  <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
  data-bs-toggle="offcanvas" 
  data-bs-target="#primaryMenu"
  >
  <span className="navbar-toggler-icon">
  <HiMenuAlt3 />
  </span>
  </button>
  <a href="/">
  <img src="assets/images/logo.svg"
  alt="logo" className="img-fluid"/>
  </a>
  {/* //NAVLIST */}
  <nav className="header-nav-middle">
  <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
  
  <div className="offcanvas offcanvas-collapse order-xl-2"
  id="primaryMenu">
  <div className="offcanvas offcanvas-collapse navbar-shadow">
  <h5 className="mb-0">Back</h5>
  <button className="btn-close lead" type="button"
  data-bs-dismiss="offcanvas" 
  aria-label="Close"
  ></button>
  
  
  </div>
  <div className="offcanvas-body">
  <ul className="navbar-nav">
  {
    menuList.map((menu,i)=>(
      <li className={`nav-item ${menu.style}`}>
      <a href={`${menu.link}`}
      className="nav-link">
      {menu.name}
      </a>
      
      
      </li>
    ))
  }
  
  </ul>
  </div>
  
  
  </div>
  </div>
  
  </nav>
  <a 
  data-cursor="pointer" 
  href="/login" 
  className="btn btn-theme d-sm-inline-block d-none">
  <span>Login Now</span>
  </a>
  <span className="new_space"></span>
  {
    address ? (
      <a onClick={()=>{}}data-cursor="pointer"
      className="btn btn-theme d-sm-inline-block d-none">
      <span>Disconnect</span>
      </a>
    ):(
      <a onClick={()=>{}}data-cursor="pointer"
      className="btn btn-theme d-sm-inline-block d-none">
      <span>Connect</span>
      </a>
      
    )
  }
  </header>
}


export default Header
