import React, { useState } from 'react'
import styled from 'styled-components';


const Nav = styled.nav`
   background-color: #333;
    color: #fff;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Forms = styled.form`
   display: flex;
    align-items: center;
`;

const Buttons = styled.button`
    height: 30px;
    padding: 0 10px;
    background-color: #555;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const Input=styled.input`
    height: 30px;
    padding: 5px;
    border: none;
`;
export default function Navbar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };
  return (
    <>
      <Nav>
        <h4>Product List</h4>
        <Forms>          
          <Input type='text' placeholder="Search" value={searchQuery} onChange={handleInputChange} />          
            <Buttons  onClick={handleSearchClick}>
              Search
            </Buttons>
        </Forms>
      </Nav>
    </>
  )
}
