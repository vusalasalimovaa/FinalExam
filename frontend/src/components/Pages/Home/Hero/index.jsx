import React from 'react'
import style from "./Hero.module.scss"

const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <div className={style.container}>
          <div className={style.text}>
            <h3>Welcome</h3>
            <h1>WINES FOR EVERYONE</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero