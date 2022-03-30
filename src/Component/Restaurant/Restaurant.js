import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText , setSearchText] = useState('');
    const [meals , setMeals] = useState([]) ;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    useEffect (()=>{
        fetch (url)
        .then (res => res.json ())
        .then (data => setMeals(data.meals));
    } , [searchText])
    const searchFood = e => {
        setSearchText(e.target.value) ;
    }
    return (
        <div>
            <div className="flex justify-center p-3">
            <input onChange={searchFood} className='text-center text-black rounded-sm border-solid border-b-2 border-indigo-600 focus:border-0' type="text" placeholder='Search Here' />
            </div>
            <div  className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 m-20'>

{
    meals.map (meal => <Meal key = {meal.idMeal} meal= {meal}></Meal>)
}
        </div>
        </div>
    );
};

export default Restaurant;