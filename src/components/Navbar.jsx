import {useLocation} from "react-router-dom";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";

import gsap from "gsap";

// import logo from '../assets/fcc-logo-white.png'
import logo from '../assets/fcc-white.svg'
import { Link } from "react-router-dom";

function Navbar() {

  const location = useLocation()

  const menuRef = useRef(null);
  const [open, changeState] = useState(false);

  useGSAP(() => {
    if (open === false) {
      gsap.to(menuRef.current, {
        left: "100%",
        duration: 0.3,
      })
    }
    else if (open === true) {
      gsap.to(menuRef.current, {
        left: "0%",
        duration: 0.3,
      })
    }
  }, [open])





  return (
    <div className="container-fluid header flex font-semibold justify-center p-10">
      <header className="flex w-[100%] h-auto overflow-hidden items-center justify-between bg-gradient-to-r from-blue-600 to-blue-900 rounded-[300px] p-3 shadow-[0_0_12px_rgba(69,115,213,0.6)] ">
      {/* <header className="flex w-[100%] h-auto overflow-hidden items-center justify-between bg-[#205398] rounded-[300px] p-3"> */}
      {/* <header className="flex w-[100%] h-auto overflow-hidden items-center justify-between bg-[#0E3E81] rounded-[300px] p-2"> */}
      {/* <header className="flex w-[100%] h-auto overflow-hidden items-center justify-between bg-transparent rounded-[300px] p-2"> */}


        <div className='pl-4'>
          <Link to='/'
             className='inline-flex link-body-emphasis text-decoration-none items-center justify-evenly'>
            <img src={logo} alt='FCC' width='35' height='35'/>
          </Link>
        </div>

        <ul className='navlinks w-[50%] text-xl hidden lg:flex justify-between items-center pr-5'>
          <li>
            <Link
              to='/'
              className={'nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/' ? ' border-solid border-2 rounded-[300px]' : '')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/horizon'
              className={'nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/horizon' ? ' border-solid border-2 rounded-[300px]' : '')}
            >
              Horizon
            </Link>
          </li>
          <li>
            <Link
              to='/events'
              className={'nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/events' ? ' border-solid border-2 rounded-[300px]' : '')}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to='/resources'
              className={'nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/resources' ? ' border-solid border-2 rounded-[300px]' : '')}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to='/teams'
              className={'nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/teams' ? ' border-solid border-2 rounded-[300px]' : '')}
            >
              Team
            </Link>
          </li>
        </ul>


        <button className='btn btn-primary lg:hidden' type='button' onClick={() => {
          changeState(true);
        }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-list'
               viewBox='0 0 16 16'>
            <path fillRule='evenodd'
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>

        <div className="fixed top-0 w-screen h-screen bg-black z-10 lg:hidden flex flex-col overflow-hidden left-[100%]"
             ref={menuRef}>
          <div className="flex justify-end bg-transparent w-full h-[20%] items-center p-[5%] cursor-pointer"
               onClick={() => {
                 changeState(false)
               }}>
            <div>X</div>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[80%]  p-[10%] links ">
               
            <Link
              to="/"
              className={"text-5xl font-montserrat font-light" + (location.pathname === "/" ? " text-blue-300" : " text-white hover:text-blue-300")}
            >
              Home
            </Link>
            <Link
              to="/horizon"
              className={"text-5xl font-montserrat font-light" + (location.pathname === "/horizon" ? " text-blue-300" : " text-white hover:text-blue-300")}
            >
              Horizon
            </Link>
            <Link
              to="/events"
              className={"text-5xl font-montserrat font-light" + (location.pathname === "/events" ? " text-blue-300" : " text-white hover:text-blue-300")}
            >
              Events
            </Link>
            <Link
              to="/resources"
              className={"text-5xl font-montserrat font-light" + (location.pathname === "/resources" ? " text-blue-300" : " text-white hover:text-blue-300")}
            >
              Resources
            </Link>
            <Link
              to="/team"
              className={"text-5xl font-montserrat font-light" + (location.pathname === "/team" ? " text-blue-300" : " text-white hover:text-blue-300")}
            >
              Team
            </Link>

          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar;