import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext.jsx";
import { DetailSpace } from "../component/elementoDetalle.jsx";

export const DetailView = () => {
  const { store, actions } = useContext(Context); // traemos el store y actions del flux
  const params = useParams();
  useEffect(() => {
    actions.getDetailedSpace(params.theid);
  }, []);
  return (
    <>
      {store.detailedSpace.map((item, i) => {
        return (
          <DetailSpace
            name={item.name}
            description={item.description}
            images={item.images}
            key={item.id}
            // amenities={item.amenities}
            // price={item.price}
          />
        );
      })}
    </>
  );
};
