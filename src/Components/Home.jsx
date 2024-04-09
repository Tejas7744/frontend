import React from "react";
import { useGetAllProductsQuery } from "../Features/productApi";
import { useDispatch } from 'react-redux';
import { addToCard } from "../Features/cartSlice";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleAddToCard = (product) => {
    dispatch(addToCard(product))
    navigate("/card")
  }
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error Occured...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc} </span>
                  <span className="price">${product.price} </span>
                </div>
                <button className="add-cart" onClick={()=>handleAddToCard(product)}>Add To Card</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
