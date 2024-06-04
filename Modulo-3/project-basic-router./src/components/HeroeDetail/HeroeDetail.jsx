import "./HeroeDetail.css"


export const HeroeDetail = ({heroe}) => {
  return (
    <>
      <h1>name: {heroe.name}</h1>
      <p>alias: {heroe.alias}</p>
      <p>age: {heroe.age}</p>
    </>
  )
}
