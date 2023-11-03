import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import styled from 'styled-components';


const Body=styled.body`
background:#f1efef;
`;
const CardProduct=styled.div`
   width: 652px;
   height: 550px;
   background: white;
   border-radius: 30px;
   box-shadow: 15px 15px 30px #bebebe,
              -15px -15px 30px #ffffff;
   transition: 0.2s ease-in-out;

   &:hover {
   cursor: pointer;
   box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
 }
`;

const CardImage=styled.div`
   border-top-left-radius: 30px;
   border-top-right-radius: 30px; 
   `;

const Text=styled.div`
   margin: 20px;
   display: flex;
   flex-direction: column;
   align-items: space-around;
`;

const ProductInfo = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
            .catch((error) => console.error("Error fetching product details:", error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
       <body>
       <Navbar/>
       <div className='mx-5 my-2  '>     
       <h4>{product.title}</h4>
       <hr/>
       </div>
         <div className='d-flex justify-content-center mt-3'>
         <div className='card col-6 h-25 w-25'>
            <div className='card-body p-0 m-0'>
            <CardImage className="mt-3 mx-5">
                    <img src={product.images[0]} alt={product.title}  className='img-fluid' />
                </CardImage>
            </div>
            <div className='card-footer border-0 bg-transparent p-0 m-0'>
            <Text>
                    <h5 className='text-center'>{product.title}</h5>
                    <p className='fw-bold text-success mb-1 fs-5 '>Price: ${product.price * 80} </p>
                    <h6> {product.description} </h6>
                    <ul className='d-flex justify-content-between  p-0 m-0 flex-wrap'>
                        <li className='nav-link'>Brand: {product.brand} </li>&nbsp;&nbsp;
                        <li className='nav-link'>Qty: {product.stock}</li>&nbsp;&nbsp;
                        <li className='nav-link'>Rating:⭐⭐⭐⭐</li>
                    </ul>
                </Text>
            </div>

         </div>
        </div>
       </body>
    )
}

export default ProductInfo
