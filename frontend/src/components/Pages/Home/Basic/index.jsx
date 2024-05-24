import React from 'react'
import style from "./Basic.module.scss"

const Basic = () => {
  return (
    <>
    <div className={style.basic}>
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

export default Basic