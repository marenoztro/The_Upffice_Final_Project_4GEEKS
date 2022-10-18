import React, { useState } from "react";
// import { Container, FormGroup, Input } from "reactstrap";

const uploadRentImages = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData(e.target);
    data.append("file", files[0]);
    data.append("upload preset", "theUpffice");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/marenoztro/theupffice/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.Log(res);
    setImage(file.secureurl);
    setLoading(false);
  };
};

////////////////////////////////////////////////////////////////////////////////
//AQUÍ MOSTRAMOS EL FORM DONDE SE SUBIRÁ TODA LA INFO DEL ESPACIO DE ALQUILER
// INCLUYENDO LAS IMÁGENES
////////////////////////////////////////////////////////////////////////////////

return (
  <div>
    <form onSubmit={uploadImage}>
      <div classNameName="mb-3">
        <label for="formFile" classNameName="form-label">
          {" "}
          Default file input example{" "}
        </label>{" "}
        <input className="form-control" type="file" id="formFile" name="file" />
        <label for="name" classNameName="form-label">
          {" "}
          Default file input example{" "}
        </label>{" "}
        <input className="form-control" type="text" id="name" name="name" />
        <label for="address" classNameName="form-label">
          {" "}
          Default file input example{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="address"
          name="address"
        />
        <label for="description" classNameName="form-label">
          {" "}
          Default file input example{" "}
        </label>{" "}
        <input
          className="form-control"
          type="file"
          id="description"
          name="description"
        />
      </div>{" "}
      <button type="submit"> SEND </button>{" "}
    </form>{" "}
  </div>
);

export default uploadRentImages;
