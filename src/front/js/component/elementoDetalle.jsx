import React, { Component } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
export const DetailSpace = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://wearecloudworks.com/wp-content/uploads/2022/01/beneficios-coworking.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://www.arquitecturaydiseno.es/medio/2017/05/22/moreysmith-deskopolitan-paris-table_812x550_8e1e06a9.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://actiucdn.net/uploads/images/actualidad/descripciones/los-coworkings-en-la-era-de-la-flexibilidad-_782_651.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.name}</li>
          <li className="list-group-item">
            <h3>Ubicación</h3> {item.ubicacion} Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab, commodi magni quibusdam possimus
            porro, tempore ratione voluptatem rem aliquam nam fuga facere atque
            in iusto quod excepturi. Ad, excepturi molestiae.
          </li>
          <li className="list-group-item">
            <h3>Precio: $100</h3>
          </li>
          <li className="list-group-item">
            <h3>Descripción</h3> {item.description}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            architecto omnis minima fugit quis doloremque quas nihil dolore ad
            deserunt nisi dolores corrupti enim officiis laborum sequi tempora,
            quia odit!
          </li>
          <li className="list-group-item">
            <h3>Amenidades</h3>
            <ul>
              <li>
                {item.amenidades} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
              </li>
            </ul>
            <ul>
              <li>Voluptas necessitatibus, dolorum</li>
            </ul>
            <ul>
              <li>
                Tempora facilis error quam id, consequuntur et fugit tempore
                nulla accusantium quidem praesentium ab eveniet excepturi harum
                qui sunt.
              </li>
            </ul>
          </li>
          <li className="list-group-item">
            <h3>Reviews</h3> {item.reviews}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            saepe iste debitis error ratione quis soluta. Voluptate eos aliquam
            dicta recusandae quidem necessitatibus animi cupiditate quae quas!
            Neque, omnis eaque!
          </li>
          <li className="list-group-item"></li>
        </ul>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </>
  );
};
