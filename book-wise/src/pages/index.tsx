import { DefaultLayout } from "@/layouts/DefaultLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import { HomeContainer } from "@/styles/pages/home"
import { LatestRatings } from "@/components/LatestRatings"
import { PopularBooks } from "@/components/PopularBooks"

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage