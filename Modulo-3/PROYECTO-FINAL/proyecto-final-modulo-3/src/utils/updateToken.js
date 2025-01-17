
//* hacemos la funcion updateToken() para que se actualice el token
//* en el localstorage cada vez que cambie el usuario 

//* 1) cogemos el user del localstorage con el metodo getItem
//* 2) comprobamos si hay usuario 
//* 3) si hay usuario parseo el usuario entero
//* 4) devuelvo el token del usuario que esta en ese momento en el localStorage

export const updateToken = () => {
 
    const user = localStorage.getItem("user");
    if (user) {
        const parseUser = JSON.parse(user);
        return parseUser.token;
    }

}
