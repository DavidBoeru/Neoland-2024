import { NavProfile } from '../../components'
import './Profile.css'
import { Outlet } from "react-router-dom"

export const Profile = () => {
  return (
    <>
       <NavProfile />
        <Outlet/>
    </>
  )
}
