import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Myspaces = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState(null);

  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    if (currentUser !== null) {
      console.log("Success!", `${currentUser.get("id")} is the current user!`);
    }
    return currentUser;
  };

  // let user = store.catalogo;
  // let results = [];
  // let user_id=
  // let spaces_id=

  // if (!search) {
  //   results = user;
  // } else {
  //   results = user.filter(
  //     (dato) =>
  //       dato.name.toLowerCase().includes(search.toLowerCase()) ||
  //       dato.description.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

  // const handleSearch = (e) => {
  //   console.log("Ejecutando");
  //   setSearch(e.target.value);
  //   console.log(search);
  //   console.log(results);
  // };

  return (
    <div style={{ marginBlockStart: "70 px" }}>
      <h1 className="title-text p-2 ml-5">My Profile</h1>

      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col">
          <div onclick={getCurrentUser} className="btn-md btn">
            GET CURRENT USER
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div className="container-fluid catalogo">
//       <div>
//         <div className="main position-absolute top-40 start-50 translate-middle-x">
//           <h1 className="title-text">Find the best spaces</h1>

// )
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="row row-cols-3 mt-20 container-fluid">
//         {results.map((item, i) => {
//           return (
//             <ElementoCatalogo
//               name={item.name}
//               description={item.description}
//               images={item.images}
//               key={item.id}
//               id={item.id}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
