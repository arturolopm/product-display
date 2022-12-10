import { useState } from "react"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import { Link } from "react-router-dom"


const SlideProductsHome = ({
    ARRAY_IMGS = [],
     ARRAY_IMG_SMALL=[],
     ...props
    }) => {

 
    const [imgIndex, setImgIndex] = useState(0)

    

    // const handleClickNext = () => {
        
    //     (imgIndex === ARRAY_IMGS.length -1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    // }
    // const handleClickPrev = () => {
    //     (imgIndex === 0) ? setImgIndex(ARRAY_IMGS.length-1) : setImgIndex(imgIndex-1)
    // }



    return (
        <section className="min-w-[150px] xl:max-w-sm" {...props}>
     
            <Link to="/products" className=" min-w-[150px] max-h-[25%]  ">
                <img src={ARRAY_IMGS[imgIndex]} 
                alt="" 
                className=" content-center aspect-auto w-full object-cover cursor-pointer rounded-md max-h-[300px] max-w-[300px]"  />

                

                    {/* <button className="absolute top-1/2 left-0  -translate-y-1/2 justify-between px-4 grid place-items-center h-3 w-3 rounded-full  " onClick={handleClickPrev}>
                        <PrevIcon />
                    </button> 

                    <button className="absolute top-1/2 right-0  -translate-y-1/2 justify-between px-4 grid place-items-center h-3 w-3 rounded-full  " onClick={handleClickNext}>
                        <NextIcon />
                    </button> */}
                
            </Link>
            
            

        </section>
    )
}

export default SlideProductsHome