import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetails } from "../store/products/actions";
import { selectProduct } from "../store/products/selectors";

export default function DetailsPage() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {!product ? (
        "Loading"
      ) : (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product?.mainImage} />
          {/* <h3>Category: {product?.category}</h3> */}
          <h4>{product.description}</h4>
          <h3>Rating: {product.rating} ⭐️</h3>
          <h3>Price: {product.price} €</h3>
        </div>
      )}
      <Link to="/products">Back</Link>
    </div>
  );
}
