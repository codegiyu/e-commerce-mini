import CartTable from "@/components/cartTable/cartTable"
import { MainLayout } from "@/layout/MainLayout"

const CartPage = () => {
    return (
        <MainLayout>
            <div>
                <CartTable />
            </div>
        </MainLayout>
    )
}
export default CartPage