import { Image } from "../components/Image/Image"
import { Paragraph } from "../components/Paragraph/Paragraph"
import { SubTitle } from "../components/SubTitle/SubTitle"
import { Title } from "../components/Title/Title"



export const Blog = () => {
  return (
    <div>
      <Title text="texto de mi pequeño blog" />
      <SubTitle subtitulo="mi subtitulo del bloggg" />
      <Image src="https://www.ycoinbound.com/hubfs/blog.jpg" alt="imagen blog" with={400} weight={250}  />
      <Paragraph parrafo="parrafo de mi pequeño blog" />
    </div>
  )
}

