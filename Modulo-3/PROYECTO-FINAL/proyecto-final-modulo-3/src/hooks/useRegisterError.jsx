import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useRegisterError = (res, setRegisterOk, setRes) => {
    //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
    //? si la respuesta no esta ok--> res.response.status

    //! ------------------ 200 : todo ok
    if (res?.status == 200) {
        console.log("entro en el if del 200 🎉");
        const dataToString = JSON.stringify(res);
        localStorage.setItem("data", dataToString);
        setRegisterOk(() => true);
        //setAllUser(() => res.data);

        Swal.fire({
        icon: "success",
        title: "Bienvenido a mi pagina 😁",
        showConfirmButton: false,
        timer: 3000,
        });
        
        setRes({});
    }

    //! ------------------- 409: user ya registrado

    if (res?.response?.status === 409) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor , tu email es incorrecto !❎",
        showConfirmButton: false,
        timer: 3000,
        });
        setRes({});
    }
    //! ------------------- La contraseña no esta en el formato correcto
    if (res?.response?.data?.includes("validation failed: password")) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Minimo 8 caracteres, 1 Mayuscula, 1 Minuscula y un caracter especial ❎",
        showConfirmButton: false,
        timer: 3000,
        });
        setRes({});
    }

    //! ------------------- cuando el userName ya existe
    if (
        res?.response?.data?.includes(
        "duplicate key error collection: userProyect.users index: name_1 dup key: { name"
        )
    ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo siento, elige otro nombre. ❎",
        showConfirmButton: false,
        timer: 3000,
        });
        setRes({});
    }

    //! -------------------- 500 : internal server error

    if (res?.response?.status == 500) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error interno del servidor!❎ porfavor, intentalo de nuevo.",
        showConfirmButton: false,
        timer: 3000,
        });
        setRes({});
    }

    //! -------------------- 404: 'error, resend code'
    if (
        res?.response?.status == 404 &&
        res?.response?.data?.confirmationCode?.includes("error, resend code")
    ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registro ok, error al reenviar el código ❎",
        showConfirmButton: false,
        timer: 3000,
        });
        setRes({});
    }
};