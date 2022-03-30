import React from 'react';

const Detail = ({detail}) => {
    return (
        <div>
            <div className="md:flex justify-center  m-20 gap-7">
            <div className='md:order-1 sm:order-2 mt-7 mx-9'>
                    <h2 className='text-6xl pb-7'>{detail?.strArea}</h2>
                    <hr />
                    <h2 className='text-2xl pb-4'>Category: <span className='text-gray-600'>{detail?.strCategory}</span></h2>
                    <p className='text-xl pb-4'>Instructions: <span className='text-lg text-gray-600'>{detail?.strInstructions}</span></p>
                    <p className='text-xl pb-4'>Tags: <span className=' text-gray-600'>{detail?.strTags}</span></p>
                    <hr />
                    <button>{detail?.strYoutube}</button>
                </div>
                <img className='md:order-2 sm:order-1 w-500' src={detail?.strMealThumb } alt="" />

            </div>

        </div>
    );
};

export default Detail;