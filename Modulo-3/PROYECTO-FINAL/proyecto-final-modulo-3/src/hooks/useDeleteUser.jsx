import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { deleteUserService } from "../services/user.service";
import { Navigate } from "react-router-dom";

export const useDeleteUser = (setUser, setDeleteUser) => {
  Swal.fire({
    title: "Are you sure you want to delete your profile?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(73, 193, 162)",
    cancelButtonColor: "#d33",
    confirmButtonText: "YES",
  }).then(async (result) => {
    console.log("result", result);

    if (result.isConfirmed) {
      const res = await deleteUserService();

      switch (res.status) {
        case 200:
          Swal.fire({
            icon: "success",
            title: "Usuario eliminado",
            text: "Nos vemos pronto",
            showConfirmButton: false,
            timer: 3000,
          });

          setUser(() => null);
          setDeleteUser(() => true);
          localStorage.removeItem("user");

          break;

        default:
          Swal.fire({
            icon: "error",
            title: "usuario NO eliminado ❎",
            text: "Porfavor, intentalo de nuevonuevo🙏🏼",
            showConfirmButton: false,
            timer: 3000,
          });

          break;
      }
    }
  });
};