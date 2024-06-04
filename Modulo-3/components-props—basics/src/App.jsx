
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Image } from './components/Image/Image'
import { Main } from './components/Main/Main'
import { Paragraph } from './components/Paragraph/Paragraph'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'

function App() {
  

  return (
    <>
     <Title titulo="proyecto children" />
     <SubTitle subtitulo="subtitulo de las children🗞️" />
     <Image src="https://i.ytimg.com/vi/JpM9hiQTlAk/maxresdefault.jpg" alt="imagen children" with={100} weight={100} />
     <Paragraph parrafo="este es el parrafo del ejercicio de las children" />
     <Header> 
     <Title titulo="soy el titulo dentro de un children header" />
     </Header>
     <Main>
      <SubTitle subtitulo="subtitulo del main como children" />
      <Paragraph parrafo="parrafo del main como children" />
     </Main>
     <Footer>
      <Title titulo="direccion" />
      <Paragraph parrafo="Dirección: Calle california, 123" />
     </Footer>
    </>
  )
}

export default App
