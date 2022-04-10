import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList/FoodList';

const AllFood = () => {


    const [foods, setFoods] = useState([]);

    useEffect(() => {
        
        async function getAllfoods() {
            const res = await axios.get('http://localhost:8080/api/v1/allfoods');
            setFoods(res.data);
        }

        getAllfoods();

    },[])


    return (
        <div>
            <h1>All Foods</h1>
            <FoodList foods={foods} />
      </div>
    )
}

export default AllFood;