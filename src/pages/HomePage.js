import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { fetchProducts } from "../store/products/actions";
import { selectLoading, selectProducts } from "../store/products/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  if (loading) return <div>LOADING</div>;

  return (
    <div>
      <SearchBar />
      {products.length !== 0 &&
        products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating}
            mainImage={product.mainImage}
            category={product.category.title}
          />
        ))}
    </div>
  );
}
