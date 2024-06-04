
import { charactersMock } from "../../Data/charactersMock"
import { CardCharacter } from "../cardCharacter/cardCharacter";
import "./Gallery.css"


export const Gallery = () => {

    const data = charactersMock;

  return (
    <div id="containerGallery" >
        {data.map((item) => (
           <CardCharacter name={item.name} status={item.status} key={item.id} />
        ))}
    </div>
  )
}

