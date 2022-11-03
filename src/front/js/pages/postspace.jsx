import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
// import { Container, FormGroup, Input } from "reactstrap";

export const Postspace = (props) => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [space_type, setSpace_type] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
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
    // ESTA FUNCIÓN SE VINCULA A UN (evento) QUE ES UN SUBMIT
    e.preventDefault(); // AQUÍ APLICAMOS EL e.preventDefault() PARA QUE NO NOS OBSTACULICE EL GUARDAR LA INFO
    console.log(
      name,
      location,
      space_type,
      description,
      amenities,
      price,
      image
    );
    // console.log(image);
    actions.postspace(
      name,
      location,
      space_type,
      description,
      amenities,
      price,
      image,
      store.perfil.id
    );
    navigate("/catalogo") // *I-M-P-O-R-T-A-N-T-E* > AQUÍ, EN LA FUNCIÓN handleSubmit.... LLAMAMOS A LA FUNCIÓN postspace *LA QUE HACE EL FETCH* QUE ESTÁ EN actions (DENTRO DEL FLUX ... Y COMO PARTE DEL CONTEXTO QUE ESTAMOS CONSUMIENDO)... ¿PAAAARA QUÉ?.... PARA ENVIARLE COMO ARGUMENTO LOS VALORES.... Y QUE SUCEDA LA MAGIA!!!
  };

  console.log(store.perfil)
  useEffect(() => {
    // actions.getMySpaces(params.theid);
    actions.getProfile();
  }, []);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // A CONTINUACIÓN VEMOS EL RETURN QUE ES EL JSX QUE NOS MUESTRA LO QUE RENDERIZARÁ
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <form
        className="w-50 mx-auto vh-75"
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
            onChange={(e) => setName(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setName
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            placeholder="Where is it located?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setLocation
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            placeholder="Is it a House an Apartment or a Room?"
            value={space_type}
            onChange={(e) => setSpace_type(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setSpace_type
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
            onChange={(e) => setDescription(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setDescription
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Amenities
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            placeholder="Does it have a garage? A kitchen? A pool? How many bathrooms? "
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setAmenities
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            placeholder="How much are you willing to charge for a day? (in $)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required //AQUÍ CREAMOS EL EVENTO onChange de setPrice
          />
        </div>

        <input
          type="file"
          name="file"
          placeholder="Upload your image here!"
          onChange={uploadImage}
          required
        />
      </form>
      <div className="text-center mt-3">
        <button type="submit" className="btn-md btn">
          Submit
        </button>
        <Link to="/" className="btn-md btn">
          Back
        </Link>
      </div>
    </>
  );
};
