import { TiThMenu } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ciitmLogo.png'

const Navbar = () => {


  let Toggle_Open = () =>{

    let tl = gsap.timeline()
  
    tl.to('.open_menu', {
      display: 'none',
    })


    tl.to('.close_menu', {
      display: 'block',
    })

      tl.to('nav', {
        height: '100vh',
        duration : 0.5,
      })


 


  }


  let Toggle_Close = () =>{

    let tl = gsap.timeline()
  
    


    tl.to('.close_menu', {
      display: 'none',
    })

    tl.to('.open_menu', {
      display: 'block',
    })

      tl.to('nav', {
        height: '12vh',
        duration : 0.5,
      })


 


  }


  return (

    <nav className='w-screen lg:py-[2vh] fixed top-0 left-0 bg-[#333] lg:bg-white flex flex-col lg:flex-row items-center justify-between lg:px-10 overflow-hidden lg:overflow-visible gap-7 lg:gap-0  h-[12vh]  lg:h-[10vh] z-50  lg:p-0'>
        <div className="logo flex justify-between items-center lg:items-start lg:justify-normal  bg-white  w-full lg:w-fit p-[2vw] lg:p-0">
          <Link to='/'>
            <img src={logo} alt="Ciitm Logo"  />
          
          </Link>
            <TiThMenu  className="open_menu lg:hidden text-[5vw] h-[80%] w-[6.5vw] rounded-full  p-2 bg-[#333] text-white" onClick={Toggle_Open}/>
            <AiFillCloseCircle  className="close_menu lg:hidden h-auto w-[6.5vw]  text-[#333] hidden" onClick={Toggle_Close}/>

        </div>
        <div className="flex gap-[3vw] lg:gap-[2vw] text-2xl items-center  lg:mt-0 lg:items-start lg:text-[.9vw]  w-full  lg:w-fit flex-col lg:flex-row bg-[#333333] lg:bg-white text-white lg:text-black font-bold lg:font-medium">
            <Link to="/" className="hover:font-bold transition-all">Home</Link>
            <Link to="/about" className="hover:font-bold transition-all">About US</Link>
            <Link to="/gallery" className="hover:font-bold transition-all">Gallery</Link>
            <Link to="/students" className="hover:font-bold transition-all">Students</Link>
            <Link to="/contact" className="hover:font-bold transition-all" >Contact Us</Link>
        </div>
        <div className="btns flex items-center justify-center gap-2 flex-col w-[80%] mb-[15vh] lg:mb-0 lg:w-auto lg:flex-row">
            <button className='px-8 py-2 w-full bg-blue-600 lg:bg-[#333] text-white rounded-md'>Login</button>
            <button className='px-4 py-2 w-full bg-[#F9F9F9] rounded-md'>Registration</button>
        </div>
    </nav>
  )
}

export default Navbar