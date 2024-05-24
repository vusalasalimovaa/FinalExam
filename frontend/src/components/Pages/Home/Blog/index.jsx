import React from 'react'
import style from "./Blog.module.scss"

const Blog = () => {
  return (
    <>
      <div className={style.mainproducts}>
        <div className={style.container}>
          <div className={style.text}>
            <h1>WINE'S BLOG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
            <p>View All Products</p>
          </div>

          <div className={style.gridStyle}>


            <div className={style.gridItems}>
              <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <p>Dave Rogers in News</p>



            </div>

            <div className={style.gridItems}>
              <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg" alt="" />
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <p>Dave Rogers in News</p>



            </div>

            <div className={style.gridItems}>
              <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg" alt="" />
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <p>Dave Rogers in News</p>



            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Blog