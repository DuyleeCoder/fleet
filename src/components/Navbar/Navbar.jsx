import { useEffect } from "react"
import "./navbar.css"

export default function Navbar() {

    const clickShowMenu = ()=>{ 
        let isDisplay = document.querySelector(".left__menu-items").style.display!=="none";        
            document.querySelector(".left__menu-items").style.display=isDisplay?"none":"block";
        
    }

    useEffect(()=>{
        document.querySelector(".left__menu-display").addEventListener("click",()=>{
            clickShowMenu();
        })
        document.addEventListener('click', function(event) {
            let isClickInside = document.querySelector(".left__menu-items").contains(event.target);
            isClickInside=document.querySelector(".left__menu-display").contains(event.target);
            if (!isClickInside) {
                document.querySelector(".left__menu-items").style.display="none";
            }
          });
    },[])

    return (
        <div className='Navbar'>
            <div className="navbar-left">
                <div className="navbar-left__logo">
                    <img src="./assets/logo-dark.svg" alt="" srcset="" />
                </div>
                <div className="vertical">

                </div>
                <div className="navbar-left__menu">
                        <div className="left__menu-display navbar__text" >Travelers &nbsp; <i class="fas fa-angle-down"></i></div>
                        <div className="left__menu-items show-items">
                                <div className="left__menu-item"><i class="fas fa-home"></i> &nbsp;  Stays</div>
                                <div className="left__menu-item"><i class="fas fa-helicopter"></i> &nbsp; Flights</div>
                                <div className="left__menu-item"><i class="fas fa-tasks"></i> &nbsp; Things to do</div>
                                <div className="left__menu-item"><i class="fas fa-car"></i> &nbsp; Cars</div>
                        </div>
                </div>
            </div>
            <div className="navbar-right">
                    <div className="navbar__text"> Support</div>
                    <div className="navbar__text"> <i class="fas fa-globe "></i> Language</div>
                    <div className="right__btn">List your properties</div>
                    
                        <div className="right__bell right__bell-nofication">
                            <i class="far fa-bell"></i>
                        </div>
                        
                        <div className="right__avatar">
                           <i class="far fa-user"></i>
                        </div>
                    
            </div>
        </div>
    )
}
