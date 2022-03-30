import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Meal = (props) => {
    const {strMeal , strInstructions , strMealThumb , idMeal} = props.meal ;
    const navigate = useNavigate () ;
    const showDetail = () => {
        navigate ('/meal-details/'+ idMeal)
    }
    return (
        <div className='p-2 border-2 shadow rounded '>
            <img className='rounded' src={strMealThumb} alt="" />
            <h1 className='text-3xl'>{strMeal}</h1>
            <h4 className='text-gray-900 py-5'>{strInstructions.slice (0 ,200)}</h4>
           <div className="flex justify-around">
            <Link to = {'/meal-details/'+ idMeal} style={{color: 'gray'}}>details</Link>
           <button onClick={showDetail} className='bg-amber-700 py-2 px-6 rounded hover:bg-orange-800 hover:text-white'>Details</button>
           </div>
        </div>
    );
};

export default Meal;