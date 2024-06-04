import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useResendCodeError = (
  resResend,
  setResResend,
  setUserNotFound
) => {
  /// 404 ---------> resend false
  if (resResend?.data?.resend.toString() == "false") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Error al enviar correo electrónico con tu código 🔴. ¡Por favor, inténtalo de nuevo!",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  /// 200 ---------> resend true

  if (resResend?.data?.resend.toString() == "true") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "success",
      title: "Codigo de confirmacion enviado ✅. comprueba tu email!",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  // 404 ----------> 'User not found'

  if (
    resResend?.response?.status == 404 &&
    resResend?.response?.data.includes("User not found")
  ) {
    setUserNotFound(() => true);
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Error interno del servidor ❎.",
      text: "Usuario no encontrado. ¡Ve al login!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  // 500 ----------> interval server error
  if (resResend?.response?.status == 500) {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor! correo no enviado ❎!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};