import React from 'react';

const Home = () => {
    return (
        <div className='md:flex justify-around items-center mx-auto mt-20'>
            <div className='pb-6 '>
            <h4 className='text-6xl text-center pb-6'>My Restaurant</h4>
            <p className='mx-20 text-xl text-gray-700 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fuga labore consequuntur dignissimos earum. Sed doloremque fugiat eaque architecto, quasi minima eius accusamus neque qui nisi similique veniam est ab!</p>
            </div>
            <img src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=" alt="" />
        </div>
    );
};

export default Home;