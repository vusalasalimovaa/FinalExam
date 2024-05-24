import React from 'react'
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import style from "./Navbar.module.scss"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { fav } = useSelector((store) => store.fav)
  const { basket } = useSelector((store) => store.basket)
  let basketCount = basket?.reduce((acc,elem) => acc += elem.count,0)

  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbarStyle}>
            <div className={style.image}>
              <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
            </div>

            <div className={style.navbarText}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Wines</Link>
                </li>
                <li>
                  <Link>Shop</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link to="/basket">
                    <SlBasket />
                    <span>{basketCount}</span>

                  </Link>
                </li>
                <li>
                  <Link to="/fav">
                    <FaRegHeart />
                    <span>{fav.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar