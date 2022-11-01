import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export const Postreview = () => {
  const [review, setReview] = useState("");
  const { store, actions } = useContext(Context);
  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.postreview(e);
  };

  return (
    <div className="container-fluid vh-75">
      <div className="text-center mt-5">
        <h1> {store.detailedSpace.name}</h1>

        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3" />
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ fontSize: "height: 800px" }}
              ></textarea>
              <label for="floatingTextarea2">
                Tell us your opinion about this place
              </label>
            </div>
          </div>
          <button type="submit" className="btn" onClick={(e) => setReview(e.target.value)}>
            Submit your review
          </button>
          <Link to="/" className="btn">
            Go home
          </Link>
        </form>
      </div>
    </div>
  );
};

//   const handleSubmit = async (e) => {
//     // ESTA FUNCIÓN SE VINCULA A UN (evento) QUE ES UN SUBMIT
//     e.preventDefault(); // AQUÍ APLICAMOS EL e.preventDefault() PARA QUE NO NOS OBSTACULICE EL GUARDAR LA INFO
//     console.log(name, description, image);
//     // console.log(image);
//     actions.postspace(name, description, image); // *I-M-P-O-R-T-A-N-T-E* > AQUÍ, EN LA FUNCIÓN handleSubmit.... LLAMAMOS A LA FUNCIÓN postspace *LA QUE HACE EL FETCH* QUE ESTÁ EN actions (DENTRO DEL FLUX ... Y COMO PARTE DEL CONTEXTO QUE ESTAMOS CONSUMIENDO)... ¿PAAAARA QUÉ?.... PARA ENVIARLE COMO ARGUMENTO LOS VALORES.... Y QUE SUCEDA LA MAGIA!!!
//   };

//   return (
//     <form
//       className="w-50 mx-auto"
//       onSubmit={handleSubmit}
//       // onSubmit={() => actions.postspace(name, description, image)}
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

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>

//     </form>
//   );
// };
