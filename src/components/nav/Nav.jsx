import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from "react";


export const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#about')} className={activeNav==="#" ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==="#about" ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==="#experience" ? 'active' : ''}><BiBook></BiBook></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==="#portfolio" ? 'active' : ''}><RiServiceLine></RiServiceLine></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==="#contact" ? 'active' : ''}><AiOutlineMessage></AiOutlineMessage></a>
      
    </nav>
  )
};
