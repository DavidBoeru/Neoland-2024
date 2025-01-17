import { dataRicky } from "../../data/ricky.data";
import { CardCharacter } from "../CardCharacter/CardCharacter";
import "./Gallery.css";

export const Gallery = () => {

    const data = dataRicky;

  return (
    <>
    <div id="container-gallery" >
          {data.results.map((item) => (
            <CardCharacter  image ={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} key={item.id} />
          ))}
    </div>
    </>
  )
}
