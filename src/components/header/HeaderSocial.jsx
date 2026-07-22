import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/parul-jamwal/" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/paruljamwal" target="_blank" rel="noreferrer"><FaGithub></FaGithub></a>
         
    </div>
  )
}
