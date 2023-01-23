import Banner from "../components/Banner"
import Card1x3 from "../components/Card1x3"
import CardsRow from "../components/CardsRow"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      {/* <Card1x3/> */}
      <CardsRow/>
      <Footer/>
    </>
  )
}    
