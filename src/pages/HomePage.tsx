import { MainLayout } from "@/layout/MainLayout"
import { Services } from "@/sections/services"

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        Home Page
        <Services/>
      </div>
    </MainLayout>
  )
}

export default HomePage