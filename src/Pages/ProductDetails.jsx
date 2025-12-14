import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import { updateList } from '../Utils/LocalStorage';

const ProductDetails = () => {
    const {id} = useParams();
    const {products,loading,error} = useProducts();
    const product = products.find(p => String(p.id) === id)
    if (loading) return <p>Loading.....</p>
    if (error) return <p>Loading.....</p>
    const {name, category, price, image} = product || {};

    // const handleAddToWishList = () => {
    //    const existingList = JSON.parse(localStorage.getItem('wishList'))

    //    let updatedList = [];
    //    if(existingList) {
    //     const isDuplicate = existingList.some(p => p.id === product.id);
    //     if(isDuplicate) return alert('this product is already exist!!!')
    //     updatedList = [...existingList, product]
    //    } else {
    //     updatedList.push(product)
    //    }

    //    localStorage.setItem('wishList', JSON.stringify(updatedList))
    // }
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
                <button onClick={() => updateList(product)} className="btn btn-primary">Add to WishList</button>
                </div>
            </div>
        </div>
   
    );
};

export default ProductDetails;