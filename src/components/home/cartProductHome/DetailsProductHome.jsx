import CartIcon from "@/components/icons/CartIcon.jsx"
import { useCartDetails } from '@/context/useCartDetails'
import { Link } from "react-router-dom"
import { useContext, useState } from "react"

const DetailsProductsHome = ({objectProduct}) => {

    const { addCartItems } = useContext(useCartDetails)
    const [count, setCount] = useState(1)

    const incrementCount = () => setCount(count+1)
    const decrementCount = () => { 
      if(count ===0) return
      setCount(count-1)
     }

    const handleAddToCart =  () => {
      addCartItems({
      ...objectProduct,
      quantity: count || 1,
    })
      setCount(1)
    }
    return(
        <section className="container max-h-[30vh] text-xs flex flex-col  px-4 md:px-4">
        <Link to ="/products">
        <p className=" hidden mb-3 text-green-primary font-bold uppercase tracking-wide md:block md:text-lg">
        {objectProduct.subtitle}
        </p>
        <h2 className=" mb-0 text-sm font-bold md:text-xl">
        {objectProduct.title}
        </h2>
        <p className=" hidden max-h-12 overflow-hidden text-clip text-xs mb-0 text-dark-grayish-blue min-[320px]:block md:text-base">
        {objectProduct.description}
        </p>
        </Link>
        <div className="flex mb-0 items-center  gap-4 font-bold md:justify-start md:gap-1 md:self-start flex-wrap ">
          <span className=" self-center text-xs md:text-lg md:w-[40%]">${(
            objectProduct.price *(1 - objectProduct.discount)
            ).toFixed(2)}</span>
          <span className="  rounded-md bg-pale-green mx-auto py-1 px-2 text-green-primary md:text-base md:w-10">
          {objectProduct.discount * 100}%
          </span>
          <span className=" text-right text-xs text-grayish-blue line-through md:text-left md:text-lg">
          ${objectProduct.price.toFixed(2)}
          </span>
        </div>
        <div className=" md:max-w-3xl  flex flex-row justify-between ">
          <div className=" flex grow items-baseline justify-between rounded-md bg-gray-200  px-1 py-1 ">
            <button className=" text-lg md:text-xl grow text-green-primary" onClick={decrementCount}>-</button>
            <span className=" font-bold md:text-lg">{count}</span>
            <button className=" text-lg md:text-xl grow text-green-primary" onClick={incrementCount}>+</button>
          </div>
          <button className=" textlg flex items-center w-[40%] justify-center gap-x-3 rounded-md bg-green-primary py-1 text-white transition-all hover:bg-green-700" onClick={handleAddToCart}>
            <CartIcon fill="#fff" className="fill-white" />
            <span>Add</span>
          </button>
        </div>
      </section>
    )
}
export default DetailsProductsHome