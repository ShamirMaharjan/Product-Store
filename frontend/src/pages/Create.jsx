import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const product = {
            title,
            description,
            price,
            image
        }
        setLoading(true);
        axios.post('http://localhost:3000/product', product).then((response) => {
            console.log(response.data);
            setLoading(false);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })

    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 pb-48">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">Create New Product</h1>
                {loading ? <Spinner /> : ''}
                <form onSubmit={handleProductSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Product Name"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="imageUrl"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image URL"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type='submit'
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
