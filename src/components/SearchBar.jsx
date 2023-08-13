import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input type="text" placeholder="Search..." onChange={handleChange} />
  );
};

const ComponentList = ({ components, searchQuery }) => {
  if (searchQuery === '') return null;
  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredComponents.map((component) => (
        <li key={component.id}>{component.name}</li>
      ))}
    </ul>
  );
};

export const SearchBar = () => {
  const initialComponents = [
    
        {
          "id": 1,
          "name": "Camera",
          "category": "electronics",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/camera.jpg",
          "price": "1",
          "rating": 4,
          "stock": 10
        },
        {
          "id": 2,
          "name": "Drone",
          "category": "electronics",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/drone.jpg",
          "price": "2",
          "rating": 5,
          "stock": 6
        },
        {
          "id": 3,
          "name": "Headset",
          "category": "electronics",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/headset.jpg",
          "price": "0.25",
          "rating": 2,
          "stock": 24
        },
        {
          "id": 4,
          "name": "Shoes",
          "category": "clothing",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg",
          "price": "0.25",
          "rating": 5,
          "stock": 3
        },
        {
          "id": 5,
          "name": "Sunglasses",
          "category": "clothing",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/sunglasses.jpg",
          "price": "0.10",
          "rating": 4,
          "stock": 12
        },
        {
          "id": 6,
          "name": "Watch",
          "category": "clothing",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/watch.jpg",
          "price": "1.25",
          "rating": 4,
          "stock": 0
        },
        {
          "id": 7,
          "name": "Puzzle Cube",
          "category": "toys",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/cube.jpg",
          "price": "0.05",
          "rating": 4,
          "stock": 15
        },
        {
          "id": 8,
          "name": "Train Set",
          "category": "toys",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/train.jpg",
          "price": "0.20",
          "rating": 4,
          "stock": 0
        },
        {
          "id": 9,
          "name": "Robot Set",
          "category": "toys",
          "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/robots.jpg",
          "price": "0.15",
          "rating": 3,
          "stock": 12
        }
      ]

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Search Bar Example</h1>
      <Search onSearch={handleSearch} />
      <ComponentList components={initialComponents} searchQuery={searchQuery} />
    </div>
  );
};

export default Search;
