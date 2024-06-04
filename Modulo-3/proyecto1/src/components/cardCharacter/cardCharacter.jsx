import "./cardCharacter.css"

export const CardCharacter = ({name, status}) => {
  return (
    <div>
          <h1>{name}: {status}</h1>
        
    </div>
  )
}

