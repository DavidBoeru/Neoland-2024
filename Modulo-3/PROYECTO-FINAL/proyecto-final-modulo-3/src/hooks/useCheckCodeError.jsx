import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useCheckCodeError = (
  res,
  setRes,
  setOkCheck,
  setOkDeleteUser,
  userlogin,
  setUserNotFound
) => {
  // ---------------------> 500
  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => ({}));
  }

  // ------------------------- 200 test todo correcto

  if (res?.data?.testCheckOk?.toString() == "true") {
    /// si viene del login modificamos el estado de user del contexto para poner el check en true
    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseUser = JSON.parse(currentUser);
      const customUser = {
        ...parseUser,
        check: true,
      };

      const stringUser = JSON.stringify(customUser);
      // llamamos a la funcion de login para resetear que el check esta a true
      userlogin(stringUser);
    }
    setOkCheck(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "success",
      title: "Ok, codigo correcto ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // -------------- 200 test = false

  if (res?.data?.testCheckOk?.toString() == "false") {
    // el codigo si era correcto pero el actualizar en el back el check no se ha producido correctamente
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Error interno del servidor ❎.",
      text: "No eliminar usuario. Por favor, inténtalo de nuevo.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // -------------- 200: delete: 'ok delete user'
  if (res?.data?.delete?.includes("ok delete user")) {
    // esto le enviamos al register porque le henmos borrrado el usuario
    setOkDeleteUser(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "codigo incorrecto ❎.",
      text: "Su usuario está eliminado. Regístrese nuevamente, por favor.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // ------------- 200: delete: 'error delete user'
  if (res?.data?.delete?.includes("error delete user")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Codigo incorrecto ❎.",
      text: "No eliminar usuario. Por favor, inténtalo de nuevo.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // ------------- userNoFound ---> 404
  // porque el usuario ha recargado la página y no encuentra el user --> tiene que ir al login

  if (res?.response?.status == 404) {
    setUserNotFound(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Error interno del servidor ❎.",
      text: "Necesitas verificar tu codigo 🥺",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};