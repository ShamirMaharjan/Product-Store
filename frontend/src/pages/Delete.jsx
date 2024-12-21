import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import { useNavigate } from 'react-router-dom'

const Delete = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const handleDelete = () => {
        setLoading(true);

        axios.delete(`http://localhost:3000/product/${id}`).then((response) => {
            setLoading(false);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })

    }
    return (
        <div>
            {loading ? <Spinner /> : ''}
            <div className="flex justify-center items-center h-screen bg-gray-900 pb-48">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-white text-2xl font-bold mb-6 text-center">Are You Sure You Want To Delete This Product?</h1>
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Delete;