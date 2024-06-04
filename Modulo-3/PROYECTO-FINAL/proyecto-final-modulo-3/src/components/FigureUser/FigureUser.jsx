import "./FigureUser.css"

export const FigureUser = (user) => {
  return (
    <figure>
        <img className="imagen" src={user.user.image} alt={'user image'} />
        <h3> Email: {user.user.email} </h3>
    </figure>
  )
}
