import React from 'react'
import style from "./Porduct.module.scss"
import { useGetAllProductQuery } from '../../../../services/product'
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, deleteFav } from '../../../../redux/FavSlice';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { addToBasket } from '../../../../redux/BasketSlice';


const Product = () => {
  const { data: products } = useGetAllProductQuery()
  const { fav } = useSelector((store) => store.fav)
  const dispatch = useDispatch()
  console.log(products)
  return (
    <>
      <div className={style.mainproducts}>
        <div className={style.container}>
          <div className={style.text}>
            <h1>OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
            <p>View All Products</p>
          </div>

          <div className={style.gridStyle}>

            {products?.map((elem) => {
              return (
                <div className={style.gridItems}>
                  <div className={style.back}>
                    <img src={elem.image} alt="" />
                    <h3>{elem.title}</h3>
                    <p>${elem.price}</p>
                    <Link to={`/detail/${elem._id}`}>
                      <button className={style.detail}>Detail</button>

                    </Link>


                    <button onClick={() => dispatch(addToBasket(elem))} className={style.detail}>Add to Basket</button>




                    <div className={style.heart}>

                      {fav?.find((el) => el._id == elem._id) ? (<FaHeart onClick={() => dispatch(deleteFav(elem))} style={{ color: "red" }} />
                      ) : (<FaRegHeart onClick={() => dispatch(addToFav(elem))} />)}

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

export default Product