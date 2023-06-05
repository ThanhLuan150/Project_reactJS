import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageAdmin from './pageAdmin';

const Delete = () => {
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            await axios.delete(`https://63a5721a318b23efa793a770.mockapi.io/api/produce/${id}`);
            alert('Đã xóa thành công!');
            
            setTimeout(() => {
                window.location = '/Admin';
            }, 100);
        } catch (error) {
            console.log('Không xóa thành công:', error);
        }
    };

    useEffect(() => {
        handleDelete();
    }, []);
};

export default Delete;
