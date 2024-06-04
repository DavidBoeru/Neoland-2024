
import './App.css'
import { Blog } from './Blog/Blog'
import { Image } from './components/Image/Image'
import { Paragraph } from './components/Paragraph/Paragraph'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'

function App() {


  return (
    <>
      <Title text="este es el titulo" />
      <SubTitle subtitulo="este es el subtitulo" />
      <Image src="https://i0.wp.com/architecnologia.es/wp-content/uploads/2019/08/c-lenguaje-programacion.jpg?resize=800%2C445&ssl=1" alt="imagen programacion" width={500} height={300}  />
      <Paragraph parrafo="este es el parrafo de mi pagina" />
      <Blog />
    </>
  )
}

export default App
