import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product details
        axios.get(`http://localhost:3000/product/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-white text-center">Loading...</div>;
    }

    if (!product) {
        return <div className="text-white text-center">Product not found!</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-white text-3xl font-bold mb-6 text-center">{product.title}</h1>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-cover rounded mb-6 object-fill"
                />
                <p className="text-gray-300 mb-4">
                    <strong>Description:</strong> {product.description}
                </p>
                <p className="text-gray-300 mb-4">
                    <strong>Price:</strong> ${product.price}
                </p>
                <p className="text-gray-300 mb-4">
                    <strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-300">
                    <strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default View;
