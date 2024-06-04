import "./Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { loginUserService } from "../../services/user.service";
import { useLoginError } from "../../hooks";


export const Login = () => {
   //* --------------------- ESTADOS --------------------------------------
   const { register, handleSubmit } = useForm();
   const [res, setRes] = useState({});
   const [send, setSend] = useState(false);
   const [loginOk, setLoginOk] = useState(false);
   const { login, setUser } = useAuth();
 

   //! ---------------- FUNCION QUE GESTIONA LA DATA DEL FORMULARIO ----------------------

   const formSubmit = async(formData) => {
     setSend(true);
     setRes(await loginUserService(formData));
     setSend(false);
   };

   //! -------- useEffect asociados a la respuesta para asociar los errores --------------
    //* 1) gestiona errores de la res
   useEffect(() => {
        console.log('login😘', res);
        useLoginError(res, setRes, login, setLoginOk)
   }, [res]);

    //* 2)  checkea que un usuario este logueado y verificado
    //* puede estar logueado sin estar chekeado, pero no lo dejamos entrar en ninguna pagina
    //* en la que no este autorizado como usuario verificado.
    //*   ---> este useEffect desloguea al usuario si ve que no esta chekeado
   useEffect(() => {
      setUser( () => null);
      localStorage.removeItem('user');
   }, []);

   //! --------------Los condicionales que gestionan los estados de navegacion -----------

   if (loginOk) {
       if (res.data.user.check == false) {
            return <Navigate to='/verifyCode' />
       } else {
            return <Navigate to='/dashboard' />
       }
   }

  return (
    <>
            <div className="form-wrap">
            <h1>Iniciar sesión</h1>
            <p>Estamos felices de verte de nuevo 🥷🏼</p>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="email_container form-group">
                <input
                    className="input_user"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="false"
                    {...register("email", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                    email
                </label>
    
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
                    contraseña
                    </label>
                </div>
                </div>
    
                <div className="btn_container">
                <button
                    className="btn"
                    type="submit"
                    disabled={send}
                    style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                >
                    LOGIN
                </button>
                </div>
                <p className="bottom-text">
                <small> 
                 ¿Has olvidado la contraseña?
                    <Link to="/forgotpassword" className="anchorCustom">
                    Cambiar la contraseña
                    </Link>
                </small>
                </p>
            </form>
            </div>
            <div className="footerForm">
            <p className="parrafoLogin">
               ¿No estás registrado? <Link to="/register">Registrate aquí</Link>
            </p>
            </div>
        </>
  )
}
