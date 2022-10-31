const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
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
      postedspace: {},
      catalogo: [],
      detailedSpace: {},
      mySpaces: [],
      wishlist: [],
      mySpaces: {},
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
          "https://3000-purple-sawfish-rn2q66p2peu.ws-eu67.gitpod.io/profile",
          {
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

      /////////funcion para traer los detalles de los espacios
      getDetailedSpace: (id) => {
        // argumento se utiliza especificar los datos que se necesitan traer
        fetch(process.env.BACKEND_URL + "/api/detail/" + id)
          .then((response) => response.json()) // transformar el contenido en un json
          .then((data) =>
            setStore({
              detailedSpace: data.results, // result porque esta en la api
            })
          );
      },

      getMySpaces: (id) => {
        // argumento se utiliza especificar los datos que se necesitan traer
        fetch(process.env.BACKEND_URL + "/api/myprofile/myspaces/" + id)
          .then((response) => response.json()) // transformar el contenido en un json
          .then((data) =>
            setStore({
              mySpaces: data.results, // result porque esta en la api
            })
          );
      },

      //////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN onSubmit QUE REALIZA EL FETCH PARA HACER EL POST DEL ESPACIO EN RENTA
      //////////////////////////////////////////////////////////////////////////////////

      postspace: (
        name,
        location,
        space_type,
        description,
        amenities,
        price,
        image
      ) => {
        fetch(process.env.BACKEND_URL + "/api/postspace", {
          // ESTE ES EL LINK DE NUESTRA PLANTILLA BACKEND PARA EL ENDPOINT/RUTA DE login
          method: "POST", // COMO DESDE EL FRONT VAMOS A INSERTAR DATOS... EL MÉTODO ES POST
          body: JSON.stringify({
            //EL CUERPO QUE LE ENVIAMOS EN UN CUERPO JSON Y ES stringify PARA QUE LO PODAMOS ESCRIBIR EN TEXTO Y LUEGO SE GUARDE COMO json
            name: name,
            location: location,
            space_type: space_type,
            description: description,
            amenities: amenities,
            price: price,
            image: image,
          }),
          headers: {
            "Content-Type": "application/json", //EN EL HEADER, QUE DEBEMOS INCLUIR POR RIGOR, ES Content-Type application/json PORQUE ESTAMOS ENVIANDO UN CUERPO JSON EN EL FETCH
          },
        })
          .then((response) => {
            //ENTRA EL PRIMER THEN
            if (response.status === 200) return response.json(); //  Y POR LO TANTO PODEMOS CONVERTIR LA RESPUESTA A UN json
          })
          .then((data) => console.log(data));
      },

      traerCatalogo: () => {
        fetch(process.env.BACKEND_URL + "/api/catalogo")
          .then((response) => response.json())
          .then((data) => setStore({ catalogo: data }));
      },

      // ////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN FETCH PARA TRAER MYSPACES
      // ////////////////////////////////////////////////////////////////////////////////

      getMySpaces: () => {
        // argumento se utiliza especificar los datos que se necesitan traer
        fetch(process.env.BACKEND_URL + "/api/myprofile/myspaces/")
          .then((response) => response.json())
          .then((data) => setStore({ catalogo: data }));
      },

      //////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN FETCH PARA TRAER MYSPACES
      //////////////////////////////////////////////////////////////////////////////////

      getMySpaces: (user_id) => {
        // argumento se utiliza especificar los datos que se necesitan traer
        fetch(process.env.BACKEND_URL + "/api/myprofile/myspaces/" + user_id, {
          //DUDA: ESTE ID sería el de USUARIO o el del ESPACIO RESERVADO???
          method: "GET",
          // headers: {
          //   'Content-Type': 'application/json',
          //   Authorization: 'Bearer' +token
          // }
        })
          .then((response) => response.json()) // transformar el contenido en un json
          .then((data) =>
            setStore({
              mySpaces: data.results, // results porque esta en la api
            })
          );
      },

      ////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN FETCH PARA LAS VISTAS PROTEGIDAS POR MI PERFIL
      ////////////////////////////////////////////////////////////////////////////////
      getProfile: () => {
        let token = localStorage.getItem("token");
        // argumento se utiliza especificar los datos que se necesitan traer
        fetch(process.env.BACKEND_URL + "/api/myprofile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then((response) => {
            return response.json();
          }) // transformar el contenido en un json
          .then((data) => {
            setStore({ perfil: data });
            getActions().getMySpaces(data.id);
          });
      },

      postreview: (message) => {
        fetch(process.env.BACKEND_URL + "/api/postreview", {
          // ESTE ES EL LINK DE NUESTRA PLANTILLA BACKEND PARA EL ENDPOINT/RUTA DE login
          method: "POST", // COMO DESDE EL FRONT VAMOS A INSERTAR DATOS... EL MÉTODO ES POST
          body: JSON.stringify({
            //EL CUERPO QUE LE ENVIAMOS EN UN CUERPO JSON Y ES stringify PARA QUE LO PODAMOS ESCRIBIR EN TEXTO Y LUEGO SE GUARDE COMO json
            message: message,
          }),
          headers: {
            "Content-Type": "application/json", //EN EL HEADER, QUE DEBEMOS INCLUIR POR RIGOR, ES Content-Type application/json PORQUE ESTAMOS ENVIANDO UN CUERPO JSON EN EL FETCH
          },
        })
          .then((response) => {
            //ENTRA EL PRIMER THEN
            if (response.status === 200) return response.json(); //  Y POR LO TANTO PODEMOS CONVERTIR LA RESPUESTA A UN json
          })
          .then((data) => console.log(data));
      },

      //////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN PARA AGREGAR AL WISHLIST
      //////////////////////////////////////////////////////////////////////////////////
      addWishlist: (param) => {
        const store = getStore();
        if (store.favorites.includes(param)) {
          console.log("YA LO AGREGASTE COMO WISHLIST");
        } else {
          setStore({
            favorites: [...store.wishlist, param],
          });
        }
      },

      //////////////////////////////////////////////////////////////////////////////////
      // OJO: AQUÍ HACEMOS LA FUNCIÓN PARA ELIMINAR DEL WISHLIST
      //////////////////////////////////////////////////////////////////////////////////
      deleteWishlist: (itemToDelete) => {
        const store = getStore();
        const newFavorites = store.favorites.filter(
          (item) => item !== itemToDelete
        );
        setStore({
          wishlist: newFavorites,
        });
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
