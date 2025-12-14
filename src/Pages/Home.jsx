import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';
import useProducts from '../Hooks/useProducts';

const Home = () => {
    // const products = useLoaderData()
    const {products, loading, error} = useProducts();
    // console.log(data)
    // console.log(products)
    const featuredProducts = products.slice(0, 6);
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <p className='text-3xl font-semibold'>Featuted Products</p>
                <Link className='btn btn-outline' to='products'>See All</Link>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
            featuredProducts.map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
           }
           </div>
        </div>
    );
};

export default Home;