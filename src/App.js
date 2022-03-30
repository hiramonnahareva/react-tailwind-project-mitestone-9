import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Restaurant from './Component/Restaurant/Restaurant';
import NotFound from './Component/NotFound/NotFound';
import MealDetails from './Component/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
       <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/rastaurant' element={<Restaurant></Restaurant>}/>
       <Route path='/meal-details/:mealId' element={<MealDetails> </MealDetails>}/>
       <Route path='*' element= {<NotFound></NotFound>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
