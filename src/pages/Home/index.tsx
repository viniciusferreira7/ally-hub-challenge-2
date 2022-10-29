import { About } from '../../components/About'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      {/* <Form /> */}
      <About />
      <Footer />
    </HomeContainer>
  )
}
