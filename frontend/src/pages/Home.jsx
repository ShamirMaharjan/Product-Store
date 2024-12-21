import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/spinner'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios.get("http://localhost:3000/product").then((response) => {
            setProducts(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }, []);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className='h-screen bg-gray-900'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 realtive hover:shadow-xl'>
                                <img src={product.image} alt="" className='w-full h-52' />
                                <h3 className='font-bold text-white'>{product.title}</h3>

                                <div>
                                    <span className='font-bold text-white'>Price: </span>
                                    <span className='text-white'> {product.price}</span>
                                </div>
                                <div className=' flex justify-between items-center'>
                                    <Link to={`/view/${product._id}`} className='bg-blue-500 text-white px-2 py-1 mt-2 rounded-lg'>View</Link>
                                    <Link to={`/edit/${product._id}`} className='bg-yellow-500 text-white px-2 py-1 mt-2 rounded-lg'>Edit</Link>
                                    <Link to={`/delete/${product._id}`} className='bg-red-500 text-white px-2 py-1 mt-2 rounded-lg'>Delete</Link>
                                </div>


                            </div>
                        ))}


                    </div>
                </div>

            )}

        </>
    )
}

export default Home