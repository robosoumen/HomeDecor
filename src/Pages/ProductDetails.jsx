import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams();
    const {products,loading,error} = useProducts();
    const product = products.find(p => String(p.id) === id)
    if (loading) return <p>Loading.....</p>
    if (error) return <p>Loading.....</p>
    console.log(product)
    const {name, category, price, image} = product;
    return (
       <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{price}</button>
                </div>
            </div>
        </div>
   
    );
};

export default ProductDetails;