import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
export const DetailSpace = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const addReservation = () => {
    console.log(store.perfil.id, store.detailedSpace.id)
    actions.postMySpace(store.perfil.id, store.detailedSpace.id)
    navigate("/myprofile/myspaces")
  }
  useEffect(() => {
    actions.getDetailedSpace(params.theid);
    actions.getReview(params.theid);
    actions.getProfile();
    console.log(store.detailedSpace.name);
    console.log(store.detailedSpace.description);
    console.log(store.detailedSpace);

  }, []);
  console.log(store.reviews)

  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item d-flex rounded"
            style={{ margin: "20px 12% 20px 12%", background: "#DCDCDC" }}
          >
            <h1 className="display-5">
              <strong>{store.detailedSpace.name}</strong> @{" "}
              {store.detailedSpace.location}
            </h1>
            <p style={{ padding: "10px 10px 10px 10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </p>
          </li>
          <div
            className="container rounded w-100"
            style={{ marginTop: "1rem", background: "#A425E8" }}
          >
            <img
              src={store.detailedSpace.images}
              className="w-100"
              alt="..."
              style={{ padding: "35px 35px 35px 35px" }}
            />
          </div>
          <li
            className="list-group-item rounded "
            style={{ background: "#DCDCDC", margin: "10px 12% 10px 12%" }}
          >
            <h3 className="title-text display-6">
              <u>
                <strong>Description</strong>
              </u>
            </h3>
            {store.detailedSpace.description}
          </li>
          {console.log(store.detailedSpace.description)}
          <li
            className="list-group-item border border-dark rounded"
            style={{ margin: "10px 12% 10px 12%" }}
          >
            <h3 className="title-text display-6">
              <u>
                <strong>Price</strong>
              </u>
            </h3>
            <p className="body-text">USD per hour: ${store.detailedSpace.price}</p>
          </li>
          <li
            className="list-group-item rounded"
            style={{ background: "#DCDCDC", margin: "10px 12% 10px 12%" }}
          >
            <h3 className="title-text display-6">
              <u>
                <strong>Amenidades</strong>
              </u>
            </h3>
            <ul>
              <li className="body-text">{store.detailedSpace.amenities}</li>
            </ul>
          </li>
          <li
            className="list-group-item rounded border border-dark"
            style={{ margin: "10px 12% 10px 12%" }}
          >
            <h3 className="title-text display-6">
              <u>
                <strong>Space Type</strong>
              </u>
            </h3>
            <p className="body-text">{store.detailedSpace.space_type}</p>
          </li>
          <li
            className="list-group-item rounded"
            style={{ background: "#DCDCDC", margin: "10px 12% 10px 12%" }}
          >
            <h3 className="title-text display-6">
              <u>
                <strong>Reviews</strong>
              </u>
            </h3>
            <ul className="body-text">
              {store.reviews.length > 0 ? store.reviews.map((item) => <li>{item.message}</li>) : <p>There's no reviews yet</p>}
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Link to="/catalogo" className="btn">
          Go back
        </Link>
        <button className="btn btn-md" onClick={addReservation}>
          Save this space!
        </button>
        <Link to={"/postreview/" + params.theid} className="btn">
          Post a Review
        </Link>
      </div>
    </>
  );
};