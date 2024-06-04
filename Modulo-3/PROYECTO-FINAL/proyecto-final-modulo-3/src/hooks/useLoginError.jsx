import Swal from 'sweetalert2'
export const useLoginError = (res, setRes, userLogin, setLoginOk) => {
  //* el parámetro userLogin hace referencia a la función login que tenemos en el contexto
  // cuando en la page Login llaméis, en el useEffect, a este custom hook de errores teneis que poner login, que es la función
  
  //! -----------------200

  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      _id: res.data.user._id,
    };

    const stringUser = JSON.stringify(dataCustom);
    userLogin(stringUser);
    setLoginOk(() => true);

    Swal.fire({
      icon: "success",
      title: "Bienvenido a mi pagina👋🏼",
      text: "Login correcto ✅",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //! ----------------- 404: 'User no register'

  if (res?.response?.data?.includes("User no register")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no registrado ❎",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //!------------------ 404: 'password dont match'

  if (res?.response?.data?.includes("password dont match")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La contraseña no coincide ❎",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //! ----------------- 500
  if (res?.response?.status == 500) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor ❎!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};