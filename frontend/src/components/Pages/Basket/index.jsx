import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../Fav/Fav.module.scss"
import { FaHeart } from "react-icons/fa6";
import { addToFav, deleteFav } from '../../../redux/FavSlice';
import { decreaseCount, increaseCount } from '../../../redux/BasketSlice';
import { FaRegHeart } from "react-icons/fa6";




const Basket = () => {
  const { basket } = useSelector((store) => store.basket)
  const { fav } = useSelector((store) => store.fav)
  const dispatch = useDispatch()
  return (
    <>
      <div className={style.mainproducts}>
        <div className={style.container}>
          <div className={style.text}>
            <h1>Basket</h1>
          </div>

          <div className={style.gridStyle}>

            {basket?.map((basketElem) => {
              return (
                <div className={style.gridItems}>
                  <div className={style.back}>
                    <img src={basketElem.image} alt="" />
                    <h3>{basketElem.title}</h3>
                    <p>${basketElem.price}</p>

                    <div>
                      <button onClick={() => dispatch(increaseCount(basketElem))}>+</button>
                      <button>{basketElem.count}</button>
                      <button onClick={() => dispatch(decreaseCount(basketElem))}>-</button>
                    </div>

                    <div className={style.heart}>
                      {fav.find((elem) => elem._id == basketElem._id) ? (<FaHeart style={{ color: "red" }} onClick={() => dispatch(deleteFav(basketElem))} />) : (<FaRegHeart onClick={() => dispatch(addToFav(basketElem))} />
                      )}

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

export default Basket