import React from 'react';
import FiltersDatas from './FiltersDatas';
import styled from 'styled-components';

const Select = styled.select`
  border-radius: 15px;
   margin-top: 2px;
   border: 1px solid rgb(109, 101, 101);
   padding: 5px;
`;

export default function Filters({ handleCategoryFilter, sorting }) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="btn text-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        Filter
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between " id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sell</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Best Sellers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Today's Deals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Mobiles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Customer Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Electronics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >New Products</a>
                            </li>
                        </ul>
                        <div className='d-flex '>
                            <div className='mx-3 mt-2'>
                                <h6 className='text-dark'>Sort by Price :</h6>
                            </div>

                            <Select onChange={sorting}>
                                <option value={"asc"}>Low to High</option>
                                <option value="desc"> High to Low</option>
                            </Select>

                        </div>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Products Categories:</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className='mx-4' />
                <div class="offcanvas-body">
                    <div>
                        <FiltersDatas data={handleCategoryFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}
