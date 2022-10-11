import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext";

export const DetailView = () => {
  const { store, actions } = useContext(Context); // traemos el store y actions del flux
  const params = useParams();
  //  useEffect(() => {
  //     actions.getCharactersId(params.id)
  //   }, [])

  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/fotos-premium/vista-perspectiva-espaciosa-oficina-coworking-iluminada-sol-diseno-interiores-ecologicos-vista-ciudad-grandes-ventanales-piso-madera-decoracion-paredes-lugares-trabajo-acogedores-computadoras-modernas-representacion-3d_670147-1108.jpg?w=996"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.pinimg.com/736x/4a/0b/59/4a0b59ec7593451e5ab217b2e072dd2b.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets-delawarebusinesstimes-com.s3-accelerate.amazonaws.com/2022/08/cowork-8-copy-1024x616.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Ubicación: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ab, commodi magni quibusdam possimus porro, tempore ratione
            voluptatem rem aliquam nam fuga facere atque in iusto quod
            excepturi. Ad, excepturi molestiae.
          </li>
          <li class="list-group-item">Precio: $100 </li>
          <li class="list-group-item">
            Descripción: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Harum, architecto omnis minima fugit quis doloremque quas
            nihil dolore ad deserunt nisi dolores corrupti enim officiis laborum
            sequi tempora, quia odit!
          </li>
          <li class="list-group-item">
            Amenidades:
            <ul>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ul>
            <ul>Voluptas necessitatibus, dolorum</ul>
            <ul>
              tempora facilis error quam id, consequuntur et fugit tempore nulla
              accusantium quidem praesentium ab eveniet excepturi harum qui
              sunt.
            </ul>
          </li>
          <li class="list-group-item">
            Reviews: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Libero saepe iste debitis error ratione quis soluta. Voluptate eos
            aliquam dicta recusandae quidem necessitatibus animi cupiditate quae
            quas! Neque, omnis eaque!
          </li>
          <li class="list-group-item"></li>
        </ul>
      </div>
      <div class="text-center">
        <Link to="/" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </>
  );
};
