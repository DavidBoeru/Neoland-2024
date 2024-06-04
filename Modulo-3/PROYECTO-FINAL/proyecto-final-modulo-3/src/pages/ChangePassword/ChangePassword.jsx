import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { changePasswordUserToken } from "../../services/user.service";
import { useChangePasswordError } from "../../hooks";
import "./ChangePassword.css"

export const ChangePassword = () => {
  const { setUser } = useAuth();
  const { handleSubmit, register } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  //! -----------------1) LA FUNCIOON QUE GESTIONA EL FORMULARIO

  const formSubmit = (formData) => {
    const { password, newPassword, confirmPassword } = formData;

    if (newPassword == confirmPassword) {
      Swal.fire({
        title: "¿Estás seguro de que quieres cambiar tu contraseña?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setSend(true);
          setRes(await changePasswordUserToken({ password, newPassword }));
          setSend(false);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: " Las nuevas contraseñas no coinciden❌.",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  //! ------------------2) GESTION DE LA RESPUESTA POR EL CUSTOMHOOK Y AYUDADO POR EL USEEFFECT

  useEffect(() => {
    console.log(res);
    useChangePasswordError(res, setRes, setUser);
  }, [res]);

  //! no tenemos condicionales de navegacion porque cuando me desloguee el componente protected me llevara al login

  return (
    <>
      <div className="form-wrap">
        <h1>Cambia tu contraseña 🌀</h1>
        <p>Porfavor, introduce la antigua contraseña y la nueva</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Contraseña antigua
            </label>
          </div>
          <div className="newPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="false"
              {...register("newPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Contraseña nueva
            </label>
          </div>
          <div className="confirmPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="false"
              {...register("confirmPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Confirmar contraseña
            </label>
          </div>
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Cambiar contraseña
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
