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
              :estrella::estrella::estrella::estrella:
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
            <h3 className="display-6">
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
            <h3 className="display-6">
              {" "}
              <u>
                <strong>Price</strong>{" "}
              </u>
            </h3>
            <p>USD ${store.detailedSpace.price}</p>
          </li>
          <li
            className="list-group-item rounded"
            style={{ background: "#DCDCDC", margin: "10px 12% 10px 12%" }}
          >
            <h3 className="display-6">
              <u>
                <strong>Amenidades</strong>
              </u>
            </h3>
            <ul>
              <li>{store.detailedSpace.amenities}</li>
            </ul>
          </li>
          <li
            className="list-group-item rounded border border-dark"
            style={{ margin: "10px 12% 10px 12%" }}
          >
            <h3 className="display-6">
              <u>
                <strong>Space Type</strong>
              </u>
            </h3>
            <p>{store.detailedSpace.space_type}</p>
          </li>
          <li
            className="list-group-item rounded"
            style={{ background: "#DCDCDC", margin: "10px 12% 10px 12%" }}
          >
            <h3 className="display-6">
              <u>
                <strong>Reviews</strong>
              </u>
            </h3>
            <ul>
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