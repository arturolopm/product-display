import CartIcon from "@/components/icons/CartIcon.jsx"
import { useCartDetails } from '@/context/useCartDetails'
import { useContext, useState } from "react"

const DetailsProduct = ({objectProduct}) => {

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
        <section className="container mx-auto px-4 md:px-0">
        <p className=" mb-3 text-green-primary font-bold uppercase tracking-wide">
        {objectProduct.subtitle}
        </p>
        <h2 className=" mb-4 text-3xl font-bold">
        {objectProduct.title}
        </h2>
        <p className=" mb-5 text-dark-grayish-blue md:text-xl">
        {objectProduct.description}
        </p>
        <div className=" mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
          <span className=" text-3xl">${(
            objectProduct.price *(1 - objectProduct.discount)
            ).toFixed(2)}</span>
          <span className=" mr-auto rounded-md bg-pale-green py-1 px-2 text-green-primary">
          {objectProduct.discount * 100}%
          </span>
          <span className=" text-right text-lg text-grayish-blue line-through md:text-left md:col-span-3">
          ${objectProduct.price.toFixed(2)}
          </span>
        </div>
        <div className=" grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
          <div className=" col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
            <button className=" text-3xl text-green-primary" onClick={decrementCount}>-</button>
            <span className=" text-xl">{count}</span>
            <button className=" text-3xl text-green-primary" onClick={incrementCount}>+</button>
          </div>
          <button className=" col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-green-primary py-3 text-white transition-all hover:bg-green-700 md:col-span-1" onClick={handleAddToCart}>
            <CartIcon fill="#fff" className="fill-white" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    )
}
export default DetailsProduct