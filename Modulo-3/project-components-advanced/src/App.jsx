
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"
import { Title } from './components/Title/Title'
import { SubTitle } from "./components/SubTitle/SubTitle"
import { Image } from "./components/Image/Image"
import { CharacterList } from './components/CharacterList/CharacterList'
import { ItemList } from "./components/ItemList/ItemList"
import { Paragraph } from './components/Paragraph/Paragraph'


function App() {
 

  return (
    <>
     <Header>
         <Title text="Hola a todos!!!!!" />
     </Header>
     <Main>
       <SubTitle text="tenemos camisetas" />
       <Image src="https://www.bombombom.mx/wp-content/uploads/2021/04/ropa-mayoreo-bombombom.mx_.jpg" alt="imagen camisetas" width={500} height={350} />
       <ItemList item="amarillo"/> <CharacterList item="12.99$" /> 
       <ItemList item="verde" /> <CharacterList item="10.20$" />
       <ItemList item="azul" /> <CharacterList item="20.99$" />
       <ItemList item="rojo" /> <CharacterList item="24$" />
     </Main>
     <Footer>
       <Paragraph parrafo="Si quieres tener una buena experiencia ven a nuestra tiendatienda👕📈" />
     </Footer>
    </>
  )
}

export default App
