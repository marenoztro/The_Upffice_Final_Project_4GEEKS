const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            auth: false,
            perfil: {},
            postedspace: {}
        },
        actions: {

            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                                                                	fetch().then().then(data => setStore({ "foo": data.bar }))
                                                                */
            },
            login: (email, password) => {
                /**
                                                                	fetch().then().then(data => setStore({ "foo": data.bar }))
                                                                */
                fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    // .then((data) => console.log(data))
                    // .catch((error) => console.log(error));
                    .then((data) => localStorage.setItem("token", data.access_token));
            },
            logout: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false,
                });
            },
            getProfile: () => {
                let token = localStorage.getItem("token");
                fetch(
                        "https://3000-purple-sawfish-rn2q66p2peu.ws-eu67.gitpod.io/profile", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    )
                    .then((response) => {
                        // if (response.status === 200) {
                        //     setStore({
                        //         auth: true
                        //     })
                        // }
                        return response.json();
                    })
                    .then((data) =>
                        setStore({
                            perfil: data,
                        })
                    );
                // .then((data) => localStorage.setItem("token", data.access_token))
            },





            //////////////////////////////////////////////////////////////////////////////////
            // OJO: AQUÍ HACEMOS LA FUNCIÓN onSubmit QUE REALIZA EL FETCH PARA HACER EL POST DEL ESPACIO EN RENTA
            //////////////////////////////////////////////////////////////////////////////////

            postspace: (name, description, image) => {

                fetch(process.env.BACKEND_URL + "/api/postspace", { // ESTE ES EL LINK DE NUESTRA PLANTILLA BACKEND PARA EL ENDPOINT/RUTA DE login 
                        method: "POST", // COMO DESDE EL FRONT VAMOS A INSERTAR DATOS... EL MÉTODO ES POST
                        body: JSON.stringify({ //EL CUERPO QUE LE ENVIAMOS EN UN CUERPO JSON Y ES stringify PARA QUE LO PODAMOS ESCRIBIR EN TEXTO Y LUEGO SE GUARDE COMO json 
                            name: name,
                            description: description,
                            image: image,
                        }),
                        headers: {
                            'Content-Type': 'application/json' //EN EL HEADER, QUE DEBEMOS INCLUIR POR RIGOR, ES Content-Type application/json PORQUE ESTAMOS ENVIANDO UN CUERPO JSON EN EL FETCH
                        }
                    })
                    .then((response) => { //ENTRA EL PRIMER THEN
                        if (response.status === 200)
                            return response.json() //  Y POR LO TANTO PODEMOS CONVERTIR LA RESPUESTA A UN json
                    })
                    .then((data) => console.log(data))
            },



            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;