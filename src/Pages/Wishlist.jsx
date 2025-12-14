
// import { useEffect } from "react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from "recharts";
import { loadWishlist, removeFromWishlist } from "../Utils/LocalStorage";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(() => loadWishlist());
    const [sortOrder, setSortOrder] = useState("none")
    // useEffect(() => {
    //     const savedList = JSON.parse(localStorage.getItem('wishList'))
    //     if (savedList) setWishlist(savedList)
    // }, []);

    if(!wishlist.length) return <p> No Data</p>

    const sortedItem = (
        () => {
        if (sortOrder === 'price-asc'){
            return [...wishlist].sort((a, b) => a.price - b.price)
        } else if (sortOrder === 'price-desc'){
            return [...wishlist].sort((a, b) => b.price - a.price)
        } else {
           return wishlist
        }
    }
    ) ();

    const handleRemove = id => {
        //remove from localStorage
        removeFromWishlist(id)
        //for UI instant update 
        setWishlist(prev => prev.filter(p => p.id !== id))
    }
    // const handleRemove = id => {
    //     const existingList = JSON.parse(localStorage.getItem('wishList'))

    //     let updatedList = existingList.filter(p => p.id !== id)

    //     setWishlist(updatedList) 
    //     localStorage.setItem('wishList', JSON.stringify(updatedList))
    // }

    // generate chart data
    const totalsByCategory = {}
    wishlist.forEach(product => {
        const category = product.category

        totalsByCategory[category] = (totalsByCategory[category] || 0) + product.price
    })

    const chartData = Object.keys(totalsByCategory).map(category => ({
        category: category,
        total: totalsByCategory[category],
    }))

    console.log(chartData)
    return (
        <div className="space-y-6">
            <div className="flex justify-between py-5 items-center">
                <h1 className="text-3xl font-semibold">
                    WISHLIST: <span className=" text-gray-400">({sortedItem.length})</span>PRODUCTS FOUND
                </h1>
               <label className="form-control w-full max-w-xs">
                 <select className="select select-bordered" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                    <option value="none">Sort by Price</option>
                    <option value="price-asc">Low-&gt;High</option>
                    <option value="price-desc">High-&gt;Low</option>
                </select>
               </label>
            </div>
            <div className="space-y-3">
                {sortedItem.map(p => (
                    <div key={p.id} className="card card-side bg-base-100 shadow border">
                        <figure>
                            <img className="w-40 h-28 object-cover"
                            src={p.image}
                            alt={p.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.name}</h2>
                            <p>{p.category}</p>
                            <div className="card-actions justify-end">
                                <div className="flex gap-6 items-center">
                                    <h1 className="text-2xl ">${p.price}</h1>
                                    <button onClick={() => handleRemove(p.id)} className="btn btn-primary">remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* chart */}
            <div className="space-y-3">
                <h3 className="text-xl font-semibold">Wishlist Summery</h3>
                <div className="bg-base-100 border rounded-xl p-4 h-80">
                    <BarChart
                            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis width="auto" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;