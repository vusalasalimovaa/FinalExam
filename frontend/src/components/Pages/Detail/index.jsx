import React from 'react'
import "./tailwind.css"
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../../services/product'

const Detail = () => {
  const {id} = useParams()
  const {data:detail} = useGetProductByIdQuery(id)
  // console.log(detail)
  return (
    <>
      <>
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={detail?.image}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {detail?.title}
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
               $ {detail?.price}
              </p>
              
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Detail