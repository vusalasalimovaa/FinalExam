import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <>
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.all}>
        <div className={style.icons}>
          <div className={style.ico}><FiFacebook /></div>
          <div className={style.ico}><FiTwitter /></div>
          <div className={style.ico}><AiOutlineYoutube /></div>
          <div className={style.ico}><FaInstagram /></div>
        </div>

        <div>
          <p>Copyright ©2024 All rights reserved | This template is made with by Colorlib</p>
        </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Footer