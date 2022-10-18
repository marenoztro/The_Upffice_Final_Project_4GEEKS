import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import { Container, FormGroup, Input } from "reactstrap";

export const Postspace = (props) => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // AQUÍ TAMBIÉN PODEMOS AGREGAR States PARA LOS DEMÁS CAMPOS DEL FORMULARIO/MODEL COMO: amenities, location, category

  //////////////////////////////////////////////////////////////////////////////////
  // AQUÍ HACEMOS LA FUNCIÓN PARA SUBIR LA IMAGEN A cloudinary
  //////////////////////////////////////////////////////////////////////////////////

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    console.log(files[0]);
    data.append("upload_preset", "marenoztro");
    setLoading(true);
    const res = await fetch(
      // "https://api.cloudinary.com/v1_1/marenoztro/theUpffice/upload",
      `https://api.cloudinary.com/v1_1/marenoztro/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log(file.url);
    setImage(file.url); // AQUÍ DEFINIMOS EL ESTADO setImage CON EL ARGUMENTO (file.url) QUE ES LA url DONDE SE SUBIÓ LA IMAGEN
    setLoading(false); // VOLVEMOS A DEJAR EL ESTADO EN FALSE PARA RESETEARLO Y PODER SUBIR LA SIGUIENTE IMAGEN
    console.log(data);
  };
  const handleSubmit = async (e) => {
    // let url = await image;
    // console.log(url);
    // ESTA FUNCIÓN SE VINCULA A UN (evento) QUE ES UN SUBMIT
    e.preventDefault(); // AQUÍ APLICAMOS EL e.preventDefault() PARA QUE NO NOS OBSTACULICE EL GUARDAR LA INFO
    console.log(name, description, image);
    // console.log(image);
    actions.postspace(name, description, image); // *I-M-P-O-R-T-A-N-T-E* > AQUÍ, EN LA FUNCIÓN handleSubmit.... LLAMAMOS A LA FUNCIÓN postspace *LA QUE HACE EL FETCH* QUE ESTÁ EN actions (DENTRO DEL FLUX ... Y COMO PARTE DEL CONTEXTO QUE ESTAMOS CONSUMIENDO)... ¿PAAAARA QUÉ?.... PARA ENVIARLE COMO ARGUMENTO LOS VALORES.... Y QUE SUCEDA LA MAGIA!!!
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // A CONTINUACIÓN VEMOS EL RETURN QUE ES EL JSX QUE NOS MUESTRA LO QUE RENDERIZARÁ
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <form
      className="w-50 mx-auto"
      onSubmit={handleSubmit}
      // onSubmit={() => actions.postspace(name, description, image)}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          placeholder="What's the name of your place?"
          value={name}
          onChange={(e) => setName(e.target.value)} //AQUÍ CREAMOS EL EVENTO onChange de setName
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputDescription" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputDescription"
          placeholder="Please describe your place"
          value={description}
          onChange={(e) => setDescription(e.target.value)} //AQUÍ CREAMOS EL EVENTO onChange de setDescription
        />
      </div>

      <input
        type="file"
        name="file"
        placeholder="Upload your image here!"
        onChange={uploadImage}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

//////////////////////////////////////////////////////////////////////////////////
// OJOOOOOOO  ALTERNATIVA TRABAJADA EN MENTORÍA ===> SI PARECÍA FUNCIONAR
//////////////////////////////////////////////////////////////////////////////////

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

//     console.log(name);
//     console.log(image);
//     console.log(description);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const body = {
//       name: name,
//       description: description,
//       image: image,
//     };
//     actions
//       .postspace(body)
//       .then((resp) => {
//         console.log(resp);
//         // navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <form
//       className="w-50 mx-auto"
//       // onSubmit={() => actions.onSubmit(name, description, image)}
//     >
//       <div className="mb-3">
//         <label htmlFor="exampleInputName" className="form-label">
//           Name
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="exampleInputName"
//           placeholder="What's the name of your place?"
//           value={name}
//           onChange={(e) => setName(e.target.value)} //AQUÍ CREAMOS EL EVENTO onChange de setName
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="exampleInputDescription" className="form-label">
//           Description
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="exampleInputDescription"
//           placeholder="Please describe your place"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)} //AQUÍ CREAMOS EL EVENTO onChange de setDescription
//         />
//       </div>

//       <input
//         type="file"
//         name="file"
//         placeholder="Upload your image here!"
//         onChange={uploadImage}
//       />

//       <button type="submit" className="btn btn-primary" onClick={onSubmit}>
//         Submit
//       </button>
//     </form>
//   );
// };
// export default Postspace;

//   <div>
//     {/* <Container */}
//     {/* style={{
//         textAlign: "center",
//       }}
//     > */}
//     <h1> Subiendo Imagenes </h1>
//     {/* <FormGroup> */}
//     <input
//       type="file"
//       name="file"
//       placeholder="Sube tu imagen aqui!"
//       onChange={uploadImage}
//     />
//     {/* </FormGroup> */}
//     {/* </Container> */}
//   </div>
// );
