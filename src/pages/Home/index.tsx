import { About } from '../../components/About'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      {/* <Form /> */}
      <About />
    </HomeContainer>
  )
}
