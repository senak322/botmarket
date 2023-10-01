import React from 'react';
import "./ProductList.css"
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div>
            ProductList
            <Link to="/form">Заполнить форму</Link>
        </div>
    );
};

export default ProductList;