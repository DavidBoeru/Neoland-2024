import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";


export const ProtectedCheckChildren = ({children}) => {
   const { allUser, user } = useAuth();

   //si el check code de allUser o de user es true navegas a dashboard
   if (allUser?.data?.user?.check == true || user?.check == true) {
     return <Navigate to='/dashboard' />
   }

   //si el user es null o allUser tiene un estring vacio navegas a login
   if (user == null || allUser.data.confirmationCode === '') {
      return <Navigate to='/login' />
   }

    return children;
}
