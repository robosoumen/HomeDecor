import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const {products} = useProducts()
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products;

    // console.log(searchedProducts)
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <p className='text-3xl font-semibold'>Featuted Product <span className='text-gray-500'>({searchedProducts.length})products found</span></p>
                <label className="input">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Products" />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
            searchedProducts.map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
            }
            </div>
        </div>
    );
};

export default Products;