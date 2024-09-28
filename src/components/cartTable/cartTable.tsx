
import { Link } from "react-router-dom"
const CartTable = () => {
    return (
        <div className="bg-red-500 mx-auto md:w-[90%] max-w-[1170px] mt-5">
            <div className="flex items-center gap-2 md:w-[104px] p-1 ">
                <Link to="/"><span className="text-[14px] cursor-pointer">Home</span></Link>
                <span>/</span>
                <span className="text-[14px]">Cart</span>
            </div>
            <div className="bg-green-400 md:mt-14">
                <h2>hello</h2>

            </div>

        </div>
    )
}
export default CartTable;