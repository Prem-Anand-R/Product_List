import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import SearchComponent from "./Navbar";
import Filters from "./Filters";

const Body=styled.div`
    background-color:#f1efef;
`;

const Card = styled.div`
  width: 300px;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 20px;
  height: 400px !important;

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    right: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(5deg);
    transition: all 0.1s ease-in;
  }

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 50%;
    height: 10px;
    bottom: 15px;
    left: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transform: rotate(-5deg);
    transition: all 0.1s ease-in;
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
  }

  &:hover::before {
    transform: rotate(-8deg);
  }

  &:hover::after {
    transform: rotate(8deg);
  }
`;

const CardImage=styled.div`
   position: relative;
   width: 100%;
   height: 175px;
   overflow: hidden;
`;

const CardSpan=styled.span`
   cursor: pointer;
   font-size: 11px;
   position: absolute;
   background-color: white;
   top: 10px;
   left: 10px;
   padding: 3px 7px;
   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
   transition: transform 0.1s ease-in;
   user-select: none;

   &:hover {
   transform: translateX(5px);
 }
`;

const CardInt=styled.div`
    padding: 20px 0 0 0;
`;

const CardTitle=styled.p`
   font-weight: bold;
   font-size: 1.2rem;
   font-family: Arial, Helvetica, sans-serif;
   margin-bottom: 10px;
`;

const effect_one = keyframes`
  0% {
    transform: translateX(-99%);
  }

  25% {
    transform: translateX(-90%);
  }

  50% {
    transform: translateX(-80%);
  }

  75% {
    transform: translateX(-95%);
  }

  100% {
    transform: translateX(-99%);
  }
`;

const effect_two = keyframes`
  to {
    transform: translateX(-1%);
  }

  from {
    transform: translateX(-99%);
  }
`;

const CardButton = styled.button`
  cursor: pointer;
  margin: 20px 0 0 0;
  padding: 7px 20px;
  width: 100%;
  background-color: rgb(216, 255, 234);
  border: none;
  color: black;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
  transition: box-shadow 0.1s ease-in;
  user-select: none;

  &:active {
    box-shadow: 0px 0px 15px rgba(0, 119, 255, 0.5);
  }

  &:hover::before {
    animation: ${effect_two} 0.4s 1;
  }

  &::before {
    content: 'Click to More Details';
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #007c0d;
    background: linear-gradient(315deg, #68ffc0, #007c0d);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-99%);
    z-index: 1;
    animation: ${effect_one} 10s infinite;
  }

  &:hover::before {
    transform: translateX(0%);
  }
`;


const ProductList = () => {
    const [sortingOrder, setSortingOrder] = useState("asc");
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [total, setTotal] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const skip = (currentPage - 1) * limit;
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    const getProducts = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setProducts(data.products);
            setTotal(data.total);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts(url, skip, limit);
    }, [currentPage, limit, skip]);

    const handleCategoryFilter = (category, checked) => {
        if (checked) {
            const categoryurl = `https://dummyjson.com/products/category/${category}`;
            getProducts(categoryurl);
        } else {
            getProducts(url);
        }
    };

    const handleSearch = async (query) => {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${query}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setProducts(data.products);
            setTotal(data.total);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSorting = (event) => {
        setSortingOrder(event.target.value);
        const sortedProducts = [...products].sort((a, b) => {
            if (event.target.value === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setProducts(sortedProducts);
    };

    return (
        <Body>
            <SearchComponent handleSearch={handleSearch} />
            <Filters handleCategoryFilter={handleCategoryFilter} sorting={handleSorting} />
            <div className="row">
                {products.map((product) => (
                    <div className="col mx-2 my-3">
                    <Card>                    
                            <CardImage>
                            <img src={product.images[0]} width='100%' />
                                <CardSpan>{product.category}</CardSpan>
                            </CardImage>
                            <CardInt>
                            <CardTitle>{product.title}</CardTitle>
                            <CardTitle>Rs.{product.price*80}</CardTitle>
                                <p>Brand: {product.brand}</p>
                                <Link to={`/${product.id}`}>
                                <CardButton>Show More Details</CardButton>
                                </Link>
                            </CardInt>                           
                        </Card>
                    </div>
                ))}
            </div>

            <Pagination
                total={total}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Body>
    );
};

export default ProductList;
