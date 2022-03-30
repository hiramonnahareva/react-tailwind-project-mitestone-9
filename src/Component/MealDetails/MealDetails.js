import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Detail from '../Detail/Detail';

const MealDetails = () => {
    const {mealId} = useParams ()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const [mealDetails , setMealDetails] = useState({})
    useEffect (()=> {
        fetch (url)
        .then (res => res.json())
        .then (data => setMealDetails(data.meals))
    },[mealId])
    console.log (mealDetails) ;
    return (
        <div>
            <Detail detail= {mealDetails[0]}></Detail>
        </div>
    );
};

export default MealDetails;