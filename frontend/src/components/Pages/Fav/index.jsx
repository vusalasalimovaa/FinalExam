import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./Fav.module.scss"
import { FaHeart } from "react-icons/fa6";
import { deleteFav } from '../../../redux/FavSlice';



const Fav = () => {
  const { fav } = useSelector((store) => store.fav)
  const dispatch = useDispatch()
  return (
    <>
      <div className={style.mainproducts}>
        <div className={style.container}>
          <div className={style.text}>
            <h1>Wishlist</h1>
          </div>

          <div className={style.gridStyle}>

            {fav?.map((favElem) => {
              return (
                <div className={style.gridItems}>
                  <div className={style.back}>
                    <img src={favElem.image} alt="" />
                    <h3>{favElem.title}</h3>
                    <p>${favElem.price}</p>

                    <div className={style.heart}>
                      <FaHeart style={{color:"red"}} onClick={() => dispatch(deleteFav(favElem))}  />
                    </div>
                  </div>


                </div>
              )
            })}


          </div>
        </div>
      </div>
    </>
  )
}

export default Fav