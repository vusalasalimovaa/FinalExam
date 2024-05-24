import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllProductQuery, useGetProductByIdQuery, usePutProductByIdMutation } from '../../../services/product'

const EditProduct = () => {

  const {id} = useParams()
  const {data} = useGetProductByIdQuery(id)
  const {refetch} = useGetAllProductQuery()

  const [item, setItem] = useState({
    title:"",
    price:"",
    image:""
  })

  const handleChange = (e) => {
    setItem({...item, [e.target.name] : e.target.value})
  }

  useEffect(() => {
   if(data) {
    setItem({
      ...item,
      id:id,
      title:data.title,
      price:data.price,
      image:data.image
    })
   }
  }, [data])

  const [putProductById] = usePutProductByIdMutation()

  const handleSubmit = async (e) => {
    await putProductById(item)
    refetch()
  }
  


  return (
    <>
      <>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit} >
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Title
                </label>
                <input
                value={data.title}
                onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Image"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  )
}

export default EditProduct