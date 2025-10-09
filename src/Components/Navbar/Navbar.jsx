import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo_navbar.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu.png';
import menu_close from '../../assets/close.png';

const Navbar = () => {

      // const [menu, setMenu] = useState("home");
      const menuRef = useRef();

      const openMenu = () => {
            menuRef.current.style.right = "0";
      }
      const closeMenu = () => {
            menuRef.current.style.right = "-350px";
      }
      
  return (
    <div className='navbar'>
               <AnchorLink href='#home'> <img className='logo-1' src={logo} alt="" /> </AnchorLink>  
                  <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
                  <ul ref={menuRef} className="nav-menu">
                          <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
                          {/* no need to add p tag */}
 {/* <AnchorLink className='anchor-link'  href='#home' > <li id='nav-hover'> Home<span data-text="Home"></span>
      <span data-text="Home"></span>  </li> </AnchorLink> */}
   <AnchorLink className='anchor-link' offset={50} href='#about' ><li id='nav-hover'>About me<span data-text="About Me"></span>
      <span data-text="About Me"></span> </li> </AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#contribution' >  <li id='nav-hover'>  Contributions<span data-text="Contributions"></span>
      <span data-text="Contributions"></span>  </li> </AnchorLink>
              {/* <li id='nav-hover'> <AnchorLink className='anchor-link' offset={50} href='#pastExperience' > Past Experiences <span data-text="Past Experiences"></span>
      <span data-text="Past Experiences"></span> </AnchorLink>  </li> */}
                          
   <AnchorLink className='anchor-link' offset={50} href='#contact' > <li id='nav-hover'> Contact Me <span data-text="Contact Me"></span>
                                  <span data-text="Contact Me"></span> </li>   </AnchorLink>  
                          
          </ul>
          
    </div>
  )
}

export default Navbar;
