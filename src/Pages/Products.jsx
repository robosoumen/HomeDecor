import React from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
                    <div className='flex justify-between py-5 items-center'>
                        <p className='text-3xl font-semibold'>Featuted Products</p>
                        <Link className='btn btn-outline' to='products'>See All</Link>
                    </div>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                    {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                   }
                   </div>
                </div>
    );
};

export default Products;