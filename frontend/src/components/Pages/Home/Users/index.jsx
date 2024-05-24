import React from 'react'
import style from "./User.module.scss"

const User = () => {
  return (
    <>
    <div className={style.users}>
      <div className={style.container}>
        <div className={style.allusers}>
          <div className={style.gridusers}>
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, architecto debitis at inventore rerum perspiciatis illum ipsam nostrum nulla, tenetur possimus necessitatibus delectus doloribus nesciunt eveniet est aliquam. Sapiente, corporis?
            </p>
            <p>-ALLIW SMITH</p>
          </div>

          <div className={style.gridusers}>
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, architecto debitis at inventore rerum perspiciatis illum ipsam nostrum nulla, tenetur possimus necessitatibus delectus doloribus nesciunt eveniet est aliquam. Sapiente, corporis?
            </p>
            <p>-ALLIW SMITH</p>
          </div>

          <div className={style.gridusers}>
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, architecto debitis at inventore rerum perspiciatis illum ipsam nostrum nulla, tenetur possimus necessitatibus delectus doloribus nesciunt eveniet est aliquam. Sapiente, corporis?
            </p>
            <p>-ALLIW SMITH</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default User