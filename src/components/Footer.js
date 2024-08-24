import React from 'react'
import './Footer.css'
import linkedin from './iconss/bxl-linkedin.svg';
import facebook from './iconss/facebook.svg';
import instagram from './iconss/instagram.svg';
import github from './iconss/github.svg';
export default function Footer() {
  return (
    <>
      <div className='foot'>
        <ul className='list '>
            <li className='list-item'><a href='https://www.instagram.com/venkysikha/'><img src={instagram} alt="instagram"/></a> </li>   
            <li className='list-item'><a href='https://www.linkedin.com/in/venkateswararaosikha/'><img src={linkedin} alt="linkedin"/></a> </li>    
            <li className='list-item'><a href='/https://github.com/venkysikha/'><img src={github} alt="github"/></a></li>
            <li className='list-item'><a href='/'><img src={facebook} alt="facebook"/></a></li>
        </ul>
        <div className='text-center' style={{fontSize:"20px"}}>
            Developed by VenkySikha
        </div>
      </div>
    </>
  )
}
